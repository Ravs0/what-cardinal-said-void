import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { MoveRight, Shield, Ghost, Eye, ScrollText, Sparkles } from "lucide-react";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";
import Hero3D from "@/components/Hero3D";

const Index = () => {
  return (
    <Layout>
      <div className="text-white selection:bg-cardinal/30 grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-[100px]">

        {/* Fixed Left Panel - Visuals & Typography */}
        <div className="lg:col-span-5 relative min-h-[100vh] lg:min-h-0 lg:h-[calc(100vh-100px)] mt-[-100px] pt-[100px] lg:mt-0 lg:pt-0 lg:sticky lg:top-[100px] flex flex-col justify-end lg:justify-between pb-24 lg:pb-10 lg:py-10 px-6 lg:px-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsla(43,74%,49%,0.05)_0%,_transparent_50%)] pointer-events-none" />

          {/* 3D Core */}
          <div className="absolute inset-0 z-0">
            <Hero3D />
          </div>

          {/* Typography Overlay */}
          <div className="relative z-10 space-y-6 mt-auto bg-gradient-to-t from-background via-background/80 to-transparent pb-10 pt-20 -mx-6 px-6 lg:-mx-12 lg:px-12">
            <h1 className="text-6xl md:text-8xl lg:text-7xl font-serif tracking-tighter leading-[0.85] text-white">
              WHAT<br /><span className="text-cardinal">CARDINAL</span><br />SAID
            </h1>
            <div className="flex flex-col gap-3 font-mono text-[10px] tracking-[0.3em] uppercase max-w-sm">
              <div className="flex items-center gap-3 text-zinc-400">
                <Sparkles className="w-3 h-3 text-cardinal" /> <span>Cyber Minimalist</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <span className="w-1 h-px bg-white/20" /> <span>Legal Absurdism</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <span className="w-1 h-px bg-white/20" /> <span>Architecture of Void</span>
              </div>
            </div>

            <p className="text-sm font-serif text-zinc-500 italic leading-relaxed max-w-xs mt-6">
              "The law is a mirror that has forgotten it is reflective."
            </p>
          </div>
        </div>

        {/* Scrolling Right Panel - High Density Content */}
        <div className="lg:col-span-7 flex flex-col px-6 lg:pl-20 lg:pr-12 py-16 lg:py-10 gap-32">

          {/* Core Pillars - Reimagined as horizontal stripes */}
          <section className="space-y-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/20" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">Core Precepts</span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <PillarRow icon={<Shield />} title="Strategic Logic" desc="Deconstructing the calculated structures of legal necessity." />
              <PillarRow icon={<Eye />} title="Aesthetic Entropy" desc="Dissolution of static meaning in the digital void." />
              <PillarRow icon={<Ghost />} title="Absolute Absurdism" desc="Confronting the elegant contradictions of a world governed by laws it no longer understands." />
            </div>
          </section>

          {/* Chapters Grid */}
          <section className="space-y-12">
            <header className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-cardinal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cardinal">Chapter Series</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-serif text-white tracking-tight">The Foundation</h2>
            </header>

            <div className="flex flex-col gap-6">
              {chapters.map((chapter, index) => (
                <ContentRow
                  key={chapter.id}
                  number={String(index + 1).padStart(2, '0')}
                  to={`/chapter/${chapter.slug}`}
                  title={chapter.title}
                  description={chapter.subtitle}
                />
              ))}
            </div>
          </section>

          {/* Articles Grid */}
          <section className="space-y-12">
            <header className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-zinc-600" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-400">Article Archive</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-serif text-white tracking-tight">Systematic Inquiry</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleSquare
                  key={article.id}
                  to={`/article/${article.slug}`}
                  title={article.title}
                  description={article.subtitle}
                />
              ))}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

const PillarRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-6 group cursor-default">
    <div className="w-10 h-10 shrink-0 flex items-center justify-center text-white/20 border border-white/5 bg-white/[0.01] group-hover:text-cardinal group-hover:border-cardinal/30 transition-all duration-500">
      {icon}
    </div>
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-grow">
      <h3 className="text-lg font-serif text-white/80 group-hover:text-white transition-colors duration-500 min-w-[200px]">{title}</h3>
      <p className="text-sm font-light text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const ContentRow = ({ to, title, description, number }: { to: string; title: string; description: string; number: string }) => (
  <Link to={to} className="group flex flex-col md:flex-row items-baseline gap-6 md:gap-12 p-6 glass border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cardinal/20 transition-all duration-700">
    <span className="font-mono text-xs text-cardinal tracking-widest shrink-0">{number}</span>
    <div className="flex-grow space-y-2">
      <h4 className="text-2xl lg:text-3xl font-serif text-white/70 group-hover:text-white transition-all duration-700 leading-none">
        {title}
      </h4>
      <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-700 italic font-serif">
        {description}
      </p>
    </div>
    <MoveRight className="w-5 h-5 shrink-0 text-white/10 group-hover:text-cardinal group-hover:translate-x-2 transition-all duration-500 hidden md:block" />
  </Link>
);

const ArticleSquare = ({ to, title, description }: { to: string; title: string; description: string }) => (
  <Link to={to} className="group p-8 glass border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-zinc-500/30 transition-all duration-700 flex flex-col justify-between min-h-[240px]">
    <div className="space-y-6">
      <ScrollText className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" />
      <h4 className="text-xl font-serif text-white/70 group-hover:text-white transition-colors duration-500 leading-snug">
        {title}
      </h4>
    </div>
    <div className="space-y-4 pt-8">
      <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/10 group-hover:text-zinc-300 transition-colors duration-500">
        Read Entry <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

export default Index;
