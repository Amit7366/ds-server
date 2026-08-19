const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
const NAIVE_DATETIME =
  /^(\d{4}-\d{2}-\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?$/;
const EPOCH = /^\d{10,13}$/;

function pad2(value: number) {
  return String(value).padStart(2, '0');
}

/** Format a Date as a timezone-naive `YYYY-MM-DD HH:mm:ss` bound. */
export function formatNaiveDateTime(date: Date): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}:${pad2(date.getSeconds())}`;
}

export function isValidTimestampBound(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (DATE_ONLY.test(trimmed) || NAIVE_DATETIME.test(trimmed) || EPOCH.test(trimmed)) {
    return true;
  }
  return !Number.isNaN(Date.parse(trimmed));
}

/**
 * Normalize a filter bound to `YYYY-MM-DD HH:mm:ss` for lexicographic
 * comparison against stored transaction timestamps.
 *
 * Accepts date-only (`2026-08-19`), datetime-local (`2026-08-19T14:30`),
 * naive datetime (`2026-08-19 14:30:00`), ISO, or epoch ms/seconds.
 */
export function normalizeTimestampBound(value: string, bound: 'from' | 'to'): string {
  const trimmed = value.trim();

  if (DATE_ONLY.test(trimmed)) {
    return bound === 'from' ? `${trimmed} 00:00:00` : `${trimmed} 23:59:59`;
  }

  const naive = trimmed.match(NAIVE_DATETIME);
  if (naive) {
    const seconds = naive[4] ?? (bound === 'from' ? '00' : '59');
    return `${naive[1]} ${naive[2]}:${naive[3]}:${seconds}`;
  }

  if (EPOCH.test(trimmed)) {
    const numeric = Number(trimmed);
    const ms = trimmed.length <= 10 ? numeric * 1000 : numeric;
    return formatNaiveDateTime(new Date(ms));
  }

  const parsed = Date.parse(trimmed);
  if (!Number.isNaN(parsed)) {
    return formatNaiveDateTime(new Date(parsed));
  }

  return trimmed;
}

function naiveToIso(naive: string): string {
  return naive.replace(' ', 'T');
}

function naiveToEpochMs(naive: string): string | null {
  const parsed = Date.parse(naive.replace(' ', 'T'));
  if (Number.isNaN(parsed)) return null;
  return String(parsed);
}

/**
 * Mongo filter for `timestamp` strings stored as naive datetime, ISO, or epoch ms.
 * Uses `$or` so mixed historical formats still match a custom range.
 */
export function buildTimestampMongoFilter(
  fromDate?: string,
  toDate?: string,
): Record<string, unknown> | undefined {
  if (!fromDate && !toDate) return undefined;

  const fromNaive = fromDate ? normalizeTimestampBound(fromDate, 'from') : undefined;
  const toNaive = toDate ? normalizeTimestampBound(toDate, 'to') : undefined;

  const naive: Record<string, string> = {};
  const iso: Record<string, string> = {};
  const epoch: Record<string, string> = {};

  if (fromNaive) {
    naive.$gte = fromNaive;
    iso.$gte = naiveToIso(fromNaive);
    const fromMs = naiveToEpochMs(fromNaive);
    if (fromMs) epoch.$gte = fromMs;
  }
  if (toNaive) {
    naive.$lte = toNaive;
    iso.$lte = `${naiveToIso(toNaive)}.999Z`;
    const toMs = naiveToEpochMs(toNaive);
    if (toMs) epoch.$lte = toMs;
  }

  const branches: Record<string, unknown>[] = [{ timestamp: naive }, { timestamp: iso }];
  if (Object.keys(epoch).length > 0) {
    branches.push({ timestamp: epoch });
  }

  return { $or: branches };
}
