import React from 'react';
import { ArrowRight, Phone, Award, Clock, IndianRupee, MapPin } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-zinc-100">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Main Headline */}
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
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-800">High Quality Printing</span>
              </div>

              <div className="flex flex-col items-start space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-800">Fast Turnaround</span>
              </div>

              <div className="flex flex-col items-start space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-800">Affordable Pricing</span>
              </div>

              <div className="flex flex-col items-start space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center border border-red-100">
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
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-black border-2 border-zinc-900 text-base font-bold shadow-sm transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-[#E31B23]" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">Call Now</div>
                  <div className="text-sm font-extrabold text-black">9304085366</div>
                </div>
              </a>
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-zinc-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for urgent same-day orders in Langar Toli, Patna</span>
            </div>

          </div>

          {/* Right Visual Column matching mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-50 to-zinc-100/60 p-3 sm:p-4 border border-zinc-200/80 shadow-2xl overflow-hidden group">
              
              {/* Vertical Service Badge Bar (top right like in design) */}
              <div className="absolute top-6 right-6 z-20 hidden sm:flex flex-col items-end space-y-1 bg-white/90 backdrop-blur-md px-3 py-2.5 rounded-xl border border-zinc-200 shadow-sm text-right">
                <span className="text-[10px] font-black text-[#111111] uppercase tracking-wider">Offset Printing</span>
                <span className="text-[10px] font-black text-[#E31B23] uppercase tracking-wider">Digital Printing</span>
                <span className="text-[10px] font-black text-[#111111] uppercase tracking-wider">Flex Printing</span>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wider">Signage</span>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wider">Branding</span>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wider">Event Printing</span>
              </div>

              {/* Machine & Banner Composition */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                <img
                  src="/assets/machine-gethray-eco-flex-large.jpeg"
                  alt="Ctrl P Eco Flex Machine in Patna Workshop"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Ctrl P Brand Banner Roll Mockup Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-zinc-200 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/assets/brand-logo.png" 
                      alt="Ctrl P" 
                      className="h-9 w-auto object-contain"
                    />
                    <div className="h-8 w-px bg-zinc-200"></div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-black">IDEAS PRINTED</div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#E31B23]">BRANDS BUILT</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-zinc-900 text-white px-3 py-1 rounded-full">
                    Patna In-House
                  </span>
                </div>
              </div>

              {/* Verified workshop badge */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-zinc-600 px-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  Direct Factory Printing • No Middlemen
                </span>
                <span className="text-zinc-500 font-mono">Patna Workshop</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
