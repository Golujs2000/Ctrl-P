import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, MessageSquare } from 'lucide-react';

export default function Location() {
  const mapDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Kalyani+Complex+Langar+Toli+Chauraha+Patna";

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Store Details matching mockup */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
                Location & Hours
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mt-1">
                Visit Our Store
              </h2>
            </div>

            <div className="space-y-6">
              
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Address</h4>
                  <p className="text-base font-bold text-black leading-relaxed">
                    Kalyani Complex, Bari Path, Dariyapur Gola, Langar Toli Chauraha, Dujra Diara, Patna, Bihar
                  </p>
                  <p className="text-xs text-zinc-500 font-medium">Landmark: Near Langar Toli Chauraha</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Direct Contacts</h4>
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:9304085366" className="text-lg font-black text-black hover:text-[#E31B23] transition-colors">
                      +91 9304085366
                    </a>
                    <a href="tel:9304323888" className="text-sm font-bold text-zinc-700 hover:text-[#E31B23] transition-colors">
                      +91 9304323888
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Operating Hours</h4>
                  <p className="text-base font-extrabold text-black">
                    Mon – Sat: 9:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs font-semibold text-zinc-500">
                    [ Sunday by appointment ]
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#E31B23]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="https://wa.me/919304085366?text=Hello%20Ctrl%20P,%20I%20would%20like%20to%20visit%20your%20store%20in%20Patna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Styled Patna Map matching mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-200/80 shadow-lg bg-zinc-50 aspect-[16/10] group">
              
              {/* Custom Styled Map Representation matching the mockup's graphics */}
              <div className="absolute inset-0 bg-[#E8EEF5]">
                <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#D1DEED" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Rivers / Roads */}
                  <path d="M -50,120 Q 200,60 500,100 T 900,40" fill="none" stroke="#B8D2EB" strokeWidth="12" />
                  <path d="M 100,-20 Q 300,180 400,400" fill="none" stroke="#CBD5E1" strokeWidth="8" />
                  <path d="M 0,260 Q 350,220 700,320" fill="none" stroke="#FFFFFF" strokeWidth="14" />
                  <path d="M 120,380 L 600,150" fill="none" stroke="#FFFFFF" strokeWidth="10" />
                  <path d="M 280,50 L 520,390" fill="none" stroke="#FDE68A" strokeWidth="6" />
                </svg>

                {/* Patna Geographic Landmarks */}
                <div className="absolute top-10 left-12 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  Dujra Diara
                </div>
                
                <div className="absolute top-28 left-20 text-[11px] font-extrabold text-zinc-600 uppercase tracking-wider">
                  Dariyapur Gola
                </div>

                <div className="absolute bottom-20 left-32 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  Patna Market
                </div>

                <div className="absolute bottom-16 right-24 flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50/90 px-2 py-1 rounded-md border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Patna Junction (2.5 km)
                </div>

                <div className="absolute top-24 right-20 text-[11px] font-bold text-zinc-500">
                  Danapur Junction →
                </div>

                {/* Central Prominent Map Pin matching mockup */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 animate-bounce duration-1000">
                  <div className="bg-white rounded-xl shadow-xl px-4 py-2 border-2 border-[#E31B23] flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E31B23] animate-ping"></span>
                    <div>
                      <div className="text-xs font-black text-black leading-tight">Ctrl P • Kalyani Complex</div>
                      <div className="text-[10px] font-bold text-[#E31B23]">Langar Toli Chauraha, Patna</div>
                    </div>
                  </div>
                  <div className="w-7 h-7 bg-[#E31B23] rounded-full flex items-center justify-center text-white shadow-lg -mt-1 border-2 border-white">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                  <div className="w-2.5 h-1 bg-black/30 rounded-full blur-[1px]"></div>
                </div>

                {/* Langar Toli Chauraha Label */}
                <div className="absolute top-[58%] left-1/2 -translate-x-1/2 text-xs font-black text-zinc-800 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-zinc-300 shadow-xs">
                  Langar Toli Chauraha
                </div>
              </div>

              {/* Bottom Card / Storefront Photo Peek */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-zinc-200 shadow-md flex items-center gap-3">
                <img
                  src="/assets/storefront-kalyani-complex-plaza.jpeg"
                  alt="Ctrl P Storefront Patna"
                  className="w-14 h-14 rounded-lg object-cover border border-zinc-200"
                />
                <div>
                  <div className="text-xs font-black text-black">Kalyani Complex Gate</div>
                  <div className="text-[11px] font-bold text-zinc-500">Ground Floor & Design Studio</div>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-extrabold text-[#E31B23] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Google Maps Interactive Overlay Button */}
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-zinc-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E31B23]" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
