import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width Split Yellow & Red banner matching mockup */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12">
        
        {/* Left 8 Cols: Red Banner */}
        <div className="md:col-span-8 bg-[#E31B23] px-6 py-10 sm:py-14 sm:px-12 flex flex-col justify-center items-start text-white relative">
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white/90">
              Need Printing?
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              Ctrl P.
            </h2>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-white/80 uppercase pt-2">
              Printing • Advertising • Event
            </p>
          </div>
          
          {/* Subtle angled background decoration */}
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Right 4 Cols: Yellow Banner with White Pill Button */}
        <div className="md:col-span-4 bg-[#F5B014] px-6 py-10 sm:py-14 sm:px-10 flex items-center justify-center sm:justify-start md:justify-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white hover:bg-zinc-50 text-[#E31B23] text-base sm:text-lg font-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-5 h-5 text-[#E31B23] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
