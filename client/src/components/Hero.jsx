import React from 'react';
import { ArrowRight, Award, Clock, IndianRupee, MapPin, ShieldCheck } from 'lucide-react';

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

        {/* Text Content Overlay positioned on the left white space with balanced large-screen scaling */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 w-full">
            <div className="max-w-[46%] lg:max-w-[44%] xl:max-w-[42%] 2xl:max-w-[40%] space-y-4 lg:space-y-6 2xl:space-y-7 text-left">
              
              {/* Top GSTIN & Verified Govt Registered Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-zinc-900 text-white font-bold text-[11px] lg:text-xs 2xl:text-sm shadow-xs border border-zinc-700">
                <ShieldCheck className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald-400 shrink-0" />
                <span>GSTIN: <span className="font-mono font-extrabold text-amber-300">10AAIPQ8193J1ZD</span></span>
                <span className="text-zinc-500">•</span>
                <span className="text-[10px] lg:text-[11px] 2xl:text-xs text-zinc-300 font-semibold">MSME Registered Press</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black tracking-tight leading-[1.06]">
                Print It.<br />
                Brand It.<br />
                Make <span className="text-[#E31B23]">It Stand Out.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-zinc-800 tracking-tight leading-snug">
                Professional Printing, Advertising & Event Solutions in Patna
              </p>

              {/* 4 Feature Badges in balanced 2x2 grid */}
              <div className="grid grid-cols-2 gap-2.5 lg:gap-3 2xl:gap-3.5 pt-1">
                <div className="flex items-center gap-2 2xl:gap-2.5 bg-white/90 backdrop-blur-xs p-1.5 lg:p-2 2xl:p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
                  <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                  </div>
                  <span className="text-[11px] lg:text-xs 2xl:text-sm font-extrabold text-zinc-800">High Quality Print</span>
                </div>

                <div className="flex items-center gap-2 2xl:gap-2.5 bg-white/90 backdrop-blur-xs p-1.5 lg:p-2 2xl:p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
                  <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                  </div>
                  <span className="text-[11px] lg:text-xs 2xl:text-sm font-extrabold text-zinc-800">Fast Turnaround</span>
                </div>

                <div className="flex items-center gap-2 2xl:gap-2.5 bg-white/90 backdrop-blur-xs p-1.5 lg:p-2 2xl:p-2.5 rounded-xl border border-amber-200/80 shadow-xs">
                  <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-[#FFED00] text-black flex items-center justify-center shrink-0 border border-amber-300">
                    <IndianRupee className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                  </div>
                  <span className="text-[11px] lg:text-xs 2xl:text-sm font-extrabold text-zinc-900">Direct Factory Rate</span>
                </div>

                <div className="flex items-center gap-2 2xl:gap-2.5 bg-white/90 backdrop-blur-xs p-1.5 lg:p-2 2xl:p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
                  <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                  </div>
                  <span className="text-[11px] lg:text-xs 2xl:text-sm font-extrabold text-zinc-800">Patna In-House</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 2xl:gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-center gap-2 px-5 lg:px-7 2xl:px-8 py-2.5 lg:py-3.5 2xl:py-4 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs lg:text-sm 2xl:text-base font-extrabold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5" />
                </button>

                <a
                  href="tel:9304085366"
                  className="inline-flex items-center justify-center px-4 lg:px-6 2xl:px-7 py-2.5 lg:py-3.5 2xl:py-4 rounded-xl bg-white hover:bg-zinc-50 text-black border-2 border-zinc-900 text-xs lg:text-sm 2xl:text-base font-extrabold shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <span>Call 9304085366</span>
                </a>
              </div>

              {/* Below Hero CTA: Patna's Direct Offset & Digital Press */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full bg-[#FFED00] text-black font-extrabold text-[11px] lg:text-xs 2xl:text-sm shadow-xs border border-amber-300">
                  <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#E31B23]" />
                  <span>Patna's Direct Offset & Digital Press • No Middlemen</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] lg:text-[11px] 2xl:text-xs text-zinc-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>100% Tax Invoices Provided</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (< md): Unified Hero with Background & Overlay Content */}
      <div className="md:hidden relative px-4 pt-8 pb-10 overflow-hidden bg-white text-left">
        {/* Full Hero Background Image fitted behind content */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img decoding="async" loading="eager"
            src="/assets/hero-background.webp"
            alt="Ctrl P Printing Press Patna"
            className="w-full h-full object-cover object-[72%_center] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white" />
        </div>

        {/* Content Layer on top of Background */}
        <div className="relative z-10 space-y-5">
          
          {/* Mobile Headline with GST Badge */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 text-white font-bold text-[11px] shadow-xs border border-zinc-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>GSTIN: <span className="font-mono font-extrabold text-amber-300">10AAIPQ8193J1ZD</span></span>
              <span className="text-zinc-500">•</span>
              <span className="text-[10px] text-zinc-300">MSME Registered</span>
            </div>

            <h1 className="text-4xl font-black text-black tracking-tight leading-[1.08]">
              Print It.<br />
              Brand It.<br />
              Make <span className="text-[#E31B23]">It Stand Out.</span>
            </h1>
            <p className="text-sm font-bold text-zinc-700 leading-snug">
              Professional Printing, Advertising & Event Solutions in Patna
            </p>
          </div>

          {/* Mobile Feature Badges in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-lg border border-zinc-200/80 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-zinc-800">High Quality</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-lg border border-zinc-200/80 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-zinc-800">Fast Turnaround</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-lg border border-amber-200/80 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-[#FFED00] text-black flex items-center justify-center shrink-0 border border-amber-300">
                <IndianRupee className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Direct Factory Rate</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-lg border border-zinc-200/80 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-zinc-800">Patna In-House</span>
            </div>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onOpenQuote}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs font-extrabold text-center shadow-md transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:9304085366"
              className="flex-1 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-black border-2 border-zinc-900 text-xs font-extrabold text-center shadow-xs transition-all"
            >
              Call 9304085366
            </a>
          </div>

          {/* Mobile Below CTA: Patna's Direct Offset & Digital Press */}
          <div className="flex flex-col items-center justify-center gap-1.5 pt-1 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFED00] text-black font-extrabold text-xs shadow-xs border border-amber-300">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <span>Patna's Direct Offset & Digital Press</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>100% Tax Invoices Provided for Corporate Orders</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
