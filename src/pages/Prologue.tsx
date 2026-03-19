import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

const Prologue = () => {
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
          <span className="tag-cardinal mb-5 inline-block">Phase Zero</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-5">
            Prologue
          </h1>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[hsl(var(--text-muted))]">
            The Architecture of Void
          </p>
        </header>

        {/* Body */}
        <div className="article-body space-y-6">
          <p className="text-[1.2rem] text-[hsl(210_20%_78%)] font-serif leading-[1.85]">
            You know the best part about law, what drove me to it? It was the{" "}
            <span className="text-cardinal italic font-medium">malleability of it</span>{" "}
            and who it allows you to become{" "}
            <span className="text-cardinal italic font-medium">whatever you want</span>.
            You can be a damn good politician and still be a lawyer,
            you can be a psychologist, and yeah, a lawyer. Better yet, you can be a lawyer and then forced to become a technician,
            mathematician, and whatnot, all in the span of a single case.
          </p>

          <p>
            I have never admired a lot of people; the very few I still do, I cannot say I idealise them, but I still try to understand
            these people as they have taught me things I wouldn't have known if it were not for their footprints. One of them is{" "}
            <span className="text-cardinal font-semibold">Cardinal de Richelieu</span>, whose account literally compelled me to name this blog after him,
            and then the next one is <span className="text-[hsl(210_60%_75%)] font-semibold">Samuel S. Leibowitz</span>, who made me realise why you learn
            every day in this profession. If I had to say one line about both of them, for Cardinal, I would say that he is{" "}
            <em>the person I want to understand to see the world</em>, and Samuel is{" "}
            <em>the person I want to be in my professional ethics</em>. I won't bother to give their description,
            that would be unbecoming of the entire idea of this blog, being honest.
          </p>
        </div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
          <div className="surface rounded-lg p-6">
            <span className="font-mono text-[9px] text-cardinal tracking-[0.2em] uppercase block mb-3">Historical Anchor</span>
            <h3 className="font-serif text-xl text-[hsl(var(--text-primary))] mb-3">Cardinal de Richelieu</h3>
            <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed italic">
              "The person I want to understand to see the world."
            </p>
          </div>
          <div className="surface rounded-lg p-6">
            <span className="font-mono text-[9px] text-[hsl(210_60%_65%)] tracking-[0.2em] uppercase block mb-3">Code of Honor</span>
            <h3 className="font-serif text-xl text-[hsl(var(--text-primary))] mb-3">Samuel S. Leibowitz</h3>
            <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed italic">
              "The person I want to be in my professional ethics."
            </p>
          </div>
        </div>

        <div className="article-body space-y-6">
          <p>
            So, what is this blog? If the first two paragraphs were not enough, then let me put it into words,{" "}
            <span className="text-cardinal font-medium italic">everything goes</span>, as long as it is connected
            to the law even a bit. From blockchain to why in some countries you can be arrested for not showing up to a concert
            you promised to perform for, everything. The point is to{" "}
            <em>expand the view</em>.
          </p>

          <p>
            I have already seen 100s, if not 1000s, of blogs all building{" "}
            <span className="text-cardinal italic">vertical hellscapers</span>. You can spend entire days reading about
            a single provision and all so many views on it. Being honest, it doesn't really matter. Anyone who knows practice up close
            knows that one point, how much you understand one concept, stops mattering. It's worse than philosophy when it does happen.
          </p>

          <p>
            What we do here is that I find something interesting enough and I just write, that's it. Sometimes, I will be bored and
            call up serious people to write for a serious audience{" "}
            <span className="text-[hsl(var(--text-muted))] italic">(if there is any at all)</span>.
          </p>

          <p className="text-center font-mono text-xs text-[hsl(var(--text-muted))] tracking-[0.3em] pt-8 uppercase">
            So, that's it, ig?
          </p>
        </div>

        {/* Footer nav */}
        <footer className="mt-20 pt-8 border-t border-[hsl(var(--divider))] flex items-center justify-between text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
          <span>Dec 2024 / Initialization</span>
          <span className="text-cardinal/60">Prologue / 00</span>
        </footer>
      </article>
    </Layout>
  );
};

export default Prologue;
