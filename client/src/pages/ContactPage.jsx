import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message })
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Ctrl P | Printing Press in Langar Toli, Patna",
      "description": "Contact Ctrl P in Kalyani Complex, Langar Toli Chauraha, Patna. Phone: +91 9304085366, +91 9304323888. Open Monday to Saturday 10:00 AM - 9:00 PM.",
      "url": "https://ctrlppatna.in/contact",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Ctrl P — A Design & Print Shop",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1 & 2, Kalyani Complex, Bari Path, Langar Toli Chauraha",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.6162456,
          "longitude": 85.158286
        },
        "telephone": ["+919304085366", "+919304323888"],
        "hasMap": "https://maps.google.com/?q=25.6162456,85.158286"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctrlppatna.in/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ctrlppatna.in/contact" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Contact Ctrl P | Langar Toli Chauraha, Kalyani Complex, Patna"
        description="Visit Ctrl P in Kalyani Complex, Langar Toli, Patna for all commercial printing inquiries. Call +91 9304085366. Google Maps directions, store hours, and instant WhatsApp quote."
        keywords="contact Ctrl P Patna, printing shop address Patna, Kalyani Complex Langar Toli, printing press phone number Bihar"
        canonicalPath="/contact"
        schema={contactSchema}
      />
      
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-100 bg-zinc-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold text-zinc-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E31B23]">Contact Us</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200/80 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Visit Our Store & <span className="text-[#E31B23]">Print Studio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 font-medium">
            Located conveniently in Kalyani Complex, Langar Toli Chauraha, Patna. Walk in anytime or get in touch for instant quotes and deliveries.
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Map */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Message Form */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Address</h4>
                  <p className="text-base font-extrabold text-black leading-relaxed">
                    Kalyani Complex, Bari Path, Dariyapur Gola, Langar Toli Chauraha, Dujra Diara, Patna, Bihar
                  </p>
                  <p className="text-xs text-zinc-500 font-medium">Landmark: Langar Toli Crossing, Ground Floor Plaza</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Phone & WhatsApp</h4>
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:9304085366" className="text-xl font-black text-black hover:text-[#E31B23] transition-colors">
                      +91 9304085366
                    </a>
                    <a href="tel:9304323888" className="text-sm font-bold text-zinc-700 hover:text-[#E31B23] transition-colors">
                      +91 9304323888
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Operating Hours</h4>
                  <p className="text-base font-black text-black">
                    Monday – Saturday: 9:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs font-semibold text-zinc-500">
                    Sunday: By appointment for bulk event printing
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=25.6162456,85.15828599999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#E31B23]" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="https://wa.me/919304085366?text=Hello%20Ctrl%20P!%20I%20want%20to%20visit%20your%20shop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Send Quick Message Card */}
            <div className="bg-zinc-50 rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-black">Send a Direct Message</h3>
              
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="How can we help you? (e.g. Need visiting cards quote)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold">Thank you! Your message has been received. Our team in Patna will contact you shortly.</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Official Embed */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-2xl bg-zinc-100 aspect-[4/3] sm:aspect-[16/11]">
              <iframe
                title="Ctrl P Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.658985488402!2d85.15828599999999!3d25.6162456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5931a41f9a41%3A0x69618fc13b242190!2sCtrl%20P!5e0!3m2!1sen!2sin!4v1789612804891!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />

              {/* Bottom Address Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-zinc-200 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E31B23] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                    Ctrl P
                  </div>
                  <div>
                    <div className="text-xs font-black text-black">Ctrl P — Printing Press</div>
                    <div className="text-[11px] font-bold text-zinc-600">Kalyani Complex, Langar Toli Chauraha, Patna</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=25.6162456,85.15828599999999"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-wider shrink-0"
                >
                  Directions
                </a>
              </div>
            </div>

            {/* Storefront Photo Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <img decoding="async" loading="lazy" src="/assets/ctrlp-storefront-kalyani-complex-plaza-view.webp" alt="Kalyani Complex Plaza View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <img decoding="async" loading="lazy" src="/assets/ctrlp-office-design-workstations-pc-setup.webp" alt="Design PC Workstations" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
