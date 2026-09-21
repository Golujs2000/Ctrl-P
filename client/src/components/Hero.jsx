import React from 'react';
import { ArrowRight, Award, Clock, IndianRupee, MapPin } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative bg-white border-b border-zinc-100 overflow-hidden w-full">
      
      {/* Desktop / Tablet View (md and above): Full 1983x793 Image Fitted 100% with Overlay Text */}
      <div className="hidden md:block relative w-full aspect-[1983/793] max-w-[2100px] mx-auto">
        {/* Full Hero Pic - 100% Complete & Uncropped */}
        <img decoding="async" loading="lazy"
          src="/assets/hero-background.webp"
          alt="Ctrl P Printing Press Patna"
          className="w-full h-full object-contain object-right pointer-events-none select-none"
        />

        {/* Text Content Overlay positioned on the left white space */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-[44%] lg:max-w-[42%] xl:max-w-[40%] space-y-4 lg:space-y-6 text-left">
              
              {/* Top Yellow Announcement Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFED00] text-black font-black text-[11px] lg:text-xs shadow-xs border border-amber-300">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                <span>Patna's Direct Offset & Digital Press • No Middlemen</span>
              </div>

              {/* Main Headline in Berlin Sans FB Bold */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black tracking-tight leading-[1.08]">
                Print It.<br />
                Brand It.<br />
                Make <span className="text-[#E31B23]">Stand Out.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs md:text-sm lg:text-base xl:text-lg font-bold text-zinc-800 tracking-tight leading-snug">
                Professional Printing, Advertising & Event Solutions in Patna
              </p>

              {/* 4 Feature Badges in compact 2x2 grid */}
              <div className="grid grid-cols-2 gap-2.5 lg:gap-3 pt-1">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-1.5 rounded-lg border border-zinc-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] lg:text-xs font-bold text-zinc-800">High Quality Print</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-1.5 rounded-lg border border-zinc-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] lg:text-xs font-bold text-zinc-800">Fast Turnaround</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-1.5 rounded-lg border border-amber-200/80 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FFED00] text-black flex items-center justify-center shrink-0 border border-amber-300">
                    <IndianRupee className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] lg:text-xs font-bold text-zinc-900">Direct Factory Rate</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-1.5 rounded-lg border border-zinc-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] lg:text-xs font-bold text-zinc-800">Patna In-House</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-center gap-2 px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs lg:text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:9304085366"
                  className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-black border-2 border-zinc-900 text-xs lg:text-sm font-extrabold shadow-xs transition-all duration-200"
                >
                  <span>Call 9304085366</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (< md): Stacked Layout so both the Full Picture and Text are 100% visible */}
      <div className="md:hidden px-4 pt-8 pb-10 space-y-6 text-left">
        
        {/* Mobile Headline with Yellow Pill */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFED00] text-black font-black text-xs shadow-xs border border-amber-300">
            <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
            <span>Patna's Direct Offset & Digital Press</span>
          </div>

          <h1 className="text-4xl font-black text-black tracking-tight leading-[1.08]">
            Print It.<br />
            Brand It.<br />
            Make <span className="text-[#E31B23]">Stand Out.</span>
          </h1>
          <p className="text-sm font-bold text-zinc-700">
            Professional Printing, Advertising & Event Solutions in Patna
          </p>
        </div>

        {/* Full Hero Picture for Mobile (100% Fitted, Uncropped) */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-zinc-50">
          <img decoding="async" loading="lazy"
            src="/assets/hero-background.webp"
            alt="Ctrl P Printing Press Patna Full Showcase"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* Mobile Feature Badges */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-100">
            <Award className="w-4 h-4 text-[#E31B23]" />
            <span className="text-xs font-bold text-zinc-800">High Quality</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-100">
            <Clock className="w-4 h-4 text-[#E31B23]" />
            <span className="text-xs font-bold text-zinc-800">Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-100">
            <IndianRupee className="w-4 h-4 text-[#E31B23]" />
            <span className="text-xs font-bold text-zinc-800">Affordable</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-100">
            <MapPin className="w-4 h-4 text-[#E31B23]" />
            <span className="text-xs font-bold text-zinc-800">Patna In-House</span>
          </div>
        </div>

        {/* Mobile CTA Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onOpenQuote}
            className="flex-1 py-3 rounded-xl bg-[#E31B23] text-white text-xs font-extrabold text-center shadow"
          >
            Get a Quote
          </button>
          <a
            href="tel:9304085366"
            className="flex-1 py-3 rounded-xl bg-black text-white text-xs font-extrabold text-center shadow"
          >
            Call Now
          </a>
        </div>

      </div>

    </section>
  );
}
