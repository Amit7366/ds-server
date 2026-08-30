import { buildSupplierKey } from './apiQuotation.keys';

/** Compact catalogue slugs (no hyphens) keyed by quotation supplierKey. */
const PROVIDER_KEY_ALIASES: Record<string, string[]> = {
  jili: ['jili', 'jilli'],
  'pragmatic-play': ['pragmatic'],
  'pragmatic-play-live': ['pragmatic'],
  'pragmatic-play-live-premium': ['pragmatic'],
  'evolution-live': ['evolution'],
  'evolution-live-premium': ['evolution'],
  'play-n-go': ['playngo'],
  'relax-gaming': ['relaxgaming'],
  'eazygaming-eg46': ['eazygaming'],
  'fa-chai-gaming': ['fachai'],
  'ideal-gaming': ['ideal'],
  kingmidas: ['km', 'kingmidas'],
  'evo-play': ['evoplay'],
  'ezugi-gmag': ['ezugi'],
  'playtech-live': ['playtech'],
  'playace-aggaming': ['playace', 'aggaming'],
  'unitedgaming-ug': ['ug', 'unitedgaming'],
  'microgaming-mg': ['microgaming', 'mg'],
  'on-gaming': ['ongaming'],
  'yeebet-live': ['yeebet'],
  bgaming: ['bgaming', 'bggaming'],
  'no-limit-city': ['nolimitcity', 'nolimit'],
  'big-time-gaming': ['bigtimegaming', 'btg'],
  netent: ['netent'],
  skywind: ['skywind'],
  'red-tiger': ['redtiger'],
  playson: ['playson'],
  gameart: ['gameart'],
  spribe: ['spribe'],
  jdb: ['jdb'],
  tada: ['tada'],
  t1gaming: ['t1gaming'],
  pgsoft: ['pgsoft'],
  pgsgaming: ['pgsgaming'],
  rich88: ['rich88'],
  nextspin: ['nextspin'],
  cq9: ['cq9'],
  habanero: ['habanero'],
  ygrgaming: ['ygrgaming'],
  koolbet: ['koolbet'],
  bng: ['bng'],
  hacksaw: ['hacksaw'],
  turbogames: ['turbogames'],
  onegaming: ['onegaming'],
  '5g': ['5g'],
  '2j': ['2j'],
  epicwin: ['epicwin'],
  smartsoft: ['smartsoft'],
  wonwon: ['wonwon'],
  btgaming: ['btgaming'],
  pixmove: ['pixmove'],
  galaxsys: ['galaxsys'],
  expanse: ['expanse'],
  kygaming: ['kygaming'],
  fastspin: ['fastspin'],
  sexybcrt: ['sexybcrt'],
  dpgame: ['dpgame'],
  sagaming: ['sagaming'],
  tfgaming: ['tfgaming'],
  dreamgaming: ['dreamgaming'],
  astargaming: ['astargaming'],
};

function compactKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function normalizeProviderKeyList(values: string[] | undefined): string[] {
  const unique = new Set<string>();
  for (const value of values ?? []) {
    const key = compactKey(value);
    if (key) unique.add(key);
  }
  return [...unique];
}

/** Catalogue-facing slugs for a quotation supplier. Always includes the compact supplier key. */
export function resolveDefaultProviderKeys(supplier: string, supplierKey?: string): string[] {
  const key = supplierKey || buildSupplierKey(supplier);
  const aliases = PROVIDER_KEY_ALIASES[key] ?? [];
  return normalizeProviderKeyList([compactKey(key), ...aliases]);
}

export function resolveEffectiveProviderKeys(input: {
  supplier: string;
  supplierKey?: string;
  providerKeys?: string[];
}): string[] {
  const explicit = normalizeProviderKeyList(input.providerKeys);
  if (explicit.length > 0) return explicit;
  return resolveDefaultProviderKeys(input.supplier, input.supplierKey);
}
