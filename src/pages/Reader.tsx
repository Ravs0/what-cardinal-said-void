import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import articles from "@/content/articles.json";
import chapters from "@/content/chapters.json";
import { MoveLeft, Quote } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const Reader = () => {
    const { type, slug } = useParams();

    const content = type === 'article'
        ? articles.find(a => a.slug === slug || a.id === slug)
        : chapters.find(c => c.slug === slug || c.id === slug);

    if (!content) {
        return (
            <Layout>
                <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl mb-4">Void found.</h1>
                    <p className="text-muted-foreground mb-8">This coordinate does not exist in the archive.</p>
                    <Link to="/" className="text-cardinal hover:underline">Return to Hub</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-3xl mx-auto px-6 py-12">
                <Link to="/" className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-20 inline-flex">
                    <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Hub</span>
                </Link>

                {/* Header */}
                <header className="space-y-6 mb-24">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cardinal">
                            {content.category}
                        </span>
                        <div className="h-px w-8 bg-cardinal/30" />
                    </div>
                    <h1 className="text-5xl md:text-7xl leading-tight font-serif text-white">
                        {content.title}
                    </h1>
                    <p className="text-xl text-indigo-200/40 font-light leading-relaxed max-w-2xl">
                        {content.subtitle}
                    </p>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-indigo max-w-none 
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-white
          prose-p:text-indigo-50/80 prose-p:leading-relaxed prose-p:text-lg
          prose-strong:text-white prose-blockquote:border-cardinal
          prose-code:text-cardinal prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
          selection:bg-cardinal/30">
                    <ReactMarkdown
                        components={{
                            blockquote: ({ children }) => (
                                <blockquote className="relative border-l-2 border-cardinal pl-8 py-4 my-12 bg-white/5 italic">
                                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-cardinal opacity-20" />
                                    {children}
                                </blockquote>
                            )
                        }}
                    >
                        {content.content}
                    </ReactMarkdown>
                </article>

                {/* Feedback / Insights */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="glass p-8 rounded-2xl space-y-4 max-w-lg mx-auto md:mx-0">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cardinal animate-pulse" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-cardinal">Cardinal's Insight</span>
                        </div>
                        <p className="text-sm text-indigo-300/60 italic leading-relaxed">
                            "When you look into the abyss of the law, the abyss doesn't just look back—it bills you by the hour."
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reader;
