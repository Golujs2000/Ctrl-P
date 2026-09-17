import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Clock, IndianRupee, MapPin, ChevronLeft, ChevronRight, Sparkles, Printer, Megaphone, Calendar } from 'lucide-react';

const slides = [
  {
    id: 'printing',
    pill: 'Printing',
    icon: Printer,
    categoryBadge: 'Industrial Offset & Digital Press',
    titleLine1: 'Print It.',
    titleLine2: 'Flawless Colors.',
    titleAccent: 'Every Run.',
    description: 'High-speed offset press & precision digital printing in Patna. From 350 GSM luxury visiting cards, catalogs, and brochures to 100,000+ volume book publications produced direct at our factory.',
    features: [
      { icon: Award, label: 'High Quality Offset' },
      { icon: Clock, label: 'Same-Day Dispatch' },
      { icon: IndianRupee, label: 'Wholesale Factory Rates' },
      { icon: MapPin, label: 'Langar Toli Workshop' },
    ],
    primaryCtaText: 'Explore Printing',
    primaryCtaLink: '/services',
    secondaryActionType: 'quote',
    secondaryService: 'Offset Printing',
    image: '/assets/machine-gethray-eco-flex-large.jpeg',
    imageAlt: 'Industrial Offset and Digital Printing Machines at Ctrl P Patna',
    badgeText: 'Direct Factory Printing • No Middlemen',
    overlayTitle: 'PRINT PRODUCTION',
    overlaySub: 'OFFSET & DIGITAL PRESS',
    verticalTags: ['Offset Press', 'Digital Prints', 'Visiting Cards', 'Brochures', 'Booklets']
  },
  {
    id: 'advertising',
    pill: 'Advertising',
    icon: Megaphone,
    categoryBadge: 'Outdoor Signage & Commercial Branding',
    titleLine1: 'Brand It.',
    titleLine2: 'Bold Impact.',
    titleAccent: 'Across Bihar.',
    description: 'High-visibility commercial advertising and outdoor branding. Seamless 10.5 ft wide eco-flex printing, weatherproof Star Flex hoardings, 3D acrylic letters, glow signs, and complete retail storefront transformations.',
    features: [
      { icon: Award, label: 'Up to 10.5 ft Seamless Width' },
      { icon: Clock, label: 'Weather-Resistant Star Flex' },
      { icon: IndianRupee, label: 'Direct Hoarding Pricing' },
      { icon: MapPin, label: 'On-Site Installation' },
    ],
    primaryCtaText: 'Advertising Solutions',
    primaryCtaLink: '/services/signage-branding',
    secondaryActionType: 'quote',
    secondaryService: 'Signage & Branding',
    image: '/assets/storefront-board-front-view.jpeg',
    imageAlt: 'Outdoor Advertising and Storefront Signages Ctrl P Patna',
    badgeText: 'Heavy-Duty Media • UV Weatherproof',
    overlayTitle: 'OUTDOOR BRANDING',
    overlaySub: 'SIGNAGE & HOARDINGS',
    verticalTags: ['Star Flex', '3D Glow Signs', 'Vinyl Pasting', 'Canopies', 'Retail Signage']
  },
  {
    id: 'event',
    pill: 'Event',
    icon: Calendar,
    categoryBadge: 'Turnkey Event & Exhibition Solutions',
    titleLine1: 'Make It.',
    titleLine2: 'Grand Stages.',
    titleAccent: 'Stand Out.',
    description: 'End-to-end event branding and conference production under one roof. Turnkey stage backdrops, rollup display standees, exhibition stall setups, conference kits, custom lanyards, and corporate giveaways.',
    features: [
      { icon: Award, label: 'Stage & Booth Backdrops' },
      { icon: Clock, label: '24-Hour Urgent Turnaround' },
      { icon: IndianRupee, label: 'Turnkey Package Pricing' },
      { icon: MapPin, label: 'Free On-Site Measurement' },
    ],
    primaryCtaText: 'Event Solutions',
    primaryCtaLink: '/services/event-printing',
    secondaryActionType: 'quote',
    secondaryService: 'Event Printing',
    image: '/assets/storefront-entrance-celebration.jpeg',
    imageAlt: 'Event Celebration Setups and Exhibition Branding Ctrl P',
    badgeText: 'Turnkey Setup • Urgent 24-Hr Dispatch',
    overlayTitle: 'EVENT PRODUCTION',
    overlaySub: 'STAGES & EXHIBITIONS',
    verticalTags: ['Stage Backdrops', 'Roll-up Standees', 'Exhibition Stalls', 'Promo Kits', 'Lanyards']
  }
];

export default function Hero({ onOpenQuote }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  const slide = slides[current];

  return (
    <section 
      id="home" 
      className="relative bg-white pt-6 pb-14 lg:pt-10 lg:pb-20 overflow-hidden border-b border-zinc-100 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-red-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Slide Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[480px]">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left animate-in fade-in slide-in-from-left-4 duration-300 key={slide.id}">
            
            {/* Category Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200/60 text-[#E31B23] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slide.categoryBadge}</span>
            </div>

            {/* Main Headline in Berlin Sans FB Bold */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-['Berlin_Sans_FB',sans-serif] font-black text-black tracking-tight leading-[1.08]">
                {slide.titleLine1}<br />
                {slide.titleLine2}<br />
                <span className="text-[#E31B23]">{slide.titleAccent}</span>
              </h1>
            </div>

            {/* Subheadline Description */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-zinc-600 leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {slide.features.map((feat, i) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={i} className="flex flex-col items-start space-y-1.5 p-2 rounded-xl bg-zinc-50/70 border border-zinc-100">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#E31B23] flex items-center justify-center border border-zinc-200 shadow-2xs">
                      <FeatIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-800 leading-tight">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to={slide.primaryCtaLink}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-sm font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenQuote(slide.secondaryService)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-black border-2 border-zinc-900 text-sm font-extrabold shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Get Instant Quote</span>
              </button>

              <a
                href="tel:9304085366"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-zinc-700 hover:text-[#E31B23] py-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E31B23]" />
                <span>Call: 9304085366</span>
              </a>
            </div>

            {/* Trust Note */}
            <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-zinc-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>In-house manufacturing at Kalyani Complex, Langar Toli Chauraha, Patna</span>
            </div>

          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-6 relative animate-in fade-in zoom-in-95 duration-300 key={`img-${slide.id}`}">
            <div className="relative rounded-3xl bg-gradient-to-b from-zinc-50 to-zinc-100 p-3 sm:p-4 border-2 border-zinc-200 shadow-xl overflow-hidden group">
              
              {/* Vertical Category Tags Bar */}
              <div className="absolute top-6 right-6 z-20 hidden sm:flex flex-col items-end space-y-1 bg-white/95 backdrop-blur-md px-3 py-2.5 rounded-2xl border border-zinc-200 shadow-sm text-right">
                {slide.verticalTags.map((tag, tIdx) => (
                  <span 
                    key={tag}
                    className={`text-[10px] font-black uppercase tracking-wider ${
                      tIdx === 1 ? 'text-[#E31B23]' : 'text-zinc-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Slide Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/assets/machine-gethray-eco-flex-large.jpeg';
                  }}
                />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-zinc-200 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-['Berlin_Sans_FB',sans-serif] font-black text-xs shrink-0 shadow-xs">
                      Ctrl<span className="text-[#E31B23]">P</span>
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-black">
                        {slide.overlayTitle}
                      </div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#E31B23]">
                        {slide.overlaySub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold bg-zinc-900 text-white px-3 py-1.5 rounded-full shrink-0">
                    Patna Studio
                  </span>
                </div>
              </div>

              {/* Verified Workshop Strip */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-zinc-600 px-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  {slide.badgeText}
                </span>
                <span className="text-zinc-500 font-mono text-[11px]">Patna, Bihar</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Carousel Progress & Navigation Controls */}
        <div className="flex items-center justify-center gap-4 pt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${s.pill}`}
                className="group py-2 px-1 cursor-pointer"
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current 
                    ? 'w-9 bg-[#E31B23]' 
                    : 'w-2 bg-zinc-300 group-hover:bg-zinc-400'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
