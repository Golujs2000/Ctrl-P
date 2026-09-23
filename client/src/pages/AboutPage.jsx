import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Award, MapPin, Phone, Users, Clock, Printer } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEOHead from '../components/SEOHead';

export default function AboutPage({ onOpenQuote }) {
  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Ctrl P | Commercial Printing & Design Studio in Patna",
      "description": "Learn about Ctrl P: Located in Kalyani Complex, Langar Toli Chauraha, Patna. Equipped with offset and digital presses serving over 2,500+ businesses across Bihar.",
      "url": "https://ctrlppatna.in/about"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctrlppatna.in/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://ctrlppatna.in/about" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="About Ctrl P | Leading Printing Press in Patna, Bihar"
        description="Discover Ctrl P in Kalyani Complex, Langar Toli, Patna. Our in-house Heidelberg offset and digital press facility delivers commercial printing, books, banners, and doctor stationery."
        keywords="about Ctrl P Patna, printing company Patna, printing shop Langar Toli, best printer in Bihar, Ctrl P Kalyani Complex"
        canonicalPath="/about"
        schema={aboutSchema}
      />
      
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-100 bg-zinc-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold text-zinc-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E31B23]">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
            About Ctrl P
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight max-w-3xl mx-auto">
            Your Trusted Printing Partner in <span className="text-[#E31B23]">Patna</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 font-medium">
            Ctrl P provides professional printing, advertising and event printing solutions for businesses, organizations and individuals in Patna.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-zinc-700">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-zinc-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
              <span>GSTIN: 10AAIPQ8193J1ZD</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-zinc-200 shadow-xs">
              <MapPin className="w-4 h-4 text-[#E31B23]" />
              <span>Langar Toli Chauraha, Patna</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-zinc-200 shadow-xs">
              <Clock className="w-4 h-4 text-[#E31B23]" />
              <span>Mon-Sat: 9 AM - 8 PM</span>
            </span>
          </div>
        </div>
      </section>

      {/* Story & Facility Tour */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-1">
                Print It. Brand It. Make It Stand Out.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Located in the commercial heart of Patna at <strong>Kalyani Complex, Bari Path (Langar Toli Chauraha)</strong>, Ctrl P is an integrated print studio and manufacturing unit.
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              From business cards and brochures to banners, wedding invitations, stickers and large-format printing, we help turn your ideas into high-quality printed materials.
            </p>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="text-xs font-black text-black uppercase tracking-wider">Our Core Principle:</div>
              <blockquote className="text-base font-extrabold text-[#E31B23] italic">
                “We are not only printer, we are printing partner of your business.”
              </blockquote>
              <p className="text-xs text-zinc-500 font-medium">
                We believe printing is more than putting ink on paper; it is how your brand communicates credibility and excellence to your clients.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-sm font-extrabold uppercase tracking-wider shadow-md transition-all"
              >
                Work With Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                <img decoding="async" loading="lazy" src="/assets/ctrlp-storefront-kalyani-complex-plaza-view.jpg" alt="Ctrl P Storefront Patna" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                <img decoding="async" loading="lazy" src="/assets/ctrlp-office-customer-consultation-desk-front.jpg" alt="Ctrl P Consultation Desk" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                <img decoding="async" loading="lazy" src="/assets/ctrlp-storefront-grand-opening-celebration.jpg" alt="Ctrl P Workshop Entrance" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                <img decoding="async" loading="lazy" src="/assets/machine-eco-solvent-flex-laminator-room.jpg" alt="Ctrl P Printing Equipment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">Quality Printing. Reliable Service. Local Expertise.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-black">Direct Factory Pricing</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Zero agent commissions. You work directly with the press in Patna for maximum value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-black">Commercial Machinery</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Industrial offset and Gethray eco-flex printers ensuring vibrant, razor-sharp results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-black">Same-Day Rush Orders</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Urgent exhibition, expo, or conference orders printed and delivered on-time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-black">In-House Design Team</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Expert graphic designers to check your artwork, layout, bleed, and color spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />

    </div>
  );
}
