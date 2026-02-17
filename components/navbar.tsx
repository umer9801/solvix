'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Menu, MessageCircle, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const mobileNavItems = [...navItems, { label: 'Contact', href: '/contact' }];

  const socialLinks = [
    { label: 'Facebook', icon: Facebook },
    { label: 'Instagram', icon: Instagram },
    { label: 'WhatsApp', icon: MessageCircle },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-background/95 border-b border-border backdrop-blur-lg'
        : 'bg-background/80 backdrop-blur-md border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">SC</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Solvix Core
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile top bar */}
        <div className="md:hidden py-3">
          <div
            className={`relative overflow-hidden rounded-[1.25rem] border transition-all duration-300 ${scrolled
              ? 'border-border/70 bg-card/95'
              : 'border-border/40 bg-card/75'
              } backdrop-blur-xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-transparent to-primary/5" />
            <div className="relative flex h-14 items-center justify-between px-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    SC
                  </span>
                </div>
                <span className="text-sm font-semibold tracking-[0.18em] text-foreground/90 uppercase">
                  Solvix Core
                </span>
              </Link>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-foreground/90 transition hover:border-primary/60 hover:text-primary"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <button
        type="button"
        className={`md:hidden fixed inset-0 z-40 bg-background/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Modal - NO SHADOW */}
      <div
        className={`md:hidden fixed top-[4.95rem] right-4 w-[50vw] z-50 min-h-[70vh] rounded-[1.75rem] border border-border/70 bg-card/95 px-6 py-5 shadow-[-20px_0_50px_-15px_hsla(180,90%,45%,0.3),0_-20px_50px_-15px_hsla(180,90%,45%,0.3),0_20px_50px_-15px_hsla(180,90%,45%,0.3)]
         backdrop-blur-2xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none -translate-y-4 opacity-0'
          }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground/80 transition hover:border-primary/60 hover:text-primary"
          aria-label="Close menu"
        >
          <X size={16} />
        </button>

        <div className="flex min-h-[calc(70vh-2.5rem)] flex-col pt-2">
          <div className="space-y-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between border-b border-border/60 py-4 text-[1.12rem] font-medium text-foreground/85 transition-colors duration-300 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                {item.label === 'Services' && (
                  <ArrowRight
                    size={18}
                    className="text-foreground/55 transition-colors group-hover:text-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="mt-auto border-t border-border/60 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              Follow Us
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/55 text-foreground/75 transition-all hover:border-primary/60 hover:text-primary"
                    aria-label={social.label}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
