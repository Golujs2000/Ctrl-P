import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import { Search, ArrowRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEOHead from '../components/SEOHead';

export default function ServicesPage({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Healthcare',
    'Design Studio',
    'Publishing',
    'Specialty Publishing',
    'Binding & Finishing',
    'Outdoor Advertising',
    'Packaging',
    'Stationery',
    'Marketing',
    'Signage',
    'Corporate',
    'Promotional Gifts',
    'Commercial Printing'
  ];

  const filtered = servicesList.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const servicesCatalogSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Commercial Printing Services in Patna | Ctrl P",
      "description": "Explore 24+ professional printing services including Doctor patient files, book publishing, Urdu calligraphy, packaging boxes, standees, and canopies in Patna.",
      "url": "https://ctrlppatna.in/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": servicesList.map((s, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": s.title,
        "url": `https://ctrlppatna.in/services/${s.slug}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctrlppatna.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ctrlppatna.in/services" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Commercial Printing Services in Patna | 24+ In-House Solutions - Ctrl P"
        description="Comprehensive commercial printing in Patna: Doctor patient files, prescription letterpads, book printing, Urdu design, standees, canopies, umbrellas, packaging boxes & worldwide delivery."
        keywords="printing services Patna, offset printing press Bihar, doctor file printing, book printing Patna, standee printing, canopy printing Patna, packaging boxes"
        canonicalPath="/services"
        schema={servicesCatalogSchema}
      />
      
      {/* Services Header */}
      <section className="bg-zinc-50 border-b border-zinc-200/80 py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
            Full Production Directory
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            All Printing & Branding <span className="text-[#E31B23]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 font-medium">
            From single-copy digital prints to industrial offset runs of 100,000+ units. Everything is produced in-house at our workshop in Patna.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search services (e.g. Visiting cards, Flex, Mug)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-zinc-300 shadow-sm text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#E31B23] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-[#E31B23]/50 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1"
            >
              {/* Image Preview - Full Height and Width uncropped */}
              <div className="relative h-48 sm:h-52 bg-zinc-50 overflow-hidden p-3 flex items-center justify-center">
                <img decoding="async" loading="lazy"
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.jpg';
                  }}
                />
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-[#FFED00] text-black text-[10px] font-black px-2.5 py-0.5 rounded-md shadow-xs border border-amber-300">
                    {service.badge}
                  </span>
                )}
                <span className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-sm text-[10px] font-bold text-white px-2 py-0.5 rounded-md">
                  {service.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-black text-black group-hover:text-[#E31B23] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium line-clamp-2 mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-zinc-600">{service.turnaround}</span>
                  <span className="text-[#E31B23] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-lg font-bold text-zinc-600">No services matched your query "{searchTerm}".</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-sm font-extrabold text-[#E31B23] hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />

    </div>
  );
}
