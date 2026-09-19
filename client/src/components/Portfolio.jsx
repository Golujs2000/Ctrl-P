import React, { useState } from 'react';
import { Eye, CheckCircle2, ArrowRight, X } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Tarapur Children Healthcare Patient File',
    category: 'Healthcare',
    client: 'Dr. Rakif Raza, Tarapur Children Healthcare',
    image: '/assets/mockup-doctor-patient-file-folder-tarapur-healthcare.png',
    tags: ['Patient Record Folder', 'Laminated Dual Pocket']
  },
  {
    id: 2,
    title: 'SLC Partners & Associates Advocate Card',
    category: 'Business Cards',
    client: 'Basheer Advocate, Patna High Court',
    image: '/assets/mockup-visiting-card-slc-partners-advocate-patna.png',
    tags: ['Prestige Cardstock', 'Gold Foil Embossed']
  },
  {
    id: 3,
    title: 'Vedantu Learning Centre Patna Roll-Up Standee',
    category: 'Banners',
    client: 'Vedantu Patna Learning Centre',
    image: '/assets/mockup-rollup-standee-vedantu-patna.png',
    tags: ['Non-Tearable PET', 'Aluminium Rollup Mechanism']
  },
  {
    id: 4,
    title: 'Mild Care Zizz Guard Packaging Box',
    category: 'Packaging',
    client: 'Mild Care Healthcare Products',
    image: '/assets/mockup-packaging-box-zizz-guard-foot-pads.png',
    tags: ['Mono Carton', 'Custom CAD Dieline']
  },
  {
    id: 5,
    title: 'Darbhanga Disaster Management 2026 Manual',
    category: 'Booklets',
    client: 'Samaharnalay Darbhanga, Govt. of Bihar',
    image: '/assets/book-cover-darbhanga-disaster-management-2026.jpg',
    tags: ['Perfect Glue Bound', 'Heidelberg Offset']
  },
  {
    id: 6,
    title: 'PUCA Higher Education Summit Certificate',
    category: 'Certificates',
    client: 'Punjab Unaided Colleges Association, Patna',
    image: '/assets/certificate-of-appreciation-puca-bihar-summit.jpg',
    tags: ['Gold Foil Seal', 'Parchment Textured Board']
  },
  {
    id: 7,
    title: 'Firstcry Intellitots Sunshade Umbrella',
    category: 'Outdoor',
    client: 'Firstcry Intellitots Preschool & Daycare',
    image: '/assets/promotional-sunshade-umbrella-firstcry-daycare.jpg',
    tags: ['Waterproof Fabric', 'Heavy Duty Base']
  },
  {
    id: 8,
    title: 'Jeevan Deep Public School Admission Prospectus',
    category: 'Brochures',
    client: 'Jeevan Deep Public School, Nawada',
    image: '/assets/school-admission-prospectus-jeevan-deep-nawada.jpg',
    tags: ['Multi-Page Saddle Stitched', 'Silk Matte Art Card']
  }
];

export default function Portfolio({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewItem, setPreviewItem] = useState(null);

  const categories = ['All', 'Healthcare', 'Business Cards', 'Banners', 'Packaging', 'Booklets', 'Certificates', 'Outdoor', 'Brochures'];

  const filtered = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="our-work" className="py-16 lg:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
              Real Samples & Production
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mt-1">
              Printed Right Here in <span className="text-[#E31B23]">Patna</span>
            </h2>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E31B23] hover:text-[#C7141B] transition-colors"
          >
            <span>Have a Similar Project? Get Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-[#E31B23]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-black text-xs font-bold shadow-lg">
                    <Eye className="w-4 h-4 text-[#E31B23]" />
                    <span>View Sample</span>
                  </span>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-black px-2.5 py-1 rounded-md shadow-xs border border-zinc-200">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="text-sm font-extrabold text-black group-hover:text-[#E31B23] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium line-clamp-1 mt-0.5">
                    Client: {item.client}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {/* Lightbox / Image Preview Modal */}
      {previewItem && (
        <div 
          onClick={() => setPreviewItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 my-auto"
          >
            {/* Top Close Floating Button */}
            <button
              onClick={() => setPreviewItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              <div className="w-full max-h-64 sm:max-h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 flex items-center justify-center p-2">
                <img
                  src={previewItem.image}
                  alt={previewItem.title}
                  className="max-h-60 sm:max-h-76 w-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.png';
                  }}
                />
              </div>

              <div className="space-y-1 text-left">
                <span className="text-xs font-black text-[#E31B23] uppercase tracking-wider">
                  {previewItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-black leading-snug">{previewItem.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium">Production by Ctrl P • {previewItem.client}</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 sm:p-5 border-t border-zinc-100 bg-zinc-50/80 flex items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const item = previewItem;
                  setPreviewItem(null);
                  onOpenQuote(item.category);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                Order Similar Job
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
