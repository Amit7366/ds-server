export type ProviderStyle = {
  glow: string;
  gradient: string;
};

export const DEFAULT_PROVIDER_STYLE: ProviderStyle = {
  glow: '#6b7280',
  gradient: 'from-[#374151] via-[#1f2937] to-[#111827]',
};

const PROVIDER_STYLE: Record<string, ProviderStyle> = {
  evolution: {
    glow: '#93c5fd',
    gradient: 'from-[#1e3a8a] via-[#2563eb] to-[#172554]',
  },
  pgsoft: {
    glow: '#4ade80',
    gradient: 'from-[#14532d] via-[#166534] to-[#052e16]',
  },
  jilli: {
    glow: '#fb923c',
    gradient: 'from-[#7c2d12] via-[#ea580c] to-[#431407]',
  },
  spribe: {
    glow: '#fca5a5',
    gradient: 'from-[#7f1d1d] via-[#dc2626] to-[#450a0a]',
  },
  pragmatic: {
    glow: '#a78bfa',
    gradient: 'from-[#4c1d95] via-[#7c3aed] to-[#2e1065]',
  },
  fachai: {
    glow: '#60a5fa',
    gradient: 'from-[#1e3a8a] via-[#2563eb] to-[#172554]',
  },
  jdb: {
    glow: '#fbbf24',
    gradient: 'from-[#713f12] via-[#ca8a04] to-[#422006]',
  },
  yellowbat: {
    glow: '#e879f9',
    gradient: 'from-[#86198f] via-[#c026d3] to-[#4a044e]',
  },
  sexybcrt: {
    glow: '#f472b6',
    gradient: 'from-[#831843] via-[#db2777] to-[#500724]',
  },
  playtech: {
    glow: '#38bdf8',
    gradient: 'from-[#0c4a6e] via-[#0369a1] to-[#082f49]',
  },
  playngo: {
    glow: '#bef264',
    gradient: 'from-[#365314] via-[#65a30d] to-[#1a2e05]',
  },
  eazygaming: {
    glow: '#5eead4',
    gradient: 'from-[#134e4a] via-[#0d9488] to-[#042f2e]',
  },
  bggaming: {
    glow: '#fb923c',
    gradient: 'from-[#7c2d12] via-[#c2410c] to-[#431407]',
  },
  km: {
    glow: '#fcd34d',
    gradient: 'from-[#854d0e] via-[#ca8a04] to-[#422006]',
  },
  relaxgaming: {
    glow: '#a5b4fc',
    gradient: 'from-[#312e81] via-[#4338ca] to-[#1e1b4b]',
  },
  evoplay: {
    glow: '#d8b4fe',
    gradient: 'from-[#581c87] via-[#7e22ce] to-[#3b0764]',
  },
  ezugi: {
    glow: '#4ade80',
    gradient: 'from-[#14532d] via-[#16a34a] to-[#052e16]',
  },
  ideal: {
    glow: '#94a3b8',
    gradient: 'from-[#1e293b] via-[#334155] to-[#0f172a]',
  },
  cq9: {
    glow: '#67e8f9',
    gradient: 'from-[#0e7490] via-[#0891b2] to-[#164e63]',
  },
};

export function normalizeProviderKey(provider: string): string {
  return provider.trim().toLowerCase();
}

export function buildVendorCode(providerKey: string, override?: string): string {
  const value = (override ?? '').trim().toLowerCase();
  if (value) {
    return value.startsWith('awcv2_') ? value : `awcv2_${value}`;
  }
  const key = normalizeProviderKey(providerKey);
  return key.startsWith('awcv2_') ? key : `awcv2_${key}`;
}

export function buildTileId(vendorCode: string, gameCode: string, override?: string): string {
  const value = (override ?? '').trim();
  if (value) return value;
  return `${vendorCode}-${gameCode.trim()}`;
}

export function resolveProviderStyle(providerKey: string): ProviderStyle {
  return PROVIDER_STYLE[normalizeProviderKey(providerKey)] ?? DEFAULT_PROVIDER_STYLE;
}
