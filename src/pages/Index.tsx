import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Feather, Sparkles, Infinity } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-serif text-xl font-semibold transition-smooth hover:text-primary"
          >
            what cardinal <span className="text-luminous italic">said</span>
          </button>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-medium transition-smooth hover:text-primary"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection('writings')}
              className="text-sm font-medium transition-smooth hover:text-primary"
            >
              Writings
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/cosmic-red-eyes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <div className="mb-8 inline-block">
            <div className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
              A Legal Philosophy
            </div>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6">
              what cardinal
              <span className="block text-luminous font-normal italic">said</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Where legal discourse meets aesthetic theory and absurdist thought—
            <span className="text-foreground italic"> exploring the paradoxes at the intersection of law and meaning</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('writings')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luminous transition-smooth group"
            >
              Explore the Archive
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('philosophy')}
              className="border-border hover:bg-secondary hover:border-primary/50 transition-smooth"
            >
              About the Philosophy
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('philosophy')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
          aria-label="Scroll to philosophy section"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full"></div>
          </div>
        </button>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-contemplative group">
              <div className="mb-6 text-primary">
                <Feather className="h-12 w-12" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Legal Discourse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Examining the structures, precedents, and reasoning that shape our understanding of justice and order.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-contemplative group">
              <div className="mb-6 text-accent">
                <Sparkles className="h-12 w-12" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Aesthetic Theory</h3>
              <p className="text-muted-foreground leading-relaxed">
                Investigating the perception, interpretation, and creation of meaning in legal and philosophical contexts.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-contemplative group">
              <div className="mb-6 text-luminous">
                <Infinity className="h-12 w-12" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Absurdist Thought</h3>
              <p className="text-muted-foreground leading-relaxed">
                Confronting the contradictions and paradoxes inherent in seeking rational order within an irrational world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section id="writings" className="py-32 px-6 gradient-ethereal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
              Recent <span className="text-luminous italic">Explorations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Thoughts on law, aesthetics, and the absurd
            </p>
          </div>

          {/* Featured Blog Post */}
          <Card className="p-12 md:p-16 bg-card/50 backdrop-blur-sm border-border hover:border-luminous/30 transition-smooth max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-medium tracking-[0.2em] text-luminous uppercase">
                Featured Essay
              </span>
              <h3 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
                Prologue
              </h3>
            </div>

            <article className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
                You know the best part about law, what drove me to it? It was the{" "}
                <span className="text-luminous font-medium italic">malleability of it</span> and who it allows you to become{" "}
                <span className="text-luminous font-medium italic">whatever you want</span>. You can be a damn good politician and still be a lawyer, 
                you can be a psychologist, and yeah, a lawyer. Better yet, you can be a lawyer and then forced to become a technician, 
                mathematician, and whatnot, all in the span of a single case.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
                I have never admired a lot of people; the very few I still do, I cannot say I idealise them, but I still try to understand 
                these people as they have taught me things I wouldn't have known if it were not for their footprints. One of them is{" "}
                <span className="text-luminous font-semibold">Cardinal de Richelieu</span>, whose account literally compelled me to name this blog after him, 
                and then the next one is <span className="text-accent font-semibold">Samuel S. Leibowitz</span>, who made me realise why you learn 
                every day in this profession. If I had to say one line about both of them, for Cardinal, I would say that he is{" "}
                <span className="italic">the person I want to understand to see the world</span>, and Samuel is{" "}
                <span className="italic">the person I want to be in my professional ethics</span>. I won't bother to give their description, 
                that would be unbecoming of the entire idea of this blog, being honest.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
                So, what is this blog? If the first two paragraphs were not enough, then let me put it into words,{" "}
                <span className="text-luminous font-medium text-2xl italic">everything goes</span>, as long as it is connected 
                to the law even a bit. From blockchain to why in some countries you can be arrested for not showing up to a concert 
                you promised to perform for, everything. The point is to{" "}
                <span className="text-luminous font-medium italic">expand the view</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
                I have already seen 100s, if not 1000s, of blogs all building{" "}
                <span className="italic text-muted-foreground">vertical hellscapers</span>. You can spend entire days reading about 
                a single provision and all so many views on it. Being honest, it doesn't really matter. Anyone who knows practice up close 
                knows that one point, how much you understand one concept, stops mattering. It's worse than philosophy when it does happen.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
                What we do here is that I find something interesting enough and I just write, that's it. Sometimes, I will be bored and 
                call up serious people to write for a serious audience <span className="text-muted-foreground italic">(if there is any at all)</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-serif italic text-muted-foreground">
                So, that's it, ig?
              </p>
            </article>

            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="text-luminous">· First Entry</span>
              </div>
            </div>
          </Card>

          {/* Second Blog Post - Chapter 1 */}
          <Card className="p-12 md:p-16 bg-card/50 backdrop-blur-sm border-border hover:border-luminous/30 transition-smooth max-w-4xl mx-auto mt-12">
            <div className="mb-8">
              <span className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
                Chapter One
              </span>
              <h3 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
                That is Law
              </h3>
            </div>

            <article className="prose prose-lg max-w-none">
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

              <h4 className="font-serif text-3xl font-semibold mt-8 mb-6 text-luminous">The Tool</h4>

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
            </article>

            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="text-accent">· Chapter One</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-serif text-2xl mb-4">
            what cardinal <span className="text-luminous italic">said</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Where meaning meets meaninglessness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
