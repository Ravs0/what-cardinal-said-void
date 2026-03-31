import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Rss, ChevronRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  {
    label: 'Foundation',
    children: [
      { label: 'Prologue', to: '/chapter/prologue' },
      { label: 'That is Law', to: '/chapter/that-is-law' },
      { label: 'Law for Whom', to: '/chapter/law-for-whom' },
    ],
  },
  {
    label: 'Articles',
    children: [
      { label: 'Trade-Based Money Laundering', to: '/article/trade-based-money-laundering' },
      { label: 'Haircut vs. Time', to: '/article/haircut-vs-time' },
    ],
  },
  {
    label: 'Geopolitics',
    children: [
      { label: 'From Refuge to Regional Fracture', to: '/article/refuge-to-regional-fracture' },
      { label: 'Iran–US Conflict', to: '/article/iran-us-conflict' },
    ],
  },
];

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setOpenDrop(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDrop) return;
    const close = () => setOpenDrop(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [openDrop]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* ─── Navbar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[hsl(220_14%_9%/0.97)] backdrop-blur-md border-b border-[hsl(var(--divider))]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-7 h-7 rounded-full border border-cardinal/40 flex items-center justify-center overflow-hidden bg-cardinal/10 group-hover:bg-cardinal/20 transition-colors">
              <img src="/logo-clean.png" alt="Logo" className="w-4 h-4 object-contain invert" />
            </div>
            <span className="font-serif text-base text-[hsl(var(--text-primary))] leading-none">
              What <span className="text-cardinal">Cardinal</span> Said
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((group) => (
              <div key={group.label} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDrop(openDrop === group.label ? null : group.label);
                  }}
                  className={`btn-ghost text-[13px] ${openDrop === group.label ? 'text-[hsl(var(--text-primary))]' : ''}`}
                >
                  {group.label}
                  <ChevronRight
                    className={`w-3 h-3 transition-transform duration-200 ${openDrop === group.label ? 'rotate-90' : ''}`}
                  />
                </button>
                {openDrop === group.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 surface-raised rounded-lg shadow-xl py-1 z-50 animate-fade-up"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {group.children.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface))] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <a
              href="/rss.xml"
              target="_blank"
              title="RSS Feed"
              className="hidden md:flex btn-ghost text-[13px] gap-1.5"
            >
              <Rss className="w-3.5 h-3.5" /> RSS
            </a>
            <a
              href="https://github.com/Ravs0"
              target="_blank"
              title="GitHub"
              className="hidden md:flex btn-ghost"
            >
              <Github className="w-4 h-4" />
            </a>
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-raised))] transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      {isMenuOpen && (
        <div className="mobile-menu animate-fade-up z-[200]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-[hsl(var(--divider))] shrink-0">
            <span className="font-serif text-base text-[hsl(var(--text-primary))]">
              What <span className="text-cardinal">Cardinal</span> Said
            </span>
            <button
              className="p-2 rounded text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-raised))]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Nav groups */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            {NAV_ITEMS.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mb-3">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.children.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block py-2.5 px-3 rounded text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-raised))] text-base transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom */}
          <div className="px-4 py-4 border-t border-[hsl(var(--divider))] flex items-center gap-4">
            <a href="https://github.com/Ravs0" target="_blank" className="btn-ghost text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="/rss.xml" target="_blank" className="btn-ghost text-sm">
              <Rss className="w-4 h-4" /> RSS Feed
            </a>
          </div>
        </div>
      )}

      {/* ─── Main Content ─── */}
      <main className="flex-grow pt-14">
        {children}
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[hsl(var(--divider))] mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/logo-clean.png" className="w-5 h-5 invert opacity-40" alt="logo" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[hsl(var(--text-muted))]">
                  What Cardinal Said
                </span>
              </div>
              <p className="text-xs text-[hsl(var(--text-muted))] max-w-xs leading-relaxed">
                Law, absurdism, and the architecture of meaning — viewed through absolute tactical clarity.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-x-12 gap-y-1">
                {NAV_ITEMS.map((group) => (
                  <div key={group.label}>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-[hsl(var(--text-muted))] mb-2">
                      {group.label}
                    </p>
                    {group.children.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block text-xs text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] py-0.5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider mt-10 pt-6 flex items-center justify-between">
            <p className="font-mono text-[10px] text-[hsl(var(--text-muted))]">
              © {new Date().getFullYear()} · Where meaning meets meaninglessness
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Ravs0" target="_blank" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="/rss.xml" target="_blank" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] transition-colors">
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
