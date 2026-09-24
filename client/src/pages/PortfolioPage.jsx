import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, CheckCircle2, X } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEOHead from '../components/SEOHead';

const detailedWorks = [
  {
    id: 1,
    title: 'Tarapur Children Healthcare Doctor Patient File',
    category: 'Healthcare',
    client: 'Dr. Rakif Raza, Tarapur Children Healthcare',
    image: '/assets/mockup-doctor-patient-file-folder-tarapur-healthcare.jpg',
    specs: '350 GSM Laminated Cardstock, Dual Inside Medical Report Pockets, Clinic Creased Spine',
    description: 'Specialized heavy-duty medical case record file folder custom fabricated for pediatric clinics.'
  },
  {
    id: 2,
    title: 'SLC Partners & Associates Advocate Business Card',
    category: 'Business Cards',
    client: 'Basheer Advocate, Patna High Court, Fraser Road',
    image: '/assets/mockup-visiting-card-rupesh-kumar-advocate-high-court.jpg',
    specs: '350 GSM Royal Matte Board, Gold Metallic Foiling, Double-Sided High Density Print',
    description: 'Luxury advocate visiting cards designed and printed for prestigious legal chambers in Patna.'
  },
  {
    id: 3,
    title: 'Vedantu Patna Learning Centre Roll-Up Standee',
    category: 'Banners',
    client: 'Vedantu Learning Centre, Anand Prakash Sir',
    image: '/assets/mockup-rollup-standee-vedantu-patna.jpg',
    specs: '2.5 x 6 ft Non-Tearable Matte PET Film, Anodized Aluminum Mechanism with Transit Bag',
    description: 'High-visibility roll-up standee printed with vivid educational graphics for center reception.'
  },
  {
    id: 4,
    title: 'Mild Care Zizz Guard Packaging Box & Dieline',
    category: 'Packaging',
    client: 'Mild Care Natural Health Products',
    image: '/assets/mockup-packaging-box-zizz-guard-foot-pads.jpg',
    specs: '350 GSM ITC Food-Grade Duplex Board, Matte Thermal Lamination, Precision Die-Cut Folding',
    description: 'Full packaging solution including structural CAD dieline, 3D mockup, and offset mono-carton production.'
  },
  {
    id: 5,
    title: 'Full Production Book & Publication Printing',
    category: 'Booklets',
    client: 'Samaharnalay Darbhanga & Academic Publishers',
    image: '/assets/book-cover-darbhanga-disaster-management-2026.jpg',
    specs: 'A4 Multi-Page Book, 300 GSM Laminated Cover, Automated Hot-Melt Perfect Glue Binding',
    description: 'Official district administrative disaster management resource manual and high-volume literature printing.'
  },
  {
    id: 6,
    title: 'Idara Sharia Patna Aaina Fatawa Sharia Hardcover',
    category: 'Urdu Publishing',
    client: 'Idara Sharia Sultanganj, Patna',
    image: '/assets/mockup-urdu-book-fatawa-sharia-idara-sharia-patna.jpg',
    specs: 'Noori Nastaliq Typography, Hardbound Kappa Board with Embossed Gold Foil Spine',
    description: 'Master Islamic legal reference literature typeset in authentic Urdu Nastaliq and hardcover bound.'
  },
  {
    id: 7,
    title: 'PUCA Education Summit Certificate of Appreciation',
    category: 'Certificates',
    client: 'Punjab Unaided Colleges Association (Hotel Gargee Grand)',
    image: '/assets/certificate-of-appreciation-puca-bihar-summit.jpg',
    specs: '300 GSM Natural Parchment Paper, Metallic Mirror Gold Foil Stamping, Anti-Counterfeit Border',
    description: 'Prestige recognition certificates presented to distinguished educationists across Bihar.'
  },
  {
    id: 8,
    title: 'Firstcry Intellitots Round Sunshade Umbrella',
    category: 'Outdoor Displays',
    client: 'Firstcry Intellitots Preschool & Daycare',
    image: '/assets/promotional-sunshade-umbrella-firstcry-daycare.jpg',
    specs: '6 Ft Diameter, 8-Rib Powder Coated Steel Frame, Waterproof PU-Coated Oxford Canvas',
    description: 'Branded promotional garden sunshade umbrella with heavy water-fillable base for retail visibility.'
  },
  {
    id: 9,
    title: '1st Lady Begusarai Outdoor Promotional Umbrella',
    category: 'Outdoor Displays',
    client: '1st Lady Women Brand Store, Begusarai',
    image: '/assets/promotional-sunshade-umbrella-1st-lady-begusarai.jpg',
    specs: '7 Ft Diameter, Heavy-Duty Windproof Pole, Sublimation Weather-Resistant Colors',
    description: 'High-visibility retail outdoor promotional umbrella for retail storefront marketing.'
  },
  {
    id: 10,
    title: 'Jeevan Deep Public School Admission Prospectus',
    category: 'Brochures',
    client: 'Jeevan Deep Public School, Nawada',
    image: '/assets/school-admission-prospectus-jeevan-deep-nawada.jpg',
    specs: '250 GSM Silk Matte Cover, 130 GSM Inner Art Paper, Multi-Page Saddle Stitched',
    description: 'Comprehensive academic prospectus designed to showcase campus amenities and school curriculum.'
  },
  {
    id: 11,
    title: 'Nyaaya Legal Awareness April 2026 Wall Calendar',
    category: 'Calendars',
    client: 'Nyaaya Legal Initiative',
    image: '/assets/mockup-wall-calendar-nyaaya-legal-2026.jpg',
    specs: '15 x 20 inch, 170 GSM Gloss Art Paper, Tin Metal Rimming Top & Bottom with Wire Hanger',
    description: 'Legal rights educational calendar with full monthly date matrix and civic awareness guides.'
  },
  {
    id: 12,
    title: 'Uru Marketing Corporate Tri-Fold Brochure',
    category: 'Brochures',
    client: 'Uru Marketing Pvt. Ltd., Patna',
    image: '/assets/mockup-trifold-brochure-geospatial-analytics-aryabhatta.jpg',
    specs: '300 GSM Imported Art Card, Soft Silk Lamination, Vibrant Process CMYK Color',
    description: 'Tri-fold marketing collateral for commercial agency client outreach and product showcases.'
  },
  {
    id: 13,
    title: 'Ctrl P Main Storefront Exterior Elevation',
    category: 'Outdoor Displays',
    client: 'Ctrl P Kalyani Complex Storefront',
    image: '/assets/ctrlp-storefront-board-front-view.jpg',
    specs: 'Front Board View with Commercial Acrylic Display and Lighting',
    description: 'Official storefront front-view board fabrication at Kalyani Complex, Langar Toli Chauraha.'
  },
  {
    id: 14,
    title: 'ICL Fincorp Gold Loan Promotional Kiosk Booth',
    category: 'Outdoor Displays',
    client: 'ICL Fincorp Gold Loan, Patna',
    image: '/assets/mockup-promotional-kiosk-booth-icl-fincorp-gold-loan.jpg',
    specs: 'Commercial Grade Hexagonal Collapsible Frame, Waterproof 600D Oxford Fabric',
    description: 'Custom pop-up outdoor marketing promotional kiosk booth engineered for field activations and financial roadshows.'
  },
  {
    id: 15,
    title: 'Custom Ceramic Photographic Coffee Mug',
    category: 'Corporate Gifts',
    client: 'Promotional Drinkware & Corporate Gifts',
    image: '/assets/custom-printed-ceramic-mug-love-life.jpg',
    specs: 'Grade AAA 11oz Ceramic Mug, High-Definition Sublimation Heat Transfer',
    description: 'Custom printed ceramic coffee mug with heat-set permanent vibrant artwork.'
  },
  {
    id: 16,
    title: 'DTF T-Shirt Heat Press Production Engine',
    category: 'Corporate Gifts',
    client: 'Apparel Printing Department',
    image: '/assets/machine-dtf-tshirt-heat-press.jpg',
    specs: 'Direct-to-Film Industrial Pneumatic Heat Press, Stretch-Resistant Output',
    description: 'In-house high-pressure apparel sublimation and DTF transfer press in operation.'
  },
  {
    id: 17,
    title: 'Complete Commercial Printing Solutions Banner',
    category: 'Banners',
    client: 'Ctrl P Marketing Campaign',
    image: '/assets/ctrlp-marketing-banner-all-printing-solutions.jpg',
    specs: 'Large Format Commercial Flex Banner, High Chromatic Saturation',
    description: 'Outdoor marketing flex banner showcasing full-spectrum printing capabilities.'
  }
];

export default function PortfolioPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Healthcare', 'Business Cards', 'Banners', 'Packaging', 'Booklets', 'Urdu Publishing', 'Certificates', 'Outdoor Displays', 'Brochures', 'Calendars', 'Corporate Gifts'];

  const filtered = activeTab === 'All'
    ? detailedWorks
    : detailedWorks.filter((item) => item.category === activeTab);

  const portfolioSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Print Work Portfolio & Client Samples in Patna | Ctrl P",
      "description": "Real production samples printed in Kalyani Complex, Patna: Doctor patient files, packaging boxes, Vedantu standees, books, and certificates.",
      "url": "https://ctrlppatna.in/our-work"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctrlppatna.in/" },
        { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://ctrlppatna.in/our-work" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Print Work Portfolio & Client Samples in Patna | Ctrl P"
        description="Browse real client print work manufactured at our Patna press: Doctor patient files, Vedantu standees, Darbhanga book manuals, packaging boxes, and awards."
        keywords="print portfolio Patna, printing samples Bihar, real printing work Patna, doctor file sample, standee photo, packaging box sample"
        canonicalPath="/our-work"
        schema={portfolioSchema}
      />
      
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-100 bg-zinc-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold text-zinc-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E31B23]">Our Work</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200/80 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
            Client Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Our Work Speaks for <span className="text-[#E31B23]">Itself</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 font-medium">
            Explore hundreds of successful print jobs delivered across Patna and Bihar. Real photographs of actual production runs.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#E31B23]/40 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                <img decoding="async" loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.webp';
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider text-black px-3 py-1 rounded-md shadow-xs border border-zinc-200">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-lg">
                    <Eye className="w-4 h-4 text-[#E31B23]" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3 text-left">
                <div>
                  <h3 className="text-lg font-black text-black group-hover:text-[#E31B23] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E31B23] font-bold mt-1">
                    Client: {item.client}
                  </p>
                  <p className="text-xs text-zinc-600 font-medium mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-500 font-semibold">
                  <span className="font-bold text-black">Specs:</span> {item.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal with Responsive Bounds and Scroll */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 my-auto"
          >
            {/* Top Close Floating Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4">
              {/* Media Preview Box */}
              <div className="w-full max-h-64 sm:max-h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 flex items-center justify-center p-2">
                <img decoding="async" loading="lazy"
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-60 sm:max-h-76 w-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.webp';
                  }}
                />
              </div>

              {/* Case Details */}
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">
                    {selectedItem.category}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-xs font-bold text-zinc-500">Case Study</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-black leading-snug">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-zinc-800">
                  <span className="text-[#E31B23]">Client:</span> {selectedItem.client}
                </p>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 text-xs font-semibold text-zinc-700">
                  <span className="font-extrabold text-black">Technical Specs:</span> {selectedItem.specs}
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            {/* Modal Sticky Footer */}
            <div className="p-4 sm:p-5 border-t border-zinc-100 bg-zinc-50/80 flex items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const itm = selectedItem;
                  setSelectedItem(null);
                  onOpenQuote(itm.title);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Order Similar Job</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaBanner onOpenQuote={onOpenQuote} />

    </div>
  );
}
