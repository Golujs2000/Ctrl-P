import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, MessageSquare, Map, ShieldCheck } from 'lucide-react';

export default function Location() {
  const mapDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Kalyani+Complex+Langar+Toli+Chauraha+Patna";
  const [mapMode, setMapMode] = useState('embed'); // 'embed' or 'graphic'

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
                    <a href="tel:7544095366" className="text-sm font-bold text-zinc-700 hover:text-[#E31B23] transition-colors">
                      +91 7544095366
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Official Email</h4>
                  <a href="mailto:ctrlppatna@gmail.com" className="text-base font-black text-black hover:text-[#E31B23] transition-colors break-all">
                    ctrlppatna@gmail.com
                  </a>
                  <p className="text-xs text-zinc-500 font-medium">Send design artwork, orders & quotes</p>
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

              {/* Government Registrations */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-zinc-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Government Registered Enterprise
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">MSME Micro</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-zinc-600 font-medium pt-0.5">
                  <span>GSTIN: <strong className="font-mono text-zinc-900 font-bold">10AAIPQ8193J1ZD</strong></span>
                  <span>Udyam: <strong className="font-mono text-zinc-900 font-bold">UDYAM-BR-26-0144129</strong></span>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=25.6162456,85.15828599999999"
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

          {/* Right Column: Google Maps Embed & Interactive Card matching mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-xl bg-zinc-100 aspect-[16/11] group">
              
              {/* Google Maps Official Embed */}
              <iframe
                title="Ctrl P Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.658985488402!2d85.15828599999999!3d25.6162456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5931a41f9a41%3A0x69618fc13b242190!2sCtrl%20P!5e0!3m2!1sen!2sin!4v1789612804891!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full object-cover"
              />

              {/* Floating Address Card on Map at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-zinc-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E31B23] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                    Ctrl P
                  </div>
                  <div>
                    <div className="text-xs font-black text-black">Ctrl P — Printing Press</div>
                    <div className="text-[11px] font-bold text-zinc-600">Kalyani Complex, Langar Toli Chauraha, Patna</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-extrabold text-emerald-700">Open Now • 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=25.6162456,85.15828599999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all duration-200 shrink-0 self-end sm:self-auto"
                >
                  <span>Directions</span>
                  <Navigation className="w-3.5 h-3.5 text-[#E31B23]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
