import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { MoveRight, Shield, Ghost, Eye, BookOpen, ScrollText, Sparkles } from "lucide-react";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";

const Index = () => {
  return (
    <Layout>
      <div className="text-white selection:bg-cardinal/30">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsla(348,73%,45%,0.1)_0%,_transparent_50%)]" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
            <div className="mb-12 relative group">
              <div className="absolute inset-0 bg-cardinal/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
              <img
                src="/logo-clean.png"
                className="w-64 h-64 md:w-80 md:h-80 relative z-10 drop-shadow-[0_0_50px_rgba(196,30,58,0.4)] animate-float"
                alt="Cardinal Logo"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-8xl md:text-[11rem] font-serif tracking-tighter leading-[0.8] mb-4">
                WHAT <span className="text-cardinal">CARDINAL</span> SAID
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-mono text-[10px] md:text-xs tracking-[0.4em] text-indigo-200/40 uppercase">
                <span className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-cardinal" /> Cyber Minimalist</span>
                <span className="h-1 w-1 rounded-full bg-white/10" />
                <span>Legal Absurdism</span>
                <span className="h-1 w-1 rounded-full bg-white/10" />
                <span>The Architecture of Void</span>
              </div>
            </div>

            <div className="mt-20 h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-7xl mx-auto px-6 py-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <Pillar
              icon={<Shield className="w-6 h-6 text-cardinal" />}
              title="Strategic Logic"
              description="Deconstructing the frameworks of power and the calculated structures of legal necessity."
            />
            <Pillar
              icon={<Eye className="w-6 h-6 text-indigo-400" />}
              title="Aesthetic Entropy"
              description="Where high-end design meets the dissolution of static meaning in the digital void."
            />
            <Pillar
              icon={<Ghost className="w-6 h-6 text-white/40" />}
              title="Absolute Absurdism"
              description="Confronting the elegant contradictions of a world governed by laws it no longer understands."
            />
          </div>
        </section>

        {/* Content Explorer */}
        <main className="max-w-7xl mx-auto px-6 py-40">
          <div className="flex flex-col gap-40">

            {/* Chapter Series */}
            <div className="space-y-20">
              <header className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-cardinal" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cardinal">Chapter Series</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">The Foundation</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {chapters.map((chapter, index) => (
                  <ContentCard
                    key={chapter.id}
                    number={String(index + 1).padStart(2, '0')}
                    to={`/chapter/${chapter.slug}`}
                    title={chapter.title}
                    description={chapter.subtitle}
                  />
                ))}
              </div>
            </div>

            {/* Article Series */}
            <div className="space-y-20 border-t border-white/5 pt-40">
              <header className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-indigo-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-indigo-400">Article Archive</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Systematic Inquiry</h2>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {articles.map((article) => (
                  <ArticleSquare
                    key={article.id}
                    to={`/article/${article.slug}`}
                    title={article.title}
                    description={article.subtitle}
                  />
                ))}
              </div>
            </div>

          </div>
        </main>

        {/* Quote Section */}
        <section className="max-w-5xl mx-auto px-6 py-60 text-center">
          <blockquote className="space-y-12">
            <p className="text-4xl md:text-6xl font-serif text-white leading-tight font-light italic">
              "The law is a mirror that has <span className="text-cardinal">forgotten</span> it is reflective."
            </p>
            <footer className="font-mono text-[10px] text-indigo-300/20 uppercase tracking-[0.6em]">
              Initialization Sequence — Void Archive
            </footer>
          </blockquote>
        </section>
      </div>
    </Layout>
  );
};

const Pillar = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="space-y-8 group">
    <div className="w-16 h-16 glass border-white/10 flex items-center justify-center group-hover:border-cardinal/40 transition-all duration-700 bg-white/[0.01]">
      <div className="transition-transform duration-700 group-hover:scale-110">
        {icon}
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-serif text-white group-hover:text-cardinal transition-colors duration-500">{title}</h3>
      <p className="text-base text-indigo-300/40 leading-relaxed font-light group-hover:text-indigo-200/60 transition-colors duration-500">
        {description}
      </p>
    </div>
  </div>
);

const ContentCard = ({ to, title, description, number }: { to: string; title: string; description: string; number: string }) => (
  <Link to={to} className="group block space-y-6">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-[10px] text-cardinal tracking-widest">{number}</span>
      <div className="h-px w-4 bg-white/10 group-hover:w-12 group-hover:bg-cardinal transition-all duration-700" />
    </div>
    <div className="space-y-4">
      <h4 className="text-4xl md:text-5xl font-serif text-white/50 group-hover:text-white transition-all duration-700 leading-none">
        {title}
      </h4>
      <p className="text-sm text-indigo-300/20 leading-relaxed group-hover:text-indigo-300/60 transition-colors duration-700 max-w-md italic font-serif">
        {description}
      </p>
    </div>
  </Link>
);

const ArticleSquare = ({ to, title, description }: { to: string; title: string; description: string }) => (
  <Link to={to} className="group p-10 glass border-white/5 bg-white/[0.01] hover:border-indigo-500/20 transition-all duration-1000 flex flex-col justify-between min-h-[320px]">
    <div className="space-y-6">
      <ScrollText className="w-5 h-5 text-indigo-400/30 group-hover:text-indigo-400 transition-colors duration-700" />
      <h4 className="text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-700 leading-tight">
        {title}
      </h4>
    </div>
    <div className="space-y-4">
      <p className="text-xs text-indigo-300/30 group-hover:text-indigo-300/60 transition-colors duration-700 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/5 group-hover:text-indigo-400 transition-colors duration-700">
        Read Entry <MoveRight className="w-3 h-3 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
      </div>
    </div>
  </Link>
);

export default Index;
