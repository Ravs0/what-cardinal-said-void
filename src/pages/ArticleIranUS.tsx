import Layout from "@/components/layout/Layout";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleIranUS = () => {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16">
          <span className="tag mb-5 inline-block border-amber-500/30 text-amber-400/70 bg-amber-500/5">
            Geopolitics · Upcoming
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-6">
            Iran–US Conflict
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed mb-8 max-w-2xl">
            An analysis of the escalating Iran–US tensions — the legal dimensions under international law,
            the role of JCPOA, and the geopolitical consequences of strategic miscalculation.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
            <span>March 2025</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-muted))]" />
            <span>Article incoming</span>
          </div>
        </header>

        {/* Placeholder content */}
        <div className="surface rounded-xl p-10 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6 text-amber-400/70" />
          </div>
          <h2 className="font-serif text-2xl text-[hsl(var(--text-primary))]">
            Article in progress
          </h2>
          <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed max-w-sm mx-auto">
            The full article is being prepared. Check back soon — or subscribe to the RSS feed to be notified when it goes live.
          </p>
          <div className="pt-4">
            <a
              href="/rss.xml"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded surface-raised text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:border-cardinal/30 transition-all duration-200 font-mono uppercase tracking-[0.1em] text-xs"
            >
              Subscribe via RSS
            </a>
          </div>
        </div>

        {/* What to expect section */}
        <div className="mt-12 space-y-4">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--text-muted))]">
            What this article will cover
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "International law dimensions of the conflict",
              "JCPOA breakdown and legal implications",
              "Sanctions as instruments of coercion",
              "Proxy warfare and state responsibility",
              "UN Charter and use of force thresholds",
              "Geopolitical consequences for the region",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-[hsl(var(--text-muted))] leading-relaxed"
              >
                <span className="text-amber-500/50 mt-0.5">—</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <footer className="mt-20 pt-8 border-t border-[hsl(var(--divider))] flex items-center justify-between text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
          <Link to="/" className="hover:text-[hsl(var(--text-secondary))] transition-colors">
            ← Home
          </Link>
          <span className="text-cardinal/60">Geopolitics · 01</span>
        </footer>
      </article>
    </Layout>
  );
};

export default ArticleIranUS;
