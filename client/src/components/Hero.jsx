import React from 'react';
import { ArrowRight, Phone, Award, Clock, IndianRupee, MapPin } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative bg-white min-h-[580px] lg:min-h-[680px] flex items-center border-b border-zinc-100 overflow-hidden">
      {/* Hero Background Image Fitted to Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/hero-background.png"
          alt="Ctrl P Printing Press Patna"
          className="w-full h-full object-cover object-[85%_center] lg:object-right xl:object-[80%_center]"
        />
        {/* Soft gradient overlay on mobile & tablet for 100% crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/70 lg:via-white/20 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-md lg:max-w-xl space-y-7 text-left">
          
          {/* Main Headline in Berlin Sans FB Bold */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-black tracking-tight leading-[1.05]">
              Print It.<br />
              Brand It.<br />
              Make <span className="text-[#E31B23]">Stand Out.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl font-bold text-zinc-800 tracking-tight max-w-xl">
            Professional Printing, Advertising & Event Solutions in Patna
          </p>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="flex flex-col items-start space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100 shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-zinc-800">High Quality Printing</span>
            </div>

            <div className="flex flex-col items-start space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100 shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-zinc-800">Fast Turnaround</span>
            </div>

            <div className="flex flex-col items-start space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100 shadow-xs">
                <IndianRupee className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-zinc-800">Affordable Pricing</span>
            </div>

            <div className="flex flex-col items-start space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-zinc-800">Local Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:9304085366"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/90 backdrop-blur-xs hover:bg-white text-black border-2 border-zinc-900 text-base font-bold shadow-sm transition-all duration-200"
            >
              <div className="text-left leading-tight">
                <div className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">Call Now</div>
                <div className="text-sm font-extrabold text-black">9304085366</div>
              </div>
            </a>
          </div>

          {/* Trust note */}
          <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-zinc-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for urgent same-day orders in Langar Toli, Patna</span>
          </div>

        </div>
      </div>
    </section>
  );
}
