import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, PenTool, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Chapter1 = () => {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 pt-40 pb-40">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-cardinal uppercase">
              Chapter One
            </span>
            <div className="h-px w-8 bg-cardinal/30" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none tracking-tighter mb-8">
            That is Law
          </h1>
          <div className="flex items-center gap-4 text-indigo-200/40 text-[10px] font-mono uppercase tracking-widest">
            <BookOpen className="h-3 w-3" />
            <span>Philosophical Inquiry</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-indigo max-w-none space-y-12">
          <p className="text-2xl md:text-3xl leading-relaxed font-serif text-white/90 font-light">
            When I decided to write this chapter, I was kind of confused. Isn't the definition of law way too discussed? Everyone seems to be getting on something while not getting on anything at all. In practicality, of course. Well, then it occurred to me that there is no need to define law.{" "}
            <span className="text-cardinal italic font-medium">Law is Law. That's it.</span>
          </p>

          <p className="text-xl leading-relaxed font-serif text-indigo-50/60">
            When you enter a courtroom as a lawyer, you don't question the law, at least 99% of the time, while the other 1% is less questioning and more positioning. But for most of us, the question of what law is starts and ends very soon. That's not to say I don't have my own favourite definition.
          </p>

          <blockquote className="relative border-l-2 border-cardinal pl-12 py-8 my-16 glass bg-white/[0.02]">
            <PenTool className="absolute -top-4 -left-4 w-8 h-8 text-cardinal opacity-30" />
            <p className="text-2xl md:text-3xl font-serif italic text-white/80 leading-relaxed mb-4">
              "The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law."
            </p>
            <cite className="font-mono text-[10px] uppercase tracking-widest text-cardinal/60">— Justice Holmes</cite>
          </blockquote>

          <div className="space-y-8 text-xl leading-relaxed font-serif text-indigo-50/60">
            <p>
              I recall hearing someone talk about their experience at court. You prepare a case, everything from facts and precedents is in your favour, you are confident about your win, and then the order comes, and it's the complete opposite of what you thought. It's quite common, actually. The same goes for the contrary. My point being? We are never there to define law.{" "}
              <span className="text-white italic">Law has been a tool for ages</span>, and the sooner you accept it as such, the better you learn the 'How to' of it.
            </p>

            <p>
              Although what I am gonna discuss now, of law as a tool, might be a bit interesting. Because now that I have put forward my position of treating law as a tool, it's my duty to expand on what type of tool I consider it to be.
            </p>
          </div>

          <h2 className="font-serif text-4xl font-light text-white mt-24 mb-10 tracking-tight">The Tool</h2>

          <div className="space-y-8 text-xl leading-relaxed font-serif text-indigo-50/60">
            <p>
              I have pondered enough on this particular point. Call it an obsession, but I love to know about my tools, the ones I am actually gonna use. What I find particularly disturbing is how unaware even people in this field remain about it. Because the law is not just statutes, acts, or the constitution. It is simply word of mouth for the majority. They know that there is something called law in existence and going against it will ruin their lives, and that's it.
            </p>

            <p>
              How many people can confidently rebuke you if they are doing something morally ambiguous and you say it's illegal? Unless it's your field day with multiple lawyers or experts in that field, I believe the number will remain a big fat zero.
            </p>

            <p className="p-10 border border-white/5 glass-card bg-cardinal/5 rounded-sm italic text-white/90">
              "If you cannot disprove a law, even if it is made up, it's a law."
            </p>

            <p>
              In a modern setting, we call it judicial law-making or holistic interpretation; it is what it is. Although it's not limited to them. I do think I am shortcutting on the statement, so I have to explain it more. Most of our laws are, to a good eye, ambiguous enough and filled with enough holes to sink that ship when they need it. An actual legal battle is over who can sink that ship faster when they need to.
            </p>

            <p>
              We often hear anecdotes about cases where a murder case turned into an accidental injury or something entirely else. Why is that? For the same reason we are discussing, because they make up smaller parts of laws, prove it gently, do not let the other person disprove it, and when it becomes whole, you get something completely different from what you imagined.
            </p>

            <p>
              For an untrained eye <span className="text-indigo-200/20 italic">(including mine)</span>, it's hard to accept because there is a set of facts, and then the logical reasoning, and then the order. So simple. It never really is. The hidden mechanism? That is the tool, our cute little law.
            </p>

            <p className="text-3xl font-serif text-white/90 text-center py-20 border-y border-white/5 my-20">
              The law is both a <span className="text-cardinal italic">sanctuary</span> and a <span className="text-cardinal italic">weapon</span>.
            </p>

            <p className="flex flex-col md:flex-row items-center justify-between gap-8 p-12 glass border-white/10 mt-20">
              <span className="text-sm font-light text-indigo-200/60 max-w-md">
                I have prepared an entire research website exploring this duality in exhaustive detail.
              </span>
              <a
                href="https://v0-research-website-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-cardinal px-8 py-4 text-white text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
              >
                Access Archive
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </p>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Dec 2024 / Publication</span>
          <span className="text-cardinal">Chapter 01</span>
        </footer>
      </article>
    </Layout>
  );
};

export default Chapter1;

