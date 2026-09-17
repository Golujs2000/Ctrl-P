import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Machines', path: '/machines' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all">
      {/* Official CMYK Process Inks Top Bar */}
      <div 
        className="w-full h-1 flex" 
        title="Ctrl P Process Inks: Cyan (C:100%), Magenta (M:100%), Yellow (Y:100%), Black (K:100%) • Red (M:100% Y:90%)"
      >
        <div className="flex-1 bg-[#00A3E0]" />
        <div className="flex-1 bg-[#EC008C]" />
        <div className="flex-1 bg-[#FFED00]" />
        <div className="flex-1 bg-[#111111]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo without icon as requested */}
          <Logo showIcon={false} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#E31B23] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E31B23]'
                      : 'text-zinc-700 hover:text-[#E31B23]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Call Pill Button & Quote */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2 text-xs font-extrabold text-black bg-[#FFED00] hover:bg-[#F5B014] border border-amber-300 rounded-full shadow-xs transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </button>
            <a
              href="tel:9304085366"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E31B23] hover:bg-[#C7141B] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>9304085366</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:9304085366"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E31B23] text-white text-xs font-extrabold shadow-xs"
              aria-label="Call 9304085366"
            >
              <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>9304085366</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                  isActive
                    ? 'text-[#E31B23] bg-red-50'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-[#E31B23] text-white font-bold text-center shadow"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
