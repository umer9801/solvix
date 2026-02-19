'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'h-16 mt-4 mx-4' : 'h-20 bg-transparent'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full transition-all duration-500 ${scrolled ? 'liquid-glass rounded-2xl shadow-2xl' : ''
        }`}>
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 transition-all duration-300 transform group-hover:scale-110 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.3)] border border-primary/30 bg-background/80 p-1.5 animate-glow">
              <Image
                src="/logo/logo.PNG"
                alt="Solvix Core Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline silver-gradient">
              Solvix Core
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-bold text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 text-foreground/70 hover:text-primary transition-all duration-300 border border-border/40"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-2.5 rounded-xl font-bold transition-all duration-500 shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 liquid-glass text-foreground/90 transition hover:border-primary/40 shadow-xl"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 liquid-glass text-foreground/90 transition hover:border-primary/40 shadow-xl"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-50 animate-scale-in">
          <div className="liquid-glass rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg font-bold text-foreground/80 hover:text-primary p-3 rounded-2xl transition-colors hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/40">
              <Link
                href="/contact"
                className="block w-full bg-primary text-primary-foreground text-center py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
