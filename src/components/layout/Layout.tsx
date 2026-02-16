import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Mail, MoveLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === "/";

    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-cardinal/30">
            {/* Deep Space Backdrop */}
            <div className="cosmic-bg" />

            {/* Animated Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cardinal/5 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-cardinal/20 border border-cardinal/30 flex items-center justify-center p-2 group-hover:bg-cardinal transition-all duration-500">
                            <img src="/logo-clean.png" alt="Cardinal Logo" className="w-full h-full object-contain invert" />
                        </div>
                        <span className="font-serif text-lg tracking-tighter group-hover:text-white transition-colors uppercase">
                            What <span className="text-cardinal">Cardinal</span> Said
                        </span>
                    </Link>

                    {!isHome && (
                        <Link to="/" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
                            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-mono text-[10px] uppercase tracking-widest">Return to Hub</span>
                        </Link>
                    )}

                    {/* Icons / Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6 mr-6">
                            <NavLink to="/prologue">Prologue</NavLink>
                            <NavLink to="/article/trade-based-money-laundering">TBML</NavLink>
                        </div>
                        <Button variant="outline" size="sm" className="hidden md:flex border-white/10 hover:bg-white/5 font-mono text-[10px] uppercase tracking-widest">
                            RSS Feed
                        </Button>
                        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-0 left-0 w-full glass h-screen animate-in fade-in duration-300 flex flex-col items-center justify-center gap-12 text-center p-10">
                        <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
                            <X size={32} />
                        </button>
                        <NavLink to="/" className="text-3xl">Home</NavLink>
                        <NavLink to="/prologue" className="text-3xl">Prologue</NavLink>
                        <NavLink to="/article/trade-based-money-laundering" className="text-3xl">TBML</NavLink>
                        <Button variant="outline" className="mt-8 border-cardinal/50 w-full py-6">RSS Feed</Button>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow relative z-10">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-20 mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 opacity-100 transition-opacity">
                                <img src="/logo-clean.png" className="w-8 h-8 invert opacity-50" alt="logo" />
                                <span className="font-mono text-xs tracking-[0.3em] uppercase opacity-50">The Void Of Meaning</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
                                Exploring the structures that govern our world through absolute tactical clarity.
                            </p>
                        </div>

                        <div className="flex justify-center gap-8">
                            <a href="https://github.com/Ravs0" target="_blank" className="text-muted-foreground hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Mail size={20} /></a>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                                © {new Date().getFullYear()}
                            </p>
                            <p className="text-[10px] text-cardinal font-mono uppercase tracking-[0.2em]">Where meaning meets meaninglessness</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const NavLink = ({ to, children, className = "" }: { to: string, children: React.ReactNode, className?: string }) => (
    <Link to={to} className={`font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors ${className}`}>
        {children}
    </Link>
);

export default Layout;
