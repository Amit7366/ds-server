/** Normalize supplier / type into a stable unique-key slug. */
export function slugifyKey(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[''`*]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildSupplierKey(supplier: string): string {
  return slugifyKey(supplier);
}

export function buildTypeKey(type: string): string {
  return slugifyKey(type);
}
