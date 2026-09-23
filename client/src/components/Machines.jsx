import React from 'react';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function Machines({ onOpenQuote }) {
  return (
    <section id="machines" className="py-16 lg:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 3-Column Layout matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Machine 1: Offset Printing Machine */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:border-[#E31B23]/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Commercial Press</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-2">
                Offset Printing Machine
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 leading-relaxed mb-6">
                High-quality printing for bulk business and commercial requirements.
              </p>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-zinc-200/60 p-2 flex items-center justify-center">
              <img decoding="async" loading="lazy"
                src="/assets/machine-heidelberg-speedmaster-offset-press.jpg"
                alt="Heidelberg Offset Printing Press Ctrl P"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-bold text-zinc-700">
              <span>Bulk Brochures & Books</span>
              <span className="text-[#E31B23]">In-House Patna</span>
            </div>
          </div>

          {/* Machine 2: Eco Flex Printing Machine */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:border-[#E31B23]/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Large Format</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-2">
                Eco Flex Printing Machine
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 leading-relaxed mb-6">
                Large-format printing for banners, flex, signage and advertising.
              </p>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-zinc-200/60 p-2 flex items-center justify-center">
              <img decoding="async" loading="lazy"
                src="/assets/machine-gethray-large-format-eco-solvent-printer.jpg"
                alt="Gethray Eco Flex Machine Ctrl P"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-bold text-zinc-700">
              <span>Banners, Star Flex & Vinyl</span>
              <span className="text-[#E31B23]">High Resolution</span>
            </div>
          </div>

          {/* Card 3: Professional Machines Statement Card matching mockup */}
          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-100 shadow-sm flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-10 h-1.5 bg-[#E31B23] rounded-full"></div>
                  <div className="w-6 h-1.5 bg-[#FFED00] rounded-full border border-amber-300"></div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFED00] text-black font-black text-[10px] border border-amber-300 shadow-xs">
                  ⚡ In-House Patna Setup
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight">
                Professional Machines.<br />
                Better <span className="text-[#E31B23]">Printing Results.</span>
              </h3>
              
              <p className="text-base sm:text-lg font-bold text-zinc-800 leading-snug">
                Latest technology. Sharp quality. Vibrant output.
              </p>

              <p className="text-xs sm:text-sm font-normal text-zinc-600 leading-relaxed">
                Equipped with cutting-edge industrial print technology right at our Langar Toli workshop, we guarantee true-to-life colors, ultra-crisp typography, and fast turnaround for orders of any scale.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-zinc-100">
              <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800">
                <CheckCircle className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Zero color fading with UV-resistant inks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800">
                <div className="w-4 h-4 rounded-full bg-[#FFED00] text-black border border-amber-300 flex items-center justify-center shrink-0">
                  <Zap className="w-2.5 h-2.5" />
                </div>
                <span>Same-day priority turnaround available</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800">
                <ShieldCheck className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Heavy duty laminators & precision cutting</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-all"
              >
                Inquire About Bulk Specs
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
