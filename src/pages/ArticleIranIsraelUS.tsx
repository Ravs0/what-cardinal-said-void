import { useState, useMemo } from "react";
import { ChevronDown, BookOpen, Scale, Clock, Globe, Anchor, Gavel, ScrollText, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WorldStageNav from "@/components/WorldStageNav";
import monograph from "@/content/iran-monograph.json";

/* ────────────────────────────────────────────────────────────
 * Types
 * ──────────────────────────────────────────────────────────── */

type Block =
  | { type: "p" | "lead"; text: string }
  | { type: "h3" | "h4"; text: string }
  | { type: "ul" | "ol" | "footnotes"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "treaty"; text: string }
  | { type: "data"; title: string; cards: { title: string; items: string[] }[]; note?: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | {
      type: "timeline";
      items: { date: string; title: string; paragraphs: string[]; tag: string; kind: string }[];
    };

interface Section {
  id: string;
  number: string;
  label: string;
  title: string;
  blocks: Block[];
}

/* ────────────────────────────────────────────────────────────
 * Inline parser: ** for bold, _ for italic
 * ──────────────────────────────────────────────────────────── */

const renderInline = (text: string): React.ReactNode => {
  if (!text) return null;
  const tokens: { text: string; bold: boolean; italic: boolean }[] = [];
  let bold = false;
  let italic = false;
  let buffer = "";
  let i = 0;
  while (i < text.length) {
    if (text.slice(i, i + 2) === "**") {
      if (buffer) tokens.push({ text: buffer, bold, italic });
      buffer = "";
      bold = !bold;
      i += 2;
    } else if (text[i] === "_") {
      if (buffer) tokens.push({ text: buffer, bold, italic });
      buffer = "";
      italic = !italic;
      i += 1;
    } else {
      buffer += text[i];
      i += 1;
    }
  }
  if (buffer) tokens.push({ text: buffer, bold, italic });
  return tokens.map((t, idx) => {
    let node: React.ReactNode = t.text;
    if (t.italic) node = <em key={`i-${idx}`} className="text-cardinal/90 not-italic" style={{ fontStyle: "italic" }}>{node}</em>;
    if (t.bold) node = <strong key={`b-${idx}`} className="font-semibold text-[hsl(var(--text-primary))]">{node}</strong>;
    return <span key={idx}>{node}</span>;
  });
};

/* ────────────────────────────────────────────────────────────
 * Block renderers
 * ──────────────────────────────────────────────────────────── */

const Paragraph = ({ text, lead }: { text: string; lead?: boolean }) => (
  <p
    className={
      lead
        ? "font-serif text-lg sm:text-xl text-[hsl(var(--text-primary))] leading-relaxed mb-6"
        : "text-[hsl(var(--text-secondary))] leading-[1.85] mb-5 text-[1rem]"
    }
  >
    {renderInline(text)}
  </p>
);

const Heading3 = ({ text }: { text: string }) => (
  <h3 className="font-serif text-xl sm:text-2xl text-[hsl(var(--text-primary))] mt-10 mb-4">{renderInline(text)}</h3>
);

const Heading4 = ({ text }: { text: string }) => (
  <h4 className="font-serif italic text-lg text-[hsl(var(--text-primary))] mt-6 mb-3">{renderInline(text)}</h4>
);

const BulletList = ({ items, ordered }: { items: string[]; ordered?: boolean }) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`mb-6 space-y-2 ${ordered ? "list-decimal" : "list-disc"} pl-6 text-[hsl(var(--text-secondary))]`}>
      {items.map((it, idx) => (
        <li key={idx} className="leading-[1.75] pl-1">
          {renderInline(it)}
        </li>
      ))}
    </Tag>
  );
};

const Footnotes = ({ items }: { items: string[] }) => (
  <div className="mt-10 pt-6 border-t border-[hsl(var(--divider))]">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mb-3">Notes</p>
    <ol className="list-decimal pl-5 space-y-2 text-xs text-[hsl(var(--text-muted))] leading-relaxed">
      {items.map((it, idx) => (
        <li key={idx}>{renderInline(it)}</li>
      ))}
    </ol>
  </div>
);

const Quote = ({ text }: { text: string }) => (
  <blockquote className="my-8 pl-5 border-l-2 border-cardinal/40 italic text-[hsl(var(--text-primary))] font-serif text-lg leading-relaxed">
    {renderInline(text)}
  </blockquote>
);

const Treaty = ({ text }: { text: string }) => (
  <div className="my-7 surface rounded-md p-5 bg-[hsl(var(--surface-raised))]">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">Source text</p>
    <p className="text-sm text-[hsl(var(--text-secondary))] leading-[1.75] whitespace-pre-line">{renderInline(text)}</p>
  </div>
);

const DataSlide = ({
  title,
  cards,
  note,
}: {
  title: string;
  cards: { title: string; items: string[] }[];
  note?: string;
}) => (
  <div className="my-8 surface rounded-lg overflow-hidden">
    {title && (
      <div className="px-5 py-3 bg-[hsl(var(--surface-raised))] border-b border-[hsl(var(--divider))]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cardinal">{title}</p>
      </div>
    )}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[hsl(var(--divider))]">
      {cards.map((c, i) => (
        <div key={i} className="bg-[hsl(var(--surface))] p-5">
          <h5 className="font-serif text-base text-cardinal pb-2 mb-3 border-b border-[hsl(var(--divider))]">
            {renderInline(c.title)}
          </h5>
          <ul className="space-y-1.5 text-sm text-[hsl(var(--text-secondary))]">
            {c.items.map((it, j) => (
              <li key={j} className="leading-snug pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-cardinal">
                {renderInline(it)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {note && (
      <div className="px-5 py-3 border-t border-[hsl(var(--divider))] text-[11px] font-mono text-[hsl(var(--text-muted))] uppercase tracking-wider">
        {renderInline(note)}
      </div>
    )}
  </div>
);

const TableBlock = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="my-8 surface rounded-lg overflow-x-auto">
    <table className="w-full text-sm">
      {head.length > 0 && (
        <thead>
          <tr className="bg-[hsl(var(--surface-raised))] border-b-2 border-[hsl(var(--divider))]">
            {head.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-cardinal">
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[hsl(var(--divider))] last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 align-top text-[hsl(var(--text-secondary))] leading-relaxed">
                {renderInline(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Timeline = ({
  items,
}: {
  items: { date: string; title: string; paragraphs: string[]; tag: string; kind: string }[];
}) => (
  <div className="my-8 relative pl-0 sm:pl-10">
    <div className="hidden sm:block absolute left-[7px] top-2 bottom-2 w-px bg-[hsl(var(--divider))]" />
    <div className="space-y-6">
      {items.map((it, i) => (
        <div key={i} className="relative">
          <div
            className={`hidden sm:block absolute -left-[10px] top-[10px] w-4 h-4 rounded-full ${
              it.kind?.includes("major") ? "bg-cardinal" : "bg-[hsl(var(--background))] border-2 border-cardinal/60"
            }`}
            style={{ left: "-37px" }}
          />
          <div className="surface rounded-lg p-5">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cardinal">{it.date}</span>
              {it.tag && (
                <span className="tag-cardinal text-[9px]">{it.tag}</span>
              )}
            </div>
            <h5 className="font-serif text-lg text-[hsl(var(--text-primary))] mb-2">{renderInline(it.title)}</h5>
            {it.paragraphs.map((p, k) => (
              <p key={k} className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-2 last:mb-0">
                {renderInline(p)}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderBlock = (b: Block, key: number): React.ReactNode => {
  switch (b.type) {
    case "lead":
      return <Paragraph key={key} text={b.text} lead />;
    case "p":
      return <Paragraph key={key} text={b.text} />;
    case "h3":
      return <Heading3 key={key} text={b.text} />;
    case "h4":
      return <Heading4 key={key} text={b.text} />;
    case "ul":
      return <BulletList key={key} items={b.items} />;
    case "ol":
      return <BulletList key={key} items={b.items} ordered />;
    case "footnotes":
      return <Footnotes key={key} items={b.items} />;
    case "quote":
      return <Quote key={key} text={b.text} />;
    case "treaty":
      return <Treaty key={key} text={b.text} />;
    case "data":
      return <DataSlide key={key} title={b.title} cards={b.cards} note={b.note} />;
    case "table":
      return <TableBlock key={key} head={b.head} rows={b.rows} />;
    case "timeline":
      return <Timeline key={key} items={b.items} />;
  }
};

/* ────────────────────────────────────────────────────────────
 * Section card (collapsible)
 * ──────────────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  abstract: BookOpen,
  "sec-1": ScrollText,
  "sec-2": Search,
  "sec-war-powers": Gavel,
  "sec-3": Clock,
  "sec-4": Scale,
  "sec-5": Scale,
  "sec-6": Scale,
  "sec-7": Scale,
  "sec-8": Scale,
  "sec-9": Globe,
  "sec-10": Anchor,
  "sec-11": Globe,
  "sec-12": Search,
  "sec-13": Gavel,
  "sec-14": ScrollText,
  "sec-synth-add": Search,
  bibliography: BookOpen,
};

const SectionCard = ({
  section,
  open,
  onToggle,
}: {
  section: Section;
  open: boolean;
  onToggle: () => void;
}) => {
  const Icon = ICON_MAP[section.id] ?? ScrollText;

  // Build a short preview from the first paragraph
  const preview = useMemo(() => {
    const firstText = section.blocks.find(
      (b): b is { type: "p" | "lead"; text: string } => b.type === "p" || b.type === "lead",
    );
    if (!firstText) return "";
    const stripped = firstText.text.replace(/\*\*/g, "").replace(/_/g, "");
    return stripped.length > 180 ? stripped.slice(0, 180).trimEnd() + "..." : stripped;
  }, [section]);

  return (
    <div
      className={`surface rounded-lg overflow-hidden transition-all duration-300 ${
        open ? "border-cardinal/30" : "hover:border-cardinal/25"
      }`}
      id={section.id}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex items-start gap-4 group"
        aria-expanded={open}
      >
        <div
          className={`shrink-0 w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
            open ? "bg-cardinal/15 text-cardinal" : "bg-[hsl(var(--surface-raised))] text-[hsl(var(--text-muted))] group-hover:text-cardinal"
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal">
              {section.number || section.label || "Section"}
            </span>
            <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[hsl(var(--text-primary))] leading-snug mb-2">
            {section.title}
          </h3>
          {!open && preview && (
            <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed line-clamp-2">{preview}</p>
          )}
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[hsl(var(--text-muted))] transition-transform duration-300 mt-1 ${
            open ? "rotate-180 text-cardinal" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-5 sm:px-6 pb-8 pt-2 border-t border-[hsl(var(--divider))] animate-fade-up">
          <div className="max-w-prose">{section.blocks.map((b, i) => renderBlock(b as Block, i))}</div>
        </div>
      )}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
 * Bibliography
 * ──────────────────────────────────────────────────────────── */

const BibliographyCard = ({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) => {
  const groups = monograph.bibliography as { head: string; items: string[] }[];
  return (
    <div className={`surface rounded-lg overflow-hidden ${open ? "border-cardinal/30" : ""}`} id="bibliography">
      <button onClick={onToggle} className="w-full text-left p-5 sm:p-6 flex items-start gap-4 group" aria-expanded={open}>
        <div
          className={`shrink-0 w-10 h-10 rounded-md flex items-center justify-center ${
            open ? "bg-cardinal/15 text-cardinal" : "bg-[hsl(var(--surface-raised))] text-[hsl(var(--text-muted))]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal">Sources</span>
            <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[hsl(var(--text-primary))] leading-snug mb-1">
            Bibliography
          </h3>
          {!open && <p className="text-sm text-[hsl(var(--text-muted))]">{groups.length} source categories, treaties, judgments, and reports.</p>}
        </div>
        <ChevronDown className={`shrink-0 w-5 h-5 text-[hsl(var(--text-muted))] transition-transform duration-300 mt-1 ${open ? "rotate-180 text-cardinal" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-8 pt-2 border-t border-[hsl(var(--divider))] animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {groups.map((g, i) => (
              <div key={i}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cardinal mb-3">{g.head}</h4>
                <ul className="space-y-2 text-xs text-[hsl(var(--text-secondary))] leading-relaxed">
                  {g.items.map((it, j) => (
                    <li key={j} className="pl-4 -indent-4">{renderInline(it)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────── */

const ArticleIranIsraelUS = () => {
  const sections = monograph.sections as Section[];
  const meta = monograph.meta as { words: string; sections: number; sources: string; date: string };

  // Track which sections are open. Only one open at a time keeps the page tidy on mobile.
  const [openId, setOpenId] = useState<string | null>(null);
  const [bibOpen, setBibOpen] = useState(false);

  const toggle = (id: string) => {
    setBibOpen(false);
    setOpenId((cur) => (cur === id ? null : id));
    // smooth-scroll the card to the top of viewport
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // Group sections for the hub: Frontmatter / Frameworks / Belligerents / Theatres / Synthesis
  const groups = useMemo(() => {
    const find = (id: string) => sections.find((s) => s.id === id)!;
    return [
      {
        label: "Front matter",
        kicker: "Opening",
        ids: ["abstract", "sec-1"],
      },
      {
        label: "Method & framework",
        kicker: "Foundations",
        ids: ["sec-2", "sec-war-powers"],
      },
      {
        label: "The conflict in motion",
        kicker: "Record",
        ids: ["sec-3", "sec-4"],
      },
      {
        label: "The primary belligerents",
        kicker: "Three states",
        ids: ["sec-5", "sec-6", "sec-7"],
      },
      {
        label: "The wider theatre",
        kicker: "Secondary actors",
        ids: ["sec-8", "sec-9", "sec-10", "sec-11"],
      },
      {
        label: "Synthesis & reform",
        kicker: "Closing",
        ids: ["sec-12", "sec-synth-add", "sec-13", "sec-14"],
      },
    ].map((g) => ({ ...g, items: g.ids.map(find).filter(Boolean) }));
  }, [sections]);

  return (
    <Layout>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* ── Cover ── */}
        <header className="text-center pb-12 border-b-2 border-double border-[hsl(var(--text-primary))]/40">
          <div className="flex justify-center items-center gap-4 mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--text-muted))]">
            <span>Long-form Monograph</span>
            <span className="w-1 h-1 rounded-full bg-cardinal" />
            <span>{meta?.date ?? "April 2026"}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[hsl(var(--text-primary))] leading-[1.05] tracking-tight mb-5">
            Between Fire <span className="text-cardinal">&</span> Law
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[hsl(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed">
            The Iran, Israel, and United States Conflict of 2023 to 2026: a multi-perspectival legal, strategic, and normative
            analysis.
          </p>
          <div className="w-16 h-px bg-cardinal mx-auto my-8" />
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-4">
            {[
              { num: meta?.words ?? "22,500+", label: "words" },
              { num: String(meta?.sections ?? 18), label: "sections" },
              { num: meta?.sources ?? "100+", label: "primary sources" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl text-cardinal">{s.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ── Epigraph ── */}
        <div className="my-12 max-w-xl mx-auto pl-5 border-l-2 border-cardinal/50">
          <p className="font-serif italic text-base sm:text-lg text-[hsl(var(--text-primary))] leading-relaxed">
            "The law is reason, free from passion."
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mt-3">
            Aristotle, Nicomachean Ethics, Book V
          </p>
        </div>

        {/* ── Author's note ── */}
        <div className="my-12 surface rounded-lg p-6 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-3">Author's note</p>
          <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
            This monograph was prepared between January and April 2026 from publicly available primary sources, ICJ
            judgments, IAEA Board of Governors reports, UN Security Council resolutions, domestic constitutional instruments,
            and verified media reporting. Where facts remain disputed, evidentiary gaps are noted rather than resolved.
            Legal characterizations represent the author's analysis and do not reflect the positions of any government,
            organization, or institution. The methodology below describes itself as <em className="text-cardinal not-italic" style={{fontStyle:"italic"}}>internal coherence
            assessment,</em> a deliberately internal evaluative frame rather than an external one.
          </p>
        </div>

        {/* ── How to read ── */}
        <div className="my-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Skim",
              body: "Each section card opens a short preview. Click any card to expand the full chapter inline.",
            },
            {
              label: "Read",
              body: "Cards are grouped into six movements. Open one at a time, or jump between them using the index below.",
            },
            {
              label: "Cite",
              body: "Bibliography sits at the foot of the page, organized by category, treaty, judgment, and report.",
            },
          ].map((c) => (
            <div key={c.label} className="surface rounded-lg p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">{c.label}</p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* ── Index of sections ── */}
        <nav className="my-14 surface rounded-lg p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-4">Index</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 list-none">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => toggle(s.id)}
                  className="text-left w-full text-sm text-[hsl(var(--text-secondary))] hover:text-cardinal transition-colors flex gap-2 py-1"
                >
                  <span className="font-mono text-xs text-[hsl(var(--text-muted))] w-12 shrink-0">
                    {s.number || s.label || ""}
                  </span>
                  <span className="font-serif">{s.title}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpenId(null);
                  setBibOpen(true);
                  requestAnimationFrame(() => {
                    document.getElementById("bibliography")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  });
                }}
                className="text-left w-full text-sm text-[hsl(var(--text-secondary))] hover:text-cardinal transition-colors flex gap-2 py-1"
              >
                <span className="font-mono text-xs text-[hsl(var(--text-muted))] w-12 shrink-0">XV.</span>
                <span className="font-serif">Bibliography</span>
              </button>
            </li>
          </ol>
        </nav>

        {/* ── Section groups ── */}
        <div className="space-y-14">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cardinal">{g.kicker}</span>
                <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
                <span className="font-serif text-sm text-[hsl(var(--text-secondary))] italic">{g.label}</span>
              </div>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <SectionCard key={s.id} section={s} open={openId === s.id} onToggle={() => toggle(s.id)} />
                ))}
              </div>
            </div>
          ))}

          {/* Bibliography */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cardinal">Apparatus</span>
              <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
              <span className="font-serif text-sm text-[hsl(var(--text-secondary))] italic">Sources</span>
            </div>
            <BibliographyCard open={bibOpen} onToggle={() => setBibOpen((v) => !v)} />
          </div>
        </div>

        <WorldStageNav currentSlug="between-fire-and-law" />
      </article>
    </Layout>
  );
};

export default ArticleIranIsraelUS;
