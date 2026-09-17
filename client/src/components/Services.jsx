import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Check } from 'lucide-react';

const servicesData = [
  {
    id: 'business-card',
    title: 'Business Card Printing',
    image: '/assets/sample-business-card-intekhab-1.jpeg',
    category: 'Stationery',
    badge: 'Popular'
  },
  {
    id: 'brochure',
    title: 'Brochure Printing',
    image: '/assets/sample-brochure-aquacity-patna.jpeg',
    category: 'Marketing',
    badge: 'High Res'
  },
  {
    id: 'flyer',
    title: 'Flyer Printing',
    image: '/assets/sample-visiting-card-flyer-unique.jpg',
    category: 'Marketing',
  },
  {
    id: 'poster',
    title: 'Poster Printing',
    image: '/assets/creative-festival-cricket-diwali.jpeg',
    category: 'Marketing',
  },
  {
    id: 'banner',
    title: 'Banner Printing',
    image: '/assets/sample-standee-rahul-electric.jpg',
    category: 'Signage',
    badge: 'Eco-Flex'
  },
  {
    id: 'pamphlet',
    title: 'Pamphlet Printing',
    image: '/assets/creative-poster-2022-03-11.png',
    category: 'Marketing',
  },
  {
    id: 'wedding-card',
    title: 'Wedding Card Printing',
    image: '/assets/sample-invitation-card-birthday.jpg',
    category: 'Events',
    badge: 'Premium'
  },
  {
    id: 'invitation-card',
    title: 'Invitation Card Printing',
    image: '/assets/sample-invitation-card-birthday.jpg',
    category: 'Events',
  },
  {
    id: 'offset',
    title: 'Offset Printing',
    image: '/assets/machine-eco-flex-laminator-room.jpeg',
    category: 'Bulk Press',
    badge: 'Factory'
  },
  {
    id: 'digital',
    title: 'Digital Printing',
    image: '/assets/creative-poster-2022-03-08.png',
    category: 'Stationery',
    badge: 'Fast'
  },
  {
    id: 't-shirt',
    title: 'T-Shirt Printing',
    image: '/assets/portfolio-branded-carry-bag.jpeg',
    category: 'Apparel',
  },
  {
    id: 'custom-mug',
    title: 'Custom Mug Printing',
    image: '/assets/office-consultation-desk-1.jpeg',
    category: 'Gifting',
    badge: 'Gift'
  },
  {
    id: 'id-card',
    title: 'ID Card Printing',
    image: '/assets/sample-business-card-streax.jpg',
    category: 'Stationery',
  },
  {
    id: 'booklet',
    title: 'Booklet Printing',
    image: '/assets/sample-book-mission-amu-jmi.jpeg',
    category: 'Publishing',
    badge: 'Bulk'
  },
  {
    id: 'sticker',
    title: 'Sticker Printing',
    image: '/assets/brand-favicon.png',
    category: 'Marketing',
    badge: 'Die-Cut'
  },
  {
    id: 'calendar',
    title: 'Calendar Printing',
    image: '/assets/creative-festival-dhanteras.jpeg',
    category: 'Stationery',
  },
  {
    id: 'corporate-gift',
    title: 'Corporate Gift Printing',
    image: '/assets/portfolio-branded-carry-bag.jpeg',
    category: 'Gifting',
  },
  {
    id: 'large-format',
    title: 'Large Format Printing',
    image: '/assets/machine-gethray-eco-flex-large.jpeg',
    category: 'Signage',
    badge: 'Up to 10ft'
  },
  {
    id: 'flex',
    title: 'Flex Printing',
    image: '/assets/storefront-board-front-view.jpeg',
    category: 'Signage',
    badge: 'Star Flex'
  },
  {
    id: 'signage-branding',
    title: 'Signage & Branding',
    image: '/assets/brand-signage-gstin.jpeg',
    category: 'Signage',
  },
  {
    id: 'event',
    title: 'Event Printing',
    image: '/assets/storefront-entrance-celebration.jpeg',
    category: 'Events',
  }
];

export default function Services({ onOpenQuote, onSelectService }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Stationery', 'Marketing', 'Signage', 'Events', 'Gifting'];

  const filteredServices = filter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31B23]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mt-1">
              Everything You Need to <span className="text-[#E31B23]">Print & Promote</span> Your Business
            </h2>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E31B23] hover:text-[#C7141B] transition-colors group self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                filter === cat
                  ? 'bg-[#E31B23] text-white shadow-sm'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 21+ Services Grid matching design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-[#E31B23]/40 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group transform hover:-translate-y-1"
            >
              {/* Image Preview Thumbnail */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 mb-3 flex items-center justify-center p-2 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/brand-favicon.png';
                  }}
                />
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-extrabold text-[#E31B23] px-2 py-0.5 rounded-md shadow-xs border border-zinc-200">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Card Title */}
              <h3 className="text-sm sm:text-base font-extrabold text-black group-hover:text-[#E31B23] transition-colors leading-snug">
                {service.title}
              </h3>
              
              <span className="text-[11px] font-medium text-zinc-500 mt-1">
                Custom quotes available
              </span>
            </div>
          ))}

          {/* Custom Printing Solutions Banner Card matching mockup */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2 xl:col-span-2 bg-gradient-to-r from-[#FFF9E6] to-[#FFF1D0] rounded-2xl p-6 sm:p-7 border border-[#F5B014]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#D97706]">
                  Need Custom Specs?
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                Custom Printing Solutions
              </h3>
              <p className="text-sm font-semibold text-zinc-700">
                Have a unique requirement? We can print it!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white text-xs font-extrabold shadow-sm transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shrink-0 border border-amber-200 shadow-sm">
              <Lightbulb className="w-10 h-10 text-[#F5B014]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
