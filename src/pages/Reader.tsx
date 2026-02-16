import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";
import { MoveLeft, Quote, Sparkles, Binary } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const Reader = () => {
    const { type, slug } = useParams();

    const content = type === 'article'
        ? articles.find(a => a.slug === slug || a.id === slug)
        : chapters.find(c => c.slug === slug || c.id === slug);

    if (!content) {
        return (
            <Layout>
                <div className="max-w-4xl mx-auto px-6 py-40 text-center">
                    <div className="mb-8 flex justify-center">
                        <Binary className="w-12 h-12 text-cardinal opacity-20" />
                    </div>
                    <h1 className="text-4xl font-serif text-white mb-4">Coordinate Terminated.</h1>
                    <p className="text-indigo-200/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-12">This sector of the archive has dissolved into the void.</p>
                    <Link to="/" className="text-cardinal hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest border border-cardinal/30 px-6 py-3">
                        Return to Hub
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 pt-40 pb-40">
                {/* Header */}
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-cardinal uppercase">
                            {content.category || (type === 'article' ? 'Inquiry' : 'Foundation')}
                        </span>
                        <div className="h-px w-8 bg-cardinal/30" />
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none tracking-tighter mb-8">
                        {content.title}
                    </h1>
                    <p className="font-serif text-2xl md:text-3xl text-indigo-200/40 font-light italic leading-relaxed">
                        {content.subtitle}
                    </p>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-indigo max-w-none 
                  prose-p:text-indigo-50/70 prose-p:leading-[1.8] prose-p:text-xl prose-p:font-serif prose-p:font-light
                  prose-headings:font-serif prose-headings:font-normal prose-headings:text-white prose-headings:tracking-tight
                  prose-strong:text-cardinal prose-strong:font-medium
                  prose-blockquote:border-none prose-blockquote:p-0
                  selection:bg-cardinal/30">
                    <ReactMarkdown
                        components={{
                            blockquote: ({ children }) => (
                                <blockquote className="relative border-l border-cardinal/30 pl-10 py-4 my-16 bg-white/[0.01] italic shadow-void glass">
                                    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-cardinal opacity-10" />
                                    <div className="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed font-light">
                                        {children}
                                    </div>
                                </blockquote>
                            )
                        }}
                    >
                        {content.content}
                    </ReactMarkdown>
                </article>

                {/* Feedback / Insights */}
                <div className="mt-40 pt-20 border-t border-white/5">
                    <div className="p-10 glass border-white/10 space-y-6 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-cardinal animate-pulse" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-cardinal">Archivist Note</span>
                        </div>
                        <p className="text-xl font-serif text-white/80 italic leading-relaxed font-light">
                            "The structures we build to contain truth often become the very obstacles that prevent us from seeing it."
                        </p>
                    </div>
                </div>

                <footer className="mt-40 pt-12 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>Void Engine v2.0</span>
                    <span className="text-cardinal">{type} / Archive</span>
                </footer>
            </div>
        </Layout>
    );
};

export default Reader;
