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

          {/* Empty state - ready for blog posts */}
          <div className="text-center py-20">
            <div className="inline-block p-8 rounded-full bg-secondary/50 mb-6">
              <Feather className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-3xl font-light text-muted-foreground mb-4">
              The archive awaits
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Essays and reflections will appear here as they emerge from the philosophical depths
            </p>
          </div>
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
