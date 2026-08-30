import PDFDocument from 'pdfkit';

type PdfLine = {
  supplier?: string;
  type?: string;
  currency?: string;
  totalBets?: number;
  totalWins?: number;
  profit?: number;
  rate?: number;
  ggr?: number;
};

type PdfUnmatched = {
  gameUid?: string;
  reason?: string;
  currency?: string;
  totalBets?: number;
  totalWins?: number;
};

export type SettlementPdfSource = {
  prefix: string;
  month: string;
  name?: string;
  email?: string;
  billingRegion?: string;
  previousBalance?: number;
  totalGgr?: number;
  deducted?: number;
  newBalance?: number;
  lines?: PdfLine[];
  unmatched?: PdfUnmatched[];
  settledAt?: Date | string;
  draft?: boolean;
};

const PAGE = { width: 595.28, height: 841.89, margin: 40 };
const INK = '#0f172a';
const MUTED = '#64748b';
const LINE = '#e2e8f0';
const ACCENT = '#1d4ed8';
const HEADER_BG = '#0f172a';

function money(value: number | undefined): string {
  return Number(value ?? 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function monthLabel(month: string): string {
  const [year, monthNum] = month.split('-').map(Number);
  if (!year || !monthNum) return month;
  return new Date(year, monthNum - 1, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function buildSettlementPdf(settlement: SettlementPdfSource): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margin: PAGE.margin,
      bufferPages: true,
      info: {
        Title: `Monthly GGR report — ${settlement.prefix} — ${settlement.month}`,
        Author: 'ApiVexo',
      },
    });
    const chunks: Buffer[] = [];
    doc.on('data', (chunk: Buffer) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const left = PAGE.margin;
    const right = PAGE.width - PAGE.margin;
    const contentWidth = right - left;

    const paintFooter = (pageNumber: number, pageCount: number) => {
      doc.save();
      doc.font('Helvetica').fontSize(8).fillColor(MUTED);
      doc.text(
        `ApiVexo  ·  A4 monthly GGR report  ·  ${settlement.prefix}  ·  ${settlement.month}`,
        left,
        PAGE.height - 28,
        { width: contentWidth - 90, align: 'left' },
      );
      doc.text(`Page ${pageNumber} / ${pageCount}`, left, PAGE.height - 28, {
        width: contentWidth,
        align: 'right',
      });
      doc.restore();
    };

    const ensureSpace = (needed: number) => {
      if (y + needed > PAGE.height - 48) {
        doc.addPage();
        y = PAGE.margin;
      }
    };

    // Header bar
    doc.save();
    doc.rect(0, 0, PAGE.width, 78).fill(HEADER_BG);
    doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(16);
    doc.text('ApiVexo', left, 22, { width: contentWidth });
    doc.font('Helvetica').fontSize(9).fillColor('#cbd5e1');
    doc.text('Monthly GGR report', left, 44, { width: 280 });
    doc.font('Helvetica-Bold').fontSize(11).fillColor('#ffffff');
    doc.text(monthLabel(settlement.month), left, 22, { width: contentWidth, align: 'right' });
    doc.font('Helvetica').fontSize(9).fillColor('#93c5fd');
    doc.text(settlement.draft ? 'PREVIEW — not settled' : 'Settled invoice', left, 44, {
      width: contentWidth,
      align: 'right',
    });
    doc.restore();

    let y = 98;
    doc.font('Helvetica-Bold').fontSize(18).fillColor(INK);
    doc.text('Provider GGR calculation', left, y, { width: contentWidth });
    y += 28;

    const meta = [
      ['Account', settlement.name || '—'],
      ['Prefix', settlement.prefix],
      ['Email', settlement.email || '—'],
      ['Region', (settlement.billingRegion || '').toUpperCase() || '—'],
      ['Period', `${settlement.month}-01  to  month end`],
      [
        'Settled at',
        settlement.draft
          ? 'Draft (not deducted)'
          : settlement.settledAt
            ? new Date(settlement.settledAt).toLocaleString('en-US')
            : '—',
      ],
    ];

    const colW = contentWidth / 2;
    meta.forEach((row, index) => {
      const col = index % 2;
      const rowIndex = Math.floor(index / 2);
      const x = left + col * colW;
      const rowY = y + rowIndex * 28;
      doc.font('Helvetica').fontSize(8).fillColor(MUTED).text(row[0], x, rowY);
      doc.font('Helvetica-Bold').fontSize(10).fillColor(INK).text(row[1], x, rowY + 11, {
        width: colW - 12,
      });
    });
    y += Math.ceil(meta.length / 2) * 28 + 12;

    doc.moveTo(left, y).lineTo(right, y).strokeColor(LINE).lineWidth(1).stroke();
    y += 16;

    doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text('Prepaid summary', left, y);
    y += 20;

    const cards = [
      { label: 'Balance before', value: money(settlement.previousBalance) },
      { label: 'GGR calculated', value: money(settlement.totalGgr) },
      { label: 'Deducted', value: money(settlement.deducted) },
      { label: 'Balance after', value: money(settlement.newBalance) },
    ];
    const cardGap = 10;
    const cardW = (contentWidth - cardGap * 3) / 4;
    cards.forEach((card, index) => {
      const x = left + index * (cardW + cardGap);
      doc.save();
      doc.roundedRect(x, y, cardW, 52, 6).fill('#f8fafc');
      doc.roundedRect(x, y, cardW, 52, 6).strokeColor(LINE).lineWidth(0.8).stroke();
      doc.restore();
      doc.font('Helvetica').fontSize(7).fillColor(MUTED).text(card.label, x + 8, y + 10, {
        width: cardW - 16,
      });
      doc.font('Helvetica-Bold').fontSize(11).fillColor(index === 1 ? ACCENT : INK);
      doc.text(card.value, x + 8, y + 26, { width: cardW - 16 });
    });
    y += 68;

    doc.font('Helvetica').fontSize(8).fillColor(MUTED);
    doc.text(
      'Formula: Provider GGR = MAX(Total bets − Total wins, 0) × provider rate. Isolated per provider and currency.',
      left,
      y,
      { width: contentWidth },
    );
    y += 22;

    doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text('Provider lines', left, y);
    y += 16;

    const columns = [
      { key: 'supplier', label: 'Supplier', w: 118, align: 'left' as const },
      { key: 'type', label: 'Type', w: 88, align: 'left' as const },
      { key: 'currency', label: 'CCY', w: 32, align: 'left' as const },
      { key: 'totalBets', label: 'Bets', w: 58, align: 'right' as const },
      { key: 'totalWins', label: 'Wins', w: 58, align: 'right' as const },
      { key: 'profit', label: 'Profit', w: 58, align: 'right' as const },
      { key: 'rate', label: 'Rate', w: 40, align: 'right' as const },
      { key: 'ggr', label: 'GGR', w: 63, align: 'right' as const },
    ];

    const drawHeaderRow = () => {
      doc.save();
      doc.rect(left, y, contentWidth, 22).fill('#eef2ff');
      doc.restore();
      let x = left;
      doc.font('Helvetica-Bold').fontSize(7).fillColor(MUTED);
      for (const col of columns) {
        doc.text(col.label, x + 4, y + 7, { width: col.w - 8, align: col.align });
        x += col.w;
      }
      y += 22;
    };

    drawHeaderRow();
    const lines = settlement.lines ?? [];
    if (lines.length === 0) {
      doc.font('Helvetica').fontSize(9).fillColor(MUTED);
      doc.text('No matched provider activity for this month.', left + 4, y + 8, {
        width: contentWidth,
      });
      y += 28;
    } else {
      lines.forEach((line, index) => {
        ensureSpace(22);
        if (index > 0 && (y - PAGE.margin) % 700 < 22) {
          // keep header if we just page-broke
        }
        if (y === PAGE.margin) drawHeaderRow();
        if (index % 2 === 1) {
          doc.save();
          doc.rect(left, y, contentWidth, 20).fill('#f8fafc');
          doc.restore();
        }
        const values = [
          line.supplier || '—',
          line.type || '—',
          line.currency || '—',
          money(line.totalBets),
          money(line.totalWins),
          money(line.profit),
          `${Number(line.rate ?? 0)}%`,
          money(line.ggr),
        ];
        let x = left;
        doc.font('Helvetica').fontSize(7).fillColor(INK);
        columns.forEach((col, colIndex) => {
          doc.text(values[colIndex], x + 4, y + 6, { width: col.w - 8, align: col.align });
          x += col.w;
        });
        y += 20;
      });

      ensureSpace(24);
      doc.save();
      doc.rect(left, y, contentWidth, 22).fill('#0f172a');
      doc.restore();
      doc.font('Helvetica-Bold').fontSize(8).fillColor('#ffffff');
      doc.text('Total GGR', left + 4, y + 7, { width: 300 });
      doc.text(money(settlement.totalGgr), left, y + 7, { width: contentWidth - 8, align: 'right' });
      y += 32;
    }

    const unmatched = settlement.unmatched ?? [];
    if (unmatched.length > 0) {
      ensureSpace(40);
      doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text('Unmatched games (GGR 0)', left, y);
      y += 16;
      unmatched.forEach((row) => {
        ensureSpace(16);
        doc.font('Helvetica').fontSize(8).fillColor(MUTED);
        doc.text(
          `${row.gameUid || '—'}  ·  ${row.currency || ''}  ·  bets ${money(row.totalBets)}  ·  wins ${money(row.totalWins)}  ·  ${row.reason || ''}`,
          left,
          y,
          { width: contentWidth },
        );
        y += 14;
      });
    }

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i += 1) {
      doc.switchToPage(range.start + i);
      paintFooter(i + 1, range.count);
    }
    doc.end();
  });
}
