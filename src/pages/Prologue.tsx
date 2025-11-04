import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Prologue = () => {
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
          <span className="text-sm font-medium tracking-[0.2em] text-luminous uppercase">
            Featured Essay
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light mt-4 mb-8 leading-tight">
            Prologue
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
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
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="text-luminous">· First Entry</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Prologue;
