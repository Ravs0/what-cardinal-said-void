import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, BookOpen, FileText, Globe } from "lucide-react";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";

/* ─────────────────────────────── helpers ─── */

const SECTION_META = {
  chapters: {
    label: "The Foundation",
    sublabel: "Chapter Series",
    icon: BookOpen,
    accent: "text-cardinal border-cardinal/30",
    tagClass: "tag-cardinal",
  },
  articles: {
    label: "Systematic Inquiry",
    sublabel: "Article Archive",
    icon: FileText,
    accent: "text-[hsl(var(--text-secondary))] border-[hsl(var(--divider))]",
    tagClass: "tag",
  },
};

const GEOPOLITICS_PLACEHOLDER = {
  id: "iran-us-conflict",
  title: "Iran–US Conflict",
  subtitle: "An analysis of the escalating Iran–US tensions — legal dimensions, international law, and geopolitical consequences. Article incoming.",
  slug: "iran-us-conflict",
  category: "Geopolitics",
  upcoming: true,
};

/* ─────────────────────────────── page ─── */

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Hero ── */}
        <section className="pt-20 pb-16 border-b border-[hsl(var(--divider))]">
          <div className="max-w-2xl">
            <span className="tag-cardinal mb-5 inline-block">Est. 2024</span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[hsl(var(--text-primary))] leading-[1.05] tracking-tight mb-6">
              What <span className="text-cardinal">Cardinal</span> Said
            </h1>
            <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed max-w-xl mb-2">
              Law, absurdism, and the architecture of meaning — viewed through absolute tactical clarity.
            </p>
            <p className="text-sm text-[hsl(var(--text-muted))] italic">
              "The law is a mirror that has forgotten it is reflective."
            </p>
          </div>
        </section>

        {/* ── Core Pillars ── */}
        <section className="py-12 border-b border-[hsl(var(--divider))]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[hsl(var(--divider))] rounded-lg overflow-hidden">
            {[
              { title: "Strategic Logic", desc: "Deconstructing the calculated structures of legal necessity." },
              { title: "Aesthetic Entropy", desc: "Dissolution of static meaning in a world governed by shifting norms." },
              { title: "Absolute Absurdism", desc: "Confronting the contradictions of a world governed by laws it no longer understands." },
            ].map((p) => (
              <div key={p.title} className="bg-[hsl(var(--surface))] px-6 py-8">
                <h3 className="font-serif text-base text-[hsl(var(--text-primary))] mb-2">{p.title}</h3>
                <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Chapter Series ── */}
        <section className="py-14 border-b border-[hsl(var(--divider))]">
          <SectionHeader icon={BookOpen} sublabel="Chapter Series" label="The Foundation" />
          <div className="space-y-2 mt-8">
            {chapters.map((chapter, i) => (
              <ContentRow
                key={chapter.id}
                number={String(i + 1).padStart(2, "0")}
                to={`/chapter/${chapter.slug}`}
                title={chapter.title}
                description={chapter.subtitle}
                tag={chapter.category}
              />
            ))}
          </div>
        </section>

        {/* ── Articles ── */}
        <section className="py-14 border-b border-[hsl(var(--divider))]">
          <SectionHeader icon={FileText} sublabel="Article Archive" label="Systematic Inquiry" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                to={`/article/${article.slug}`}
                title={article.title}
                subtitle={article.subtitle}
                category={article.category}
              />
            ))}
          </div>
        </section>

        {/* ── Geopolitics ── */}
        <section className="py-14">
          <SectionHeader icon={Globe} sublabel="Geopolitics" label="The World Stage" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <ArticleCard
              to="/article/refuge-to-regional-fracture"
              title="From Refuge to Regional Fracture"
              subtitle="How Israel's inception and the early Arab-Israeli wars still shape the legal order -- from the UN Partition Plan to the 1967 occupation grammar."
              category="Legal History"
            />
            <ArticleCard
              to="/article/occupation-to-nationalization"
              title="From Occupation to Nationalization"
              subtitle="Iran 1953 and Suez 1956 as twin sovereignty crises that exposed the fault lines of the post-war international order."
              category="Legal History"
            />
            <ArticleCard
              to="/article/1967-1973-occupation"
              title="1967, 1973, and the Legal Architecture of Occupation"
              subtitle="How occupation, anti-conquest, and Security Council management became the region's governing legal form."
              category="Legal History"
            />
            <ArticleCard
              to="/article/revolution-hostages-iran"
              title="Revolution, Hostages, and the Breakdown of US-Iran Legal Relations"
              subtitle="How anti-imperial revolution collided with diplomatic law, state responsibility, and a region hardening into a security crisis."
              category="Legal History"
            />
          </div>
        </section>

      </div>
    </Layout>
  );
};

/* ─────────────────────────────── sub-components ─── */

const SectionHeader = ({ icon: Icon, sublabel, label }: { icon: React.ElementType; sublabel: string; label: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-end gap-3">
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-cardinal" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--text-muted))]">{sublabel}</span>
    </div>
    <h2 className="font-serif text-2xl sm:text-3xl text-[hsl(var(--text-primary))]">{label}</h2>
  </div>
);

const ContentRow = ({
  to, title, description, number, tag,
}: {
  to: string; title: string; description: string; number: string; tag: string;
}) => (
  <Link
    to={to}
    className="group flex items-center gap-5 px-5 py-4 rounded-lg surface hover:bg-[hsl(var(--surface-raised))] hover:border-cardinal/25 transition-all duration-200"
  >
    <span className="font-mono text-xs text-cardinal shrink-0 w-6">{number}</span>
    <div className="flex-grow min-w-0">
      <h4 className="font-serif text-lg text-[hsl(var(--text-primary))] group-hover:text-white transition-colors leading-snug truncate">
        {title}
      </h4>
      <p className="text-xs text-[hsl(var(--text-muted))] mt-0.5 line-clamp-1 leading-relaxed">{description}</p>
    </div>
    <span className="tag hidden sm:inline-flex shrink-0">{tag}</span>
    <ArrowRight className="w-4 h-4 shrink-0 text-[hsl(var(--text-muted))] group-hover:text-cardinal group-hover:translate-x-1 transition-all duration-200" />
  </Link>
);

const ArticleCard = ({
  to, title, subtitle, category, upcoming = false,
}: {
  to: string; title: string; subtitle: string; category: string; upcoming?: boolean;
}) => (
  <Link
    to={to}
    className={`group block rounded-lg surface p-6 transition-all duration-200 ${
      upcoming
        ? "opacity-70 cursor-default hover:opacity-80"
        : "hover:bg-[hsl(var(--surface-raised))] hover:border-cardinal/25"
    }`}
  >
    <div className="flex items-start justify-between gap-3 mb-4">
      <span className={`tag ${upcoming ? "border-amber-500/30 text-amber-400/70 bg-amber-500/5" : "tag-cardinal"}`}>
        {upcoming ? "Upcoming" : category}
      </span>
      {!upcoming && (
        <ArrowRight className="w-4 h-4 text-[hsl(var(--text-muted))] group-hover:text-cardinal group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5" />
      )}
    </div>
    <h4 className="font-serif text-xl text-[hsl(var(--text-primary))] leading-snug mb-3 group-hover:text-white transition-colors">
      {title}
    </h4>
    <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed line-clamp-3">
      {subtitle}
    </p>
    {!upcoming && (
      <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.15em] text-cardinal opacity-0 group-hover:opacity-100 transition-opacity">
        Read article →
      </p>
    )}
  </Link>
);

export default Index;
