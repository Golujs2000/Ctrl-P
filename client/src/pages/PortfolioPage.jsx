import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, CheckCircle2, X } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

const detailedWorks = [
  {
    id: 1,
    title: 'Aqua City Patna Luxury Real Estate Brochure',
    category: 'Brochures',
    client: 'Saakaar Constructions, Veer Chand Patel Marg, Patna',
    image: '/assets/sample-brochure-aquacity-patna.jpeg',
    specs: '300 GSM Imported Art Card, Soft Velvet Lamination, Gold Foil Embossed Logo',
    description: 'A multi-panel premium brochure designed and printed for high-end residential apartments in Patna.'
  },
  {
    id: 2,
    title: 'Ctrl P Branded Non-Woven Carry Bags',
    category: 'Corporate Gifts',
    client: 'Official Ctrl P In-House Merchandise',
    image: '/assets/portfolio-branded-carry-bag.jpeg',
    specs: '100 GSM Eco-friendly Non-Woven fabric with precision screen printing and heat seal handles',
    description: 'Heavy duty promotional shopping bags produced for retail and corporate exhibition distribution.'
  },
  {
    id: 3,
    title: 'Mission AMU / JMI 12-Year Question Bank',
    category: 'Booklets',
    client: 'Education Adda Publication, Bihar',
    image: '/assets/sample-book-mission-amu-jmi.jpeg',
    specs: '320 Pages, 70 GSM Maplitho interior, 300 GSM UV Gloss Cover, Perfect Hot Glue Bound',
    description: 'High-speed bulk publication of entrance examination books distributed across Bihar.'
  },
  {
    id: 4,
    title: 'Streax Professional & Beardhood Executive Cards',
    category: 'Business Cards',
    client: 'Hygienic Research Institute Ltd.',
    image: '/assets/sample-business-card-streax.jpg',
    specs: '350 GSM Royal Matte Board, Gold Metallic Foiling, Double-Sided Sharp QR Codes',
    description: 'Luxury executive visiting cards for regional business leaders and sales teams.'
  },
  {
    id: 5,
    title: 'Vikram Vicky Confectionery Packaging Wrappers',
    category: 'Packaging',
    client: 'Vikram Food Products',
    image: '/assets/packaging-label-vikram-orange-candy.jpg',
    specs: 'Food-grade moisture-barrier roll film with micro-engraved rotogravure fidelity',
    description: 'Vibrant orange candy and confectionery packaging labels maintaining freshness and shelf appeal.'
  },
  {
    id: 6,
    title: 'Rahul Electric Roll-Up Display Standee',
    category: 'Banners',
    client: 'Rahul Electric, Jagdeo Path, Patna',
    image: '/assets/sample-standee-rahul-electric.jpg',
    specs: 'Star Flex, 6x3 ft, Tear-resistant, Heavy-gauge aluminium rollup cassette',
    description: 'High-visibility retail promotion standee for showroom display.'
  },
  {
    id: 7,
    title: 'Abhigyan High School Annual Magazine',
    category: 'Booklets',
    client: 'Dargahiganj High School, Araria, Bihar',
    image: '/assets/sample-booklet-school-abhigyan.jpeg',
    specs: '80 Pages, Full color photo pages, 130 GSM Gloss Art, Saddle-stitched center pin',
    description: 'Annual educational souvenir magazine featuring student achievements and faculty honors.'
  },
  {
    id: 8,
    title: 'Riconex Lifecare Corporate Profile & Document',
    category: 'Brochures',
    client: 'Riconex Lifecare Pvt. Ltd.',
    image: '/assets/sample-brochure-riconex-lifecare.jpeg',
    specs: 'A4 Bi-Fold, 250 GSM Matte Card, Spot UV on Certificate Accents',
    description: 'ISO-certified pharma and herbal product opportunity document for statewide distribution.'
  },
  {
    id: 9,
    title: 'Punjab National Bank (PNB) Branch Visiting Cards',
    category: 'Business Cards',
    client: 'Punjab National Bank, Ratni Branch',
    image: '/assets/sample-business-card-pnb-ratni.jpg',
    specs: 'Corporate Red and Yellow Pantone Match, 300 GSM Cardstock, Matte Lamination',
    description: 'Official corporate stationery adhering strictly to national banking brand guidelines.'
  },
  {
    id: 10,
    title: 'Happy Diwali & Festival Creative Campaigns',
    category: 'Social & Posters',
    client: 'Ctrl P Brand Studio Production',
    image: '/assets/creative-festival-cricket-diwali.jpeg',
    specs: 'Super A3 High Gloss Photographic Quality, Vector Art Precision',
    description: 'Artistic festive posters celebrating national occasions with striking visual depth.'
  }
];

export default function PortfolioPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Brochures', 'Business Cards', 'Booklets', 'Packaging', 'Banners', 'Corporate Gifts', 'Social & Posters'];

  const filtered = activeTab === 'All'
    ? detailedWorks
    : detailedWorks.filter((item) => item.category === activeTab);

  return (
    <div className="bg-white min-h-screen">
      
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.png';
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
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-60 sm:max-h-76 w-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.png';
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
