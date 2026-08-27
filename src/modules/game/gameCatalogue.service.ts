import mongoose from 'mongoose';
import { GameCatalogue, IGameCatalogueDocument } from './gameCatalogue.model';
import {
  buildTileId,
  buildVendorCode,
  normalizeProviderKey,
  resolveProviderStyle,
} from './gameCatalogue.style';
import { CreateGameInput, ListGamesQuery, UpdateGameInput } from './gameCatalogue.validation';
import { ConflictError, NotFoundError } from '../../utils/errors';

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function assertObjectId(id: string): void {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError('Game not found');
  }
}

async function findGameOrThrow(id: string): Promise<IGameCatalogueDocument> {
  assertObjectId(id);
  const game = await GameCatalogue.findById(id);
  if (!game) {
    throw new NotFoundError('Game not found');
  }
  return game;
}

async function assertTileIdAvailable(tileId: string, excludeId?: string): Promise<void> {
  const filter: Record<string, unknown> = { tileId };
  if (excludeId) {
    filter._id = { $ne: excludeId };
  }
  const exists = await GameCatalogue.exists(filter);
  if (exists) {
    throw new ConflictError('tileId already exists');
  }
}

export class GameCatalogueService {
  async listGames(query: ListGamesQuery) {
    const filter: Record<string, unknown> = {};

    if (query.provider) {
      filter.provider = normalizeProviderKey(query.provider);
    }
    if (query.game_type) {
      filter.game_type = query.game_type.trim().toLowerCase();
    }
    if (query.search) {
      const regex = new RegExp(escapeRegex(query.search), 'i');
      filter.$or = [
        { title: regex },
        { game_name: regex },
        { gameCode: regex },
        { tileId: regex },
        { provider: regex },
        { providerKey: regex },
        { providerLabel: regex },
        { vendorCode: regex },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const [items, total] = await Promise.all([
      GameCatalogue.find(filter)
        .sort({ provider: 1, sortOrder: 1, title: 1 })
        .skip(skip)
        .limit(query.limit),
      GameCatalogue.countDocuments(filter),
    ]);

    return {
      items: items.map((game) => game.toSafeObject()),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / Math.max(query.limit, 1))),
      },
    };
  }

  async listFilters() {
    const [providers, gameTypes] = await Promise.all([
      GameCatalogue.distinct('provider'),
      GameCatalogue.distinct('game_type'),
    ]);

    return {
      providers: providers.filter(Boolean).sort((a, b) => a.localeCompare(b)),
      gameTypes: gameTypes.filter(Boolean).sort((a, b) => a.localeCompare(b)),
    };
  }

  async getGameById(id: string) {
    const game = await findGameOrThrow(id);
    return game.toSafeObject();
  }

  async createGame(input: CreateGameInput) {
    const title = (input.title ?? input.game_name ?? '').trim();
    const image = (input.image ?? input.game_image ?? '').trim();
    const providerKey = normalizeProviderKey(input.provider);
    const vendorCode = buildVendorCode(providerKey, input.vendorCode);
    const gameCode = input.gameCode.trim();
    const tileId = buildTileId(vendorCode, gameCode, input.tileId);
    const gameType = input.game_type.trim().toLowerCase();
    const types = input.types?.length
      ? input.types.map((type) => type.trim().toLowerCase()).filter(Boolean)
      : [gameType];
    const style = resolveProviderStyle(providerKey);

    await assertTileIdAvailable(tileId);

    const game = await GameCatalogue.create({
      tileId,
      title,
      providerKey,
      providerLabel: (input.providerLabel ?? providerKey).trim().toUpperCase(),
      gameCode,
      gradient: input.gradient?.trim() || (image ? style.gradient : ''),
      glow: input.glow?.trim() || (image ? style.glow : ''),
      image,
      types,
      vendorCode,
      sortOrder: input.sortOrder ?? 0,
      game_name: title,
      game_type: gameType,
      game_image: image,
      provider: providerKey,
    });

    return game.toSafeObject();
  }

  async updateGame(id: string, input: UpdateGameInput) {
    const game = await findGameOrThrow(id);

    if (input.title !== undefined || input.game_name !== undefined) {
      const title = (input.title ?? input.game_name ?? game.title).trim();
      game.title = title;
      game.game_name = title;
    }

    if (input.image !== undefined || input.game_image !== undefined) {
      const image = (input.image ?? input.game_image ?? game.image).trim();
      game.image = image;
      game.game_image = image;
    }

    if (input.gameCode !== undefined) {
      game.gameCode = input.gameCode.trim();
    }

    if (input.provider !== undefined) {
      const providerKey = normalizeProviderKey(input.provider);
      game.provider = providerKey;
      game.providerKey = providerKey;
      if (input.providerLabel === undefined) {
        game.providerLabel = providerKey.toUpperCase();
      }
    }

    if (input.providerLabel !== undefined) {
      game.providerLabel = input.providerLabel.trim().toUpperCase();
    }

    if (input.game_type !== undefined) {
      game.game_type = input.game_type.trim().toLowerCase();
      if (input.types === undefined) {
        game.types = [game.game_type];
      }
    }

    if (input.types !== undefined) {
      game.types = input.types.map((type) => type.trim().toLowerCase()).filter(Boolean);
    }

    if (input.glow !== undefined) {
      game.glow = input.glow.trim();
    }
    if (input.gradient !== undefined) {
      game.gradient = input.gradient.trim();
    }
    if (input.sortOrder !== undefined) {
      game.sortOrder = input.sortOrder;
    }

    if (input.vendorCode !== undefined) {
      game.vendorCode = buildVendorCode(game.providerKey, input.vendorCode);
    } else if (input.provider !== undefined) {
      game.vendorCode = buildVendorCode(game.providerKey);
    }

    const shouldRebuildTileId =
      input.tileId !== undefined ||
      input.vendorCode !== undefined ||
      input.provider !== undefined ||
      input.gameCode !== undefined;

    if (shouldRebuildTileId) {
      const nextTileId = buildTileId(game.vendorCode, game.gameCode, input.tileId);
      if (nextTileId !== game.tileId) {
        await assertTileIdAvailable(nextTileId, game._id.toString());
        game.tileId = nextTileId;
      }
    }

    await game.save();
    return game.toSafeObject();
  }

  async deleteGame(id: string) {
    const game = await findGameOrThrow(id);
    const snapshot = game.toSafeObject();
    await game.deleteOne();
    return snapshot;
  }
}

export const gameCatalogueService = new GameCatalogueService();
