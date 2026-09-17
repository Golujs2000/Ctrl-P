import React from 'react';
import { ArrowRight, Check, Award, Layers, Sparkles, Building, Palette, IndianRupee, MapPin, Headphones } from 'lucide-react';

export default function AboutWhy({ onOpenQuote }) {
  const whyPoints = [
    {
      title: 'High-quality printing',
      icon: Award,
      isYellow: false
    },
    {
      title: 'Custom printing solutions',
      icon: Palette,
      isYellow: true
    },
    {
      title: 'Offset & eco-flex printing',
      icon: Layers,
      isYellow: false
    },
    {
      title: 'Affordable direct pricing',
      icon: IndianRupee,
      isYellow: true
    },
    {
      title: 'Professional finishing',
      icon: Sparkles,
      isYellow: false
    },
    {
      title: 'Fast local service in Patna',
      icon: MapPin,
      isYellow: true
    },
    {
      title: 'Business & event printing',
      icon: Building,
      isYellow: false
    },
    {
      title: 'Dedicated customer support',
      icon: Headphones,
      isYellow: false
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Ctrl P matching mockup */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
                About Ctrl P
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mt-1">
                Your Trusted Printing Partner in Patna
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Ctrl P provides professional printing, advertising and event printing solutions for businesses, organizations and individuals in Patna.
            </p>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              From business cards and brochures to banners, wedding invitations, stickers and large-format printing, we help turn your ideas into high-quality printed materials.
            </p>

            {/* Business Verification Badge */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Registered Business GSTIN</div>
                <div className="text-sm font-extrabold text-black font-mono">10AAIPQ8193J1ZD</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Verified Press
              </span>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-sm font-extrabold shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Why Ctrl P? matching mockup */}
          <div id="why-us" className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
                Why Ctrl P?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mt-1">
                Quality Printing. Reliable Service.
              </h2>
            </div>

            {/* 2-Column Checklist with red & yellow round icon badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whyPoints.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50/80 border border-zinc-200/70 hover:border-zinc-300 transition-all duration-200"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.isYellow 
                        ? 'bg-[#FFED00] text-black border border-amber-300 shadow-2xs' 
                        : 'bg-red-100/70 text-[#E31B23]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-800">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Quick Callout with Yellow styling */}
            <div className="p-4 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50/70 flex items-center justify-between text-xs shadow-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-[#FFED00] text-black font-black text-[10px] border border-amber-300 shrink-0">
                  Direct Expert
                </span>
                <span className="font-bold text-zinc-900">
                  Need advice on paper GSM, flex material or finishes?
                </span>
              </div>
              <button
                onClick={onOpenQuote}
                className="font-extrabold text-black bg-[#FFED00] hover:bg-[#F5B014] px-3.5 py-1.5 rounded-lg border border-amber-300 shadow-xs transition-colors shrink-0 ml-2"
              >
                Talk to Press →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
