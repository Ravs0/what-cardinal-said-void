import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Scale, Eye } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-void text-foreground font-sans">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/cosmic-red-eyes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
              A Legal Philosophy
            </div>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6">
              what cardinal
              <span className="block text-cosmic font-normal italic">said</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Where legal discourse meets aesthetic theory and absurdist thought—
            <span className="text-foreground italic"> exploring the paradoxes at the intersection of law and meaning</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cosmic transition-absurd group"
            >
              Explore the Archive
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary hover:border-primary/50 transition-absurd"
            >
              About the Philosophy
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-absurd group">
              <div className="mb-6 text-primary">
                <Scale className="h-12 w-12" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Legal Discourse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Examining the structures, precedents, and reasoning that shape our understanding of justice and order.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-absurd group">
              <div className="mb-6 text-accent">
                <Eye className="h-12 w-12" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Aesthetic Theory</h3>
              <p className="text-muted-foreground leading-relaxed">
                Investigating the perception, interpretation, and creation of meaning in legal and philosophical contexts.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-absurd group">
              <div className="mb-6 text-cosmic">
                <BookOpen className="h-12 w-12" />
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
      <section className="py-32 px-6 bg-gradient-void">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
              Recent <span className="text-cosmic italic">Explorations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Thoughts on law, aesthetics, and the absurd
            </p>
          </div>

          {/* Empty state - ready for blog posts */}
          <div className="text-center py-20">
            <div className="inline-block p-8 rounded-full bg-secondary/50 mb-6">
              <BookOpen className="h-16 w-16 text-muted-foreground" />
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
            what cardinal <span className="text-cosmic italic">said</span>
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
