// Guía completa de pérdida de peso con comida peruana
// Tono: motivador, cercano, español peruano
// Estructura: 25-30 páginas listo para Canva

const {
  Document, Packer, Paragraph, TextRun, Header, Footer,
  AlignmentType, HeadingLevel, PageNumber, PageBreak,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  ShadingType, NumberFormat, PageOrientation, LevelFormat,
  convertInchesToTwip, Break
} = require("docx");
const fs = require("fs");

// ============================================================
// PALETA — Cálida, cercana, inspirada en colores peruanos
// ============================================================
const P = {
  primary: "#7A2E1F",     // Rojo terracota (símil cerámica peruana)
  body: "#2B2018",        // Marrón oscuro cálido
  secondary: "#6B5847",   // Marrón medio
  accent: "#D9822B",      // Naranja/ámbar (ají, mango)
  surface: "#FFF4E6",     // Crema cálida
  green: "#4A7C3A",       // Verde fresco (alimentos saludables)
  redsoft: "#C0392B",     // Rojo moderado (prohibidos)
  yellow: "#E6B422",      // Amarillo maíz
};
const c = (hex) => hex.replace("#", "");

// ============================================================
// HELPERS DE FORMATEO
// ============================================================
const allNoBorders = {
  top:    { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left:   { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right:  { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideVertical:   { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

const thinBorders = (color = P.secondary) => ({
  top:    { style: BorderStyle.SINGLE, size: 4, color: c(color) },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: c(color) },
  left:   { style: BorderStyle.SINGLE, size: 4, color: c(color) },
  right:  { style: BorderStyle.SINGLE, size: 4, color: c(color) },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: c(color) },
  insideVertical:   { style: BorderStyle.SINGLE, size: 4, color: c(color) },
});

// Heading 1 — Capítulo
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.LEFT,
    spacing: { before: 320, after: 140, line: 300 },
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 30,
        color: c(P.primary),
        font: { ascii: "Calibri", eastAsia: "Microsoft YaHei" },
      }),
    ],
  });
}

// Heading 2 — Sección
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 100, line: 280 },
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 24,
        color: c(P.accent),
        font: { ascii: "Calibri" },
      }),
    ],
  });
}

// Heading 3 — Subsección
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    alignment: AlignmentType.LEFT,
    spacing: { before: 160, after: 80, line: 260 },
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 21,
        color: c(P.body),
        font: { ascii: "Calibri" },
      }),
    ],
  });
}

// Body paragraph
function p(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 260, after: 60 },
    indent: { firstLine: 0 },
    children: [
      new TextRun({
        text: text,
        size: 19,
        color: c(P.body),
        font: { ascii: "Calibri" },
        ...opts,
      }),
    ],
  });
}

// Body paragraph with mixed runs (for bold parts)
function pRich(runs, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 260, after: 60 },
    ...opts,
    children: runs.map(r => {
      if (typeof r === "string") {
        return new TextRun({ text: r, size: 19, color: c(P.body), font: { ascii: "Calibri" } });
      }
      return new TextRun({
        text: r.text,
        size: r.size || 19,
        bold: r.bold || false,
        italics: r.italics || false,
        color: c(r.color || P.body),
        font: { ascii: "Calibri" },
      });
    }),
  });
}

// Bullet point
function bullet(text, level = 0) {
  return new Paragraph({
    spacing: { line: 240, after: 40 },
    indent: { left: 360 + level * 360, hanging: 240 },
    children: [
      new TextRun({ text: "• ", size: 19, color: c(P.accent), bold: true, font: { ascii: "Calibri" } }),
      new TextRun({ text: text, size: 19, color: c(P.body), font: { ascii: "Calibri" } }),
    ],
  });
}

// Bullet with bold lead-in (e.g., "Tip: ...")
function bulletLead(lead, rest, level = 0) {
  return new Paragraph({
    spacing: { line: 240, after: 40 },
    indent: { left: 360 + level * 360, hanging: 240 },
    children: [
      new TextRun({ text: "• ", size: 19, color: c(P.accent), bold: true, font: { ascii: "Calibri" } }),
      new TextRun({ text: lead, size: 19, color: c(P.primary), bold: true, font: { ascii: "Calibri" } }),
      new TextRun({ text: rest, size: 19, color: c(P.body), font: { ascii: "Calibri" } }),
    ],
  });
}

// Tip box (amber)
function tipBox(title, text) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 8, color: c(P.accent) },
      bottom: { style: BorderStyle.SINGLE, size: 8, color: c(P.accent) },
      left:   { style: BorderStyle.SINGLE, size: 24, color: c(P.accent) },
      right:  { style: BorderStyle.SINGLE, size: 4, color: c(P.accent) },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical:   { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: c(P.surface) },
            margins: { top: 120, bottom: 120, left: 200, right: 200 },
            children: [
              new Paragraph({
                spacing: { line: 240, after: 60 },
                children: [
                  new TextRun({ text: "💡 " + title, bold: true, size: 21, color: c(P.primary), font: { ascii: "Calibri" } }),
                ],
              }),
              new Paragraph({
                spacing: { line: 240 },
                children: [
                  new TextRun({ text: text, size: 19, color: c(P.body), font: { ascii: "Calibri" } }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// Image placeholder
function imgPlaceholder(description, height = 120) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top:    { style: BorderStyle.DASHED, size: 8, color: c(P.secondary) },
      bottom: { style: BorderStyle.DASHED, size: 8, color: c(P.secondary) },
      left:   { style: BorderStyle.DASHED, size: 8, color: c(P.secondary) },
      right:  { style: BorderStyle.DASHED, size: 8, color: c(P.secondary) },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical:   { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [
      new TableRow({
        cantSplit: true,
        height: { value: height * 20, rule: "atLeast" },
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "F5F0E8" },
            margins: { top: 120, bottom: 120, left: 200, right: 200 },
            verticalAlign: "center",
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 40 },
                children: [
                  new TextRun({ text: "📸 ESPACIO PARA IMAGEN", bold: true, size: 19, color: c(P.secondary), font: { ascii: "Calibri" } }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240 },
                children: [
                  new TextRun({ text: description, italics: true, size: 18, color: c(P.secondary), font: { ascii: "Calibri" } }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// Table cell helper
function cell(text, opts = {}) {
  const isHeader = opts.header || false;
  const align = opts.align || AlignmentType.LEFT;
  const fill = opts.fill || (isHeader ? P.primary : "FFFFFF");
  const color = isHeader ? "FFFFFF" : (opts.color || P.body);
  const bold = isHeader || opts.bold || false;
  return new TableCell({
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: { type: ShadingType.CLEAR, fill: c(fill) },
    margins: { top: 60, bottom: 60, left: 120, right: 120 },
    verticalAlign: "center",
    children: [
      new Paragraph({
        alignment: align,
        spacing: { line: 240 },
        children: [
          new TextRun({
            text: String(text),
            size: isHeader ? 19 : 17,
            bold: bold,
            color: c(color),
            font: { ascii: "Calibri" },
          }),
        ],
      }),
    ],
  });
}

// Build a simple table from header row + data rows
function buildTable(headers, rows, columnWidths = null) {
  const headerRow = new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: headers.map((h, i) =>
      cell(h, { header: true, align: AlignmentType.CENTER, width: columnWidths ? columnWidths[i] : undefined })
    ),
  });
  const dataRows = rows.map((r, idx) =>
    new TableRow({
      cantSplit: true,
      children: r.map((cellData, i) => {
        const isAlt = idx % 2 === 1;
        return cell(cellData, {
          width: columnWidths ? columnWidths[i] : undefined,
          fill: isAlt ? P.surface : "FFFFFF",
          align: i === 0 ? AlignmentType.LEFT : AlignmentType.LEFT,
        });
      }),
    })
  );
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: thinBorders(P.secondary),
    rows: [headerRow, ...dataRows],
  });
}

// Empty paragraph for spacing
function spacer(after = 60) {
  return new Paragraph({
    spacing: { after: after },
    children: [new TextRun({ text: "" })],
  });
}

// Page break paragraph
function pageBreak() {
  return new Paragraph({
    children: [new PageBreak()],
  });
}

// Decorative divider (paragraph border)
function divider() {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: c(P.accent), space: 1 },
    },
    children: [new TextRun({ text: "" })],
  });
}

// Quote / motivacional
function quote(text, author = null) {
  const runs = [
    new TextRun({ text: '"' + text + '"', italics: true, size: 21, color: c(P.primary), font: { ascii: "Calibri" } }),
  ];
  if (author) {
    runs.push(new TextRun({ text: "  — " + author, size: 18, color: c(P.secondary), font: { ascii: "Calibri" } }));
  }
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 120, line: 260 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 24, color: c(P.accent), space: 12 },
    },
    indent: { left: 360 },
    children: runs,
  });
}

module.exports = {
  P, c, allNoBorders, thinBorders,
  h1, h2, h3, p, pRich, bullet, bulletLead,
  tipBox, imgPlaceholder, cell, buildTable,
  spacer, pageBreak, divider, quote,
  // re-export docx pieces needed by cover
  Document, Packer, Paragraph, TextRun, Header, Footer,
  AlignmentType, HeadingLevel, PageNumber, PageBreak,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  ShadingType, NumberFormat, PageOrientation,
};
