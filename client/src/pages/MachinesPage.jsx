import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap, Gauge, Cpu, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEOHead from '../components/SEOHead';

export default function MachinesPage({ onOpenQuote }) {
  const machinesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Printing Machinery & Technology in Patna | Ctrl P",
      "description": "Tour our in-house commercial press equipment: Heidelberg offset press, Gethray 10.5ft eco-solvent flex printer, Konica Minolta bizhub digital press, and perfect book binding.",
      "url": "https://ctrlppatna.in/machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctrlppatna.in/" },
        { "@type": "ListItem", "position": 2, "name": "Machines", "item": "https://ctrlppatna.in/machines" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Printing Press Machinery & Production Technology in Patna | Ctrl P"
        description="Explore our in-house industrial printing press machinery: Heidelberg offset, Gethray 10.5ft flex printer, Konica Minolta digital press, and automated book binding in Patna."
        keywords="printing machine Patna, Heidelberg offset press Bihar, eco flex printer Gethray, digital printing machine Konica Minolta, book binding machine Patna"
        canonicalPath="/machines"
        schema={machinesSchema}
      />
      
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-100 bg-zinc-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold text-zinc-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E31B23]">Machines & Technology</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
            State-Of-The-Art Equipment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Professional Machines. <span className="text-[#E31B23]">Better Printing Results.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 font-medium">
            Explore the advanced machinery powering Ctrl P in Patna. We invest in high-precision technology so your business gets flawless colors and sharp typography every time.
          </p>
        </div>
      </section>

      {/* Machines In-Depth */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Machine 1: Gethray Eco Flex Machine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-zinc-100 border-2 border-zinc-200 shadow-xl aspect-[4/3]">
            <img
              src="/assets/machine-gethray-large-format-eco-solvent-printer.jpg"
              alt="Gethray Eco Flex Machine Ctrl P"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500">Wide Format Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Eco Flex Printing Machine (Gethray)
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Our flagship large-format workhorse prints up to 10.5 feet seamless width. Equipped with Japanese industrial micro-piezo printheads, it handles heavy Star Flex, backlit films, canvas, and self-adhesive vinyl with intense chromatic saturation.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-bold text-zinc-500 uppercase">Max Width</div>
                <div className="text-sm font-black text-black">Up to 10.5 Ft Seamless</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-bold text-zinc-500 uppercase">Ink Chemistry</div>
                <div className="text-sm font-black text-black">Eco-Solvent Weatherproof</div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 text-xs sm:text-sm font-bold text-zinc-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> 3-year outdoor fade resistance in Bihar climate</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Ideal for road hoardings, shop facades, exhibition backdrops</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> High speed 1,200 sq. ft. per hour production rate</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote('Large Format Printing')}
                className="px-6 py-3.5 rounded-xl bg-[#E31B23] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:bg-[#C7141B] transition-all"
              >
                Quote for Banner / Flex
              </button>
            </div>
          </div>
        </div>

        {/* Machine 2: Commercial Offset Press */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 lg:order-2 rounded-3xl overflow-hidden bg-zinc-100 border-2 border-zinc-200 shadow-xl aspect-[4/3]">
            <img
              src="/assets/machine-heidelberg-speedmaster-offset-press.jpg"
              alt="Offset Printing Machine Room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 lg:order-1 space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500">Commercial Press</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Industrial Offset Printing Press
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              High-quality multi-color printing tailored for bulk commercial demands. From competitive exam guides and annual corporate balance sheets to 50,000+ brochure distributions, offset technology delivers the lowest per-unit cost in the industry.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-bold text-zinc-500 uppercase">Speed</div>
                <div className="text-sm font-black text-black">10,000 Sheets / Hour</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-bold text-zinc-500 uppercase">Color Precision</div>
                <div className="text-sm font-black text-black">100% CMYK & Pantone</div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 text-xs sm:text-sm font-bold text-zinc-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Perfect registration with zero color misalignment</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Supports heavy cardstocks up to 400 GSM</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Automatic ink density control for consistent bulk output</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote('Offset Printing')}
                className="px-6 py-3.5 rounded-xl bg-black text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:bg-zinc-800 transition-all"
              >
                Inquire for Bulk Offset Run
              </button>
            </div>
          </div>
        </div>

        {/* Machine 3: Finishing & Laminating Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-zinc-100 border-2 border-zinc-200 shadow-xl aspect-[4/3]">
            <img
              src="/assets/machine-industrial-large-format-cold-laminator.jpg"
              alt="Large Format Laminator Machine"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500">Post-Press Finishing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Heavy Duty Thermal & Cold Laminators
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              A great print requires master-grade finishing. Our motorized continuous-roll laminators apply matte, high-gloss, velvet touch, and floor-graphics protective films with zero bubbles or wrinkles.
            </p>

            <ul className="space-y-2 pt-2 text-xs sm:text-sm font-bold text-zinc-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Velvet soft-touch film for luxury visiting cards</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Cold pressure-sensitive adhesive film for boards and vinyl</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E31B23]" /> Hydraulic paper guillotines for razor-sharp trimmed edges</li>
            </ul>
          </div>
        </div>

      </section>

      {/* Video Demonstrations from Assets */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">Video Tour</span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">Watch Our Machines in Action</h2>
            <p className="text-sm text-zinc-600 font-medium">Real live footage from our shop floor in Kalyani Complex, Patna.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-4 border border-zinc-200 shadow-md space-y-3">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/assets/video-gethray-large-format-flex-printing.mp4"
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-extrabold text-black">Gethray Large Format Printing Demonstration</h4>
                <p className="text-xs text-zinc-500 font-medium">High speed flex output with real-time drying system</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4 border border-zinc-200 shadow-md space-y-3">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/assets/video-continuous-high-speed-roll-printing.mp4"
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-extrabold text-black">Continuous High-Speed Roll Production</h4>
                <p className="text-xs text-zinc-500 font-medium">Color calibration and printhead pass demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />

    </div>
  );
}
