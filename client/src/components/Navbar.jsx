import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-3xl font-black tracking-tight text-black">Ctrl</span>
                <span className="text-3xl font-black tracking-tight text-[#E31B23]">P</span>
                <span className="text-xs font-bold text-zinc-400 ml-0.5">®</span>
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-zinc-500 -mt-1 uppercase">
                Printing • Advertising • Event
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-sm font-semibold text-[#E31B23] hover:text-[#E31B23] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E31B23]"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm font-semibold text-zinc-700 hover:text-[#E31B23] transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-sm font-semibold text-zinc-700 hover:text-[#E31B23] transition-colors"
            >
              Services
            </a>
            <a 
              href="#machines" 
              className="text-sm font-semibold text-zinc-700 hover:text-[#E31B23] transition-colors"
            >
              Machines
            </a>
            <a 
              href="#why-us" 
              className="text-sm font-semibold text-zinc-700 hover:text-[#E31B23] transition-colors"
            >
              Why Ctrl P
            </a>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-zinc-700 hover:text-[#E31B23] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Call Pill Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9304085366"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E31B23] hover:bg-[#C7141B] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>9304085366</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:9304085366"
              className="p-2 rounded-full bg-[#E31B23] text-white"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
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
        <div className="sm:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-[#E31B23] bg-red-50"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            Services
          </a>
          <a
            href="#machines"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            Machines
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            About Us
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            Why Ctrl P
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            Contact
          </a>
          <div className="pt-2">
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
