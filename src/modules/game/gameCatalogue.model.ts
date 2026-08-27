import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IGameCatalogue {
  tileId: string;
  title: string;
  providerKey: string;
  providerLabel: string;
  gameCode: string;
  gradient: string;
  glow: string;
  image: string;
  types: string[];
  vendorCode: string;
  sortOrder: number;
  game_name: string;
  game_type: string;
  game_image: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGameCatalogueDocument extends IGameCatalogue, Document {
  toSafeObject(): Record<string, unknown>;
}

export interface IGameCatalogueModel extends Model<IGameCatalogueDocument> {}

const gameCatalogueSchema = new Schema<IGameCatalogueDocument, IGameCatalogueModel>(
  {
    tileId: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    providerKey: { type: String, required: true, trim: true, index: true },
    providerLabel: { type: String, required: true, trim: true },
    gameCode: { type: String, required: true, trim: true, index: true },
    gradient: { type: String, default: '' },
    glow: { type: String, default: '' },
    image: { type: String, default: '' },
    types: [{ type: String }],
    vendorCode: { type: String, required: true, trim: true, index: true },
    sortOrder: { type: Number, default: 0 },
    game_name: { type: String, required: true, trim: true },
    game_type: { type: String, required: true, trim: true, index: true },
    game_image: { type: String, default: '' },
    provider: { type: String, required: true, trim: true, index: true },
  },
  {
    timestamps: true,
    collection: 'gamecatalogue',
  },
);

gameCatalogueSchema.index({ vendorCode: 1, sortOrder: 1 });
gameCatalogueSchema.index({ title: 1 });

gameCatalogueSchema.methods.toSafeObject = function toSafeObject(
  this: IGameCatalogueDocument,
) {
  return {
    id: this._id.toString(),
    tileId: this.tileId,
    title: this.title,
    providerKey: this.providerKey,
    providerLabel: this.providerLabel,
    gameCode: this.gameCode,
    gradient: this.gradient ?? '',
    glow: this.glow ?? '',
    image: this.image ?? '',
    types: this.types ?? [],
    vendorCode: this.vendorCode,
    sortOrder: this.sortOrder ?? 0,
    game_name: this.game_name,
    game_type: this.game_type,
    game_image: this.game_image ?? '',
    provider: this.provider,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const GameCatalogue: IGameCatalogueModel =
  (mongoose.models.GameCatalogue as IGameCatalogueModel) ||
  mongoose.model<IGameCatalogueDocument, IGameCatalogueModel>(
    'GameCatalogue',
    gameCatalogueSchema,
  );
