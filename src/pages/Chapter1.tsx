import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chapter1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="font-serif text-xl font-semibold transition-smooth hover:text-primary"
          >
            what cardinal <span className="text-luminous italic">said</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <span className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Chapter One
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light mt-4 mb-8 leading-tight">
            That is Law
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            When I decided to write this chapter, I was kind of confused. Isn't the definition of law way too discussed? Everyone seems to be getting on something while not getting on anything at all. In practicality, of course. Well, then it occurred to me that there is no need to define law.{" "}
            <span className="text-luminous font-semibold text-2xl italic">Law is Law. That's it.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            When you enter a courtroom as a lawyer, you don't question the law, at least 99% of the time, while the other 1% is less questioning and more positioning. But for most of us, the question of what law is starts and ends very soon. That's not to say I don't have my own favourite definition.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-luminous font-medium italic">"The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law,"</span> Justice Holmes put it perfectly. I recall hearing someone talk about their experience at court. You prepare a case, everything from facts and precedents is in your favour, you are confident about your win, and then the order comes, and it's the complete opposite of what you thought. It's quite common, actually. The same goes for the contrary. My point being? We are never there to define law.{" "}
            <span className="text-luminous font-medium italic">Law has been a tool for ages</span>, and the sooner you accept it as such, the better you learn the 'How to' of it.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Although what I am gonna discuss now, of law as a tool, might be a bit interesting. Because now that I have put forward my position of treating law as a tool, it's my duty to expand on what type of tool I consider it to be.
          </p>

          <h2 className="font-serif text-3xl font-semibold mt-8 mb-6 text-luminous">The Tool</h2>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            I have pondered enough on this particular point. Call it an obsession, but I love to know about my tools, the ones I am actually gonna use. What I find particularly disturbing is how unaware even people in this field remain about it. Because the law is not just statutes, acts, or the constitution. It is simply word of mouth for the majority. They know that there is something called law in existence and going against it will ruin their lives, and that's it.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            How many people can confidently rebuke you if they are doing something morally ambiguous and you say it's illegal? Unless it's your field day with multiple lawyers or experts in that field, I believe the number will remain a big fat zero.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            What does it tell us about law as a tool, though? Pretty simple, actually.{" "}
            <span className="text-luminous font-semibold italic">If you cannot disprove a law, even if it is made up, it's a law.</span>{" "}
            In a modern setting, we call it judicial law-making or holistic interpretation; it is what it is. Although it's not limited to them. I do think I am shortcutting on the statement, so I have to explain it more. Most of our laws are, to a good eye, ambiguous enough and filled with enough holes to sink that ship when they need it. An actual legal battle is over who can sink that ship faster when they need to.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            We often hear anecdotes about cases where a murder case turned into an accidental injury or something entirely else. Why is that? For the same reason we are discussing, because they make up smaller parts of laws, prove it gently, do not let the other person disprove it, and when it becomes whole, you get something completely different from what you imagined. The unexpected result we talk about. Someday, I would love to dissect a judgment similarly to prove my point further.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            For an untrained eye <span className="text-muted-foreground italic">(including mine)</span>, it's hard to accept because there is a set of facts, and then the logical reasoning, and then the order. So simple. It never really is. The hidden mechanism? That is the tool, our cute little law.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            If you ask me, I believe{" "}
            <span className="text-luminous font-semibold text-2xl italic">the law is both a sanctuary and a weapon</span>. Funnily enough, the sanctuary and weapon, both have been used in positive as well as negative connotations.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            I will not expand on this analogy further, as I have well prepared an entire research website on it that you can access with this text itself.
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-serif">
            I will keep it short. First, I made my point, and second, I don't think it's the kind of discussion that is worthwhile rn, because every point I made needs to be tested and proved, which I will be doing going forward. Without that, it is more than gossip and less than any discussion.{" "}
            <a 
              href="https://v0-research-website-gamma.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-luminous font-semibold underline hover:text-accent transition-smooth"
            >
              Visit the research website
            </a>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="text-accent">· Chapter One</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Chapter1;
