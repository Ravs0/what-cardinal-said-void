import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoveLeft, Menu, X, Github, Mail } from 'lucide-react';
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

    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-cardinal/30">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-cardinal flex items-center justify-center p-2 group-hover:shadow-[0_0_15px_rgba(196,30,58,0.5)] transition-all">
                            <img src="/logo-clean.png" alt="Cardinal Logo" className="w-full h-full object-contain invert" />
                        </div>
                        <span className="font-serif text-lg tracking-tight group-hover:text-white transition-colors">WHAT CARDINAL SAID</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/prologue">Prologue</NavLink>
                        <Button variant="outline" size="sm" className="border-cardinal/50 hover:bg-cardinal/10 hover:border-cardinal transition-all">
                            Feed (RSS)
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full glass h-screen animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col items-center gap-8 pt-20">
                            <NavLink to="/" className="text-2xl">Home</NavLink>
                            <NavLink to="/prologue" className="text-2xl">Prologue</NavLink>
                            <Button variant="outline" className="mt-8 border-cardinal/50">RSS Feed</Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-24">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                            <img src="/logo-clean.png" className="w-6 h-6 invert" alt="logo" />
                            <span className="font-mono text-xs tracking-widest uppercase">The Void Of Meaning</span>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://github.com/Ravs0" target="_blank" className="text-muted-foreground hover:text-white transition-colors"><Github size={18} /></a>
                            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Mail size={18} /></a>
                        </div>
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                            © {new Date().getFullYear()} · WHERE MEANING MEETS MEANINGLESSNESS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const NavLink = ({ to, children, className = "" }: { to: string, children: React.ReactNode, className?: string }) => (
    <Link to={to} className={`font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors ${className}`}>
        {children}
    </Link>
);

export default Layout;
