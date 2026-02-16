import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Compass, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Prologue = () => {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 pt-40 pb-40">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-cardinal uppercase">
              Phase Zero
            </span>
            <div className="h-px w-8 bg-cardinal/30" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none tracking-tighter mb-8">
            Prologue
          </h1>
          <div className="flex items-center gap-4 text-indigo-200/40 text-[10px] font-mono uppercase tracking-widest">
            <Compass className="h-3 w-3" />
            <span>The Architecture of Void</span>
          </div>
        </header>

        <div className="prose prose-invert prose-indigo max-w-none space-y-12">
          <p className="text-2xl md:text-3xl leading-relaxed font-serif text-white/90 font-light">
            You know the best part about law, what drove me to it? It was the{" "}
            <span className="text-cardinal italic font-medium">malleability of it</span> and who it allows you to become{" "}
            <span className="text-cardinal italic font-medium underline decoration-white/10 underline-offset-8">whatever you want</span>.
          </p>

          <div className="space-y-8 text-xl leading-relaxed font-serif text-indigo-50/60">
            <p>
              You can be a damn good politician and still be a lawyer, you can be a psychologist, and yeah, a lawyer. Better yet, you can be a lawyer and then forced to become a technician, mathematician, and whatnot, all in the span of a single case.
            </p>

            <p>
              I have never admired a lot of people; the very few I still do, I try to understand these people as they have taught me things I wouldn't have known if it were not for their footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            <div className="p-10 glass border-white/5 bg-white/[0.01]">
              <span className="font-mono text-[9px] text-cardinal tracking-[0.3em] uppercase block mb-4">Historical Anchor</span>
              <h3 className="font-serif text-2xl text-white mb-4">Cardinal de Richelieu</h3>
              <p className="text-sm font-light text-indigo-50/40 leading-relaxed italic">
                "The person I want to understand to see the world."
              </p>
            </div>
            <div className="p-10 glass border-white/5 bg-white/[0.01]">
              <span className="font-mono text-[9px] text-indigo-400 tracking-[0.3em] uppercase block mb-4">Code of Honor</span>
              <h3 className="font-serif text-2xl text-white mb-4">Samuel S. Leibowitz</h3>
              <p className="text-sm font-light text-indigo-50/40 leading-relaxed italic">
                "The person I want to be in my professional ethics."
              </p>
            </div>
          </div>

          <div className="space-y-8 text-xl leading-relaxed font-serif text-indigo-50/60 font-light">
            <p>
              So, what is this blog? Everything goes, as long as it is connected to the law even a bit. From blockchain to why in some countries you can be arrested for not showing up to a concert you promised to perform for, everything. The point is to{" "}
              <span className="text-white italic">expand the view</span>.
            </p>

            <p>
              I have already seen 100s, if not 1000s, of blogs all building{" "}
              <span className="text-cardinal italic">vertical hellscapers</span>. Spend entire days reading about a single provision and all so many views on it. It doesn't really matter. Anyone who knows practice up close knows that one point, how much you understand one concept, stops mattering.
            </p>

            <p>
              What we do here is that I find something interesting enough and I just write, that's it. Sometimes, I will be bored and call up serious people to write for a serious audience <span className="text-indigo-200/20 italic">(if there is any at all)</span>.
            </p>
          </div>

          <p className="text-center font-mono text-[10px] text-zinc-500 tracking-[0.4em] pt-20 uppercase">
            So, that's it, ig?
          </p>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Dec 2024 / Initialization</span>
          <span className="text-cardinal">Prologue / 00</span>
        </footer>
      </article>
    </Layout>
  );
};

export default Prologue;
