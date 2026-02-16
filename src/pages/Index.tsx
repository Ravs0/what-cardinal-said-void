import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { MoveRight, Shield, Ghost, Eye } from "lucide-react";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";

const Index = () => {
  return (
    <Layout>
      <div className="bg-background text-indigo-50 selection:bg-cardinal/30">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cardinal/10 via-background to-background" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
            <div className="animate-float">
              <img
                src="/logo-clean.png"
                className="w-48 h-48 opacity-90 invert drop-shadow-[0_0_30px_rgba(196,30,58,0.3)]"
                alt="Cardinal Logo"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-7xl md:text-9xl font-serif tracking-tighter text-white">
                WHAT <span className="text-cardinal">CARDINAL</span> SAID
              </h1>
              <p className="text-indigo-300/60 font-mono tracking-[0.4em] text-xs md:text-sm uppercase">
                Cyber Minimalist Legal Absurdism · The Void of Meaning
              </p>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cardinal to-transparent" />
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-y border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Pillar
              icon={<Shield className="w-5 h-5 text-cardinal" />}
              title="Legal Discourse"
              description="Examining the structures, precedents, and reasoning that shape our understanding of justice and order."
            />
            <Pillar
              icon={<Eye className="w-5 h-5 text-cardinal" />}
              title="Aesthetic Theory"
              description="Investigating the perception, interpretation, and creation of meaning in legal and philosophical contexts."
            />
            <Pillar
              icon={<Ghost className="w-5 h-5 text-cardinal" />}
              title="Absurdist Thought"
              description="Confronting the contradictions inherent in seeking rational order within an irrational world."
            />
          </div>
        </section>

        {/* Content Explorer */}
        <main className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* Article Series */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-cardinal whitespace-nowrap">
                  Article Series: In-Depth Research
                </h3>
                <div className="h-px w-full bg-white/5" />
              </div>
              <div className="grid gap-16">
                {articles.map((article) => (
                  <ContentCard
                    key={article.id}
                    to={`/article/${article.slug}`}
                    title={article.title}
                    description={article.subtitle}
                  />
                ))}
              </div>
            </div>

            {/* Chapter Series */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-cardinal whitespace-nowrap">
                  Chapter Series: The Architecture
                </h3>
                <div className="h-px w-full bg-white/5" />
              </div>
              <div className="grid gap-16">
                {chapters.map((chapter) => (
                  <ContentCard
                    key={chapter.id}
                    to={`/chapter/${chapter.slug}`}
                    title={chapter.title}
                    description={chapter.subtitle}
                  />
                ))}
              </div>
            </div>

          </div>
        </main>

        <section className="max-w-3xl mx-auto px-6 py-40 text-center space-y-8">
          <h2 className="text-4xl font-serif text-white italic">"The law is a mirror that has forgotten it is reflective."</h2>
          <p className="text-indigo-300/40 font-mono text-xs uppercase tracking-widest leading-loose">
            Join the archive for systematic explorations into the silent state.
          </p>
        </section>
      </div>
    </Layout>
  );
};

const Pillar = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="space-y-6 group cursor-default">
    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-cardinal/50 transition-all duration-500 bg-white/[0.02]">
      {icon}
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-serif text-white/90 group-hover:text-white transition-colors">{title}</h2>
      <p className="text-sm text-indigo-300/40 leading-relaxed font-light group-hover:text-indigo-300/60 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

const ContentCard = ({ to, title, description }: { to: string; title: string; description: string }) => (
  <Link to={to} className="group block space-y-4">
    <div className="flex items-baseline gap-4">
      <h4 className="text-3xl md:text-4xl font-serif text-white/80 group-hover:text-white transition-all duration-500">
        {title}
      </h4>
      <MoveRight className="w-5 h-5 text-cardinal opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-500" />
    </div>
    <p className="text-base text-indigo-300/30 leading-relaxed font-light group-hover:text-indigo-300/50 transition-colors max-w-xl">
      {description}
    </p>
  </Link>
);

export default Index;
