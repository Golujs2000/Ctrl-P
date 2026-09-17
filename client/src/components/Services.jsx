import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, ExternalLink } from 'lucide-react';
import { servicesList } from '../data/servicesData';

export default function Services({ onOpenQuote }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Stationery', 'Marketing', 'Signage', 'Events', 'Gifting'];

  const filteredServices = filter === 'All' 
    ? servicesList 
    : servicesList.filter(s => s.category === filter);

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

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E31B23] hover:text-[#C7141B] transition-colors group self-start md:self-auto"
          >
            <span>View All 21+ Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-sm hover:shadow-lg hover:border-[#E31B23]/50 transition-all duration-300 flex flex-col items-center text-center group transform hover:-translate-y-1 block"
            >
              {/* Image Preview Thumbnail */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 mb-3 flex items-center justify-center p-2 relative">
                <img
                  src={service.heroImage}
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
              
              <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#E31B23] group-hover:underline">
                <span>View Details & Specs</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
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
