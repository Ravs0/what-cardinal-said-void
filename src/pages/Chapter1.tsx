import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, PenTool, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Chapter1 = () => {
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
        <header className="mb-14">
          <span className="tag-cardinal mb-5 inline-block">Chapter One</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-5">
            That is Law
          </h1>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
            <BookOpen className="h-3 w-3" />
            <span>Philosophical Inquiry</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Body */}
        <div className="article-body">
          <p className="text-[1.2rem] text-[hsl(210_20%_78%)] leading-[1.85]">
            When I decided to write this chapter, I was kind of confused. Isn't the definition of law way too discussed?
            Everyone seems to be getting on something while not getting on anything at all. In practicality, of course.
            Well, then it occurred to me that there is no need to define law.{" "}
            <span className="text-cardinal italic font-medium">Law is Law. That's it.</span>
          </p>

          <p>
            When you enter a courtroom as a lawyer, you don't question the law, at least 99% of the time, while the other 1%
            is less questioning and more positioning. But for most of us, the question of what law is starts and ends very soon.
            That's not to say I don't have my own favourite definition.
          </p>

          <blockquote>
            "The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law."
            <cite className="block mt-3 not-italic font-mono text-[10px] uppercase tracking-widest text-cardinal/60">— Justice Holmes</cite>
          </blockquote>

          <p>
            I recall hearing someone talk about their experience at court. You prepare a case, everything from facts and
            precedents is in your favour, you are confident about your win, and then the order comes, and it's the complete
            opposite of what you thought. It's quite common, actually. The same goes for the contrary. My point being?
            We are never there to define law.{" "}
            <em>Law has been a tool for ages</em>, and the sooner you accept it as such, the better you learn the 'How to' of it.
          </p>

          <p>
            Although what I am gonna discuss now, of law as a tool, might be a bit interesting. Because now that I have put
            forward my position of treating law as a tool, it's my duty to expand on what type of tool I consider it to be.
          </p>

          <h2>The Tool</h2>

          <p>
            I have pondered enough on this particular point. Call it an obsession, but I love to know about my tools, the ones
            I am actually gonna use. What I find particularly disturbing is how unaware even people in this field remain about it.
            Because the law is not just statutes, acts, or the constitution. It is simply word of mouth for the majority.
            They know that there is something called law in existence and going against it will ruin their lives, and that's it.
          </p>

          <p>
            How many people can confidently rebuke you if they are doing something morally ambiguous and you say it's illegal?
            Unless it's your field day with multiple lawyers or experts in that field, I believe the number will remain a big fat zero.
          </p>

          <blockquote>
            "If you cannot disprove a law, even if it is made up, it's a law."
          </blockquote>

          <p>
            In a modern setting, we call it judicial law-making or holistic interpretation; it is what it is. Although it's not
            limited to them. I do think I am shortcutting on the statement, so I have to explain it more. Most of our laws are,
            to a good eye, ambiguous enough and filled with enough holes to sink that ship when they need it. An actual legal
            battle is over who can sink that ship faster when they need to.
          </p>

          <p>
            We often hear anecdotes about cases where a murder case turned into an accidental injury or something entirely else.
            Why is that? For the same reason we are discussing, because they make up smaller parts of laws, prove it gently,
            do not let the other person disprove it, and when it becomes whole, you get something completely different from
            what you imagined.
          </p>

          <p>
            For an untrained eye <span className="text-[hsl(var(--text-muted))] italic">(including mine)</span>, it's hard to accept
            because there is a set of facts, and then the logical reasoning, and then the order. So simple. It never really is.
            The hidden mechanism? That is the tool, our cute little law.
          </p>

          {/* Pull quote */}
          <div className="my-12 py-10 border-y border-[hsl(var(--divider))] text-center">
            <p className="font-serif text-2xl text-[hsl(var(--text-primary))]">
              The law is both a <span className="text-cardinal italic">sanctuary</span> and a{" "}
              <span className="text-cardinal italic">weapon</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="surface rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-8">
            <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed sm:max-w-sm">
              A full research archive exploring this duality in exhaustive detail has been prepared.
            </p>
            <a
              href="https://v0-research-website-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cardinal/10 border border-cardinal/30 text-cardinal text-xs font-mono uppercase tracking-[0.15em] hover:bg-cardinal hover:text-white transition-all duration-200 shrink-0"
            >
              Access Archive <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <footer className="mt-20 pt-8 border-t border-[hsl(var(--divider))] flex items-center justify-between text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
          <span>Dec 2024 / Publication</span>
          <span className="text-cardinal/60">Chapter 01</span>
        </footer>
      </article>
    </Layout>
  );
};

export default Chapter1;
