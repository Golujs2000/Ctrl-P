import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, servicesList } from '../data/servicesData';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, Phone, Clock, Layers, Maximize2, IndianRupee, HelpCircle, ShieldCheck } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEOHead from '../components/SEOHead';

export default function ServiceDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 space-y-4">
        <h1 className="text-4xl font-black text-black">Service Not Found</h1>
        <p className="text-zinc-600">The service you are looking for does not exist or has moved.</p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E31B23] text-white font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  // Find related services in same or nearby category
  const relatedServices = servicesList
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Ctrl P! I am interested in *${service.title}*.\nPlease share pricing and turnaround details.`
  );
  const whatsappUrl = `https://wa.me/919304085366?text=${whatsappMessage}`;

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.title} in Patna`,
      "serviceType": service.title,
      "category": service.category,
      "description": service.overview,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ctrl P — A Design & Print Shop",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kalyani Complex, Langar Toli Chauraha",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800004",
          "addressCountry": "IN"
        },
        "telephone": "+919304085366"
      },
      "areaServed": [
        { "@type": "City", "name": "Patna" },
        { "@type": "State", "name": "Bihar" },
        { "@type": "Country", "name": "India" }
      ],
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "INR",
          "description": service.pricing
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ctrlppatna.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://ctrlppatna.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": `https://ctrlppatna.in/services/${service.slug}`
        }
      ]
    },
    ...(service.faqs && service.faqs.length > 0 ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }] : [])
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${service.title} in Patna | Best Rates & Turnaround - Ctrl P`}
        description={`${service.shortDesc} In-house offset & digital printing at Kalyani Complex, Langar Toli, Patna. ${service.pricing}. Fast delivery across Bihar.`}
        keywords={`${service.title} Patna, ${service.title} printing Bihar, ${service.category} printing Patna, printing shop Langar Toli`}
        canonicalPath={`/services/${service.slug}`}
        ogImage={service.heroImage}
        schema={serviceSchema}
      />
      
      {/* Breadcrumbs Navigation */}
      <div className="border-b border-zinc-100 bg-zinc-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold text-zinc-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#E31B23]">{service.title}</span>
        </div>
      </div>

      {/* Main Service Hero */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative min-h-[300px] sm:min-h-[420px] aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-50/80 border-2 border-zinc-200/80 shadow-lg p-3 sm:p-5 flex items-center justify-center">
              <img decoding="async" loading="lazy"
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full max-h-[460px] object-contain rounded-2xl"
                onError={(e) => {
                  e.target.src = '/assets/brand-favicon.jpg';
                }}
              />
              <span className="absolute top-5 left-5 bg-black/85 backdrop-blur-sm text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {service.category}
              </span>
              {service.badge && (
                <span className="absolute top-5 right-5 bg-[#FFED00] text-black text-[11px] font-black px-3.5 py-1 rounded-full shadow-sm border border-amber-300">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Service Description & Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">
                Professional Printing in Patna
              </span>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-black tracking-tight mt-1">
                {service.title}
              </h1>
            </div>

            <p className="text-base text-zinc-700 leading-relaxed font-normal">
              {service.overview}
            </p>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E31B23]" />
                  <span>Turnaround Time</span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-black">
                  {service.turnaround}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]/70 border-2 border-[#F5B014]/60 shadow-xs">
                <div className="flex items-center gap-2 text-amber-900 text-xs font-bold mb-1">
                  <div className="w-5 h-5 rounded-full bg-[#FFED00] text-black border border-amber-300 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-3 h-3" />
                  </div>
                  <span className="uppercase tracking-wider text-[10px] font-black text-amber-900">Estimated Pricing</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-zinc-950">
                  {service.pricing}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-100">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white font-extrabold text-sm shadow-md transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-zinc-500 font-medium">
              Need sample inspection? Visit our studio at <strong>Kalyani Complex, Langar Toli Chauraha, Patna</strong> or call <a href="tel:9304085366" className="text-black font-bold hover:underline">9304085366</a>.
            </div>

          </div>

        </div>
      </section>

      {/* Specifications & Materials Deep-Dive */}
      <section className="py-14 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Materials & Finishes */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-black">Available Paper & Materials</h3>
              </div>

              <ul className="space-y-2.5 pt-2">
                {service.materials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Sizes & Dimensions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-black">Sizes & Dimensions</h3>
              </div>

              <ul className="space-y-2.5 pt-2">
                {service.sizes.map((sz, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                    <span>{sz}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Real Customer Production Samples */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">Real Production</span>
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                Samples Printed by Ctrl P
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {service.gallery.map((imgSrc, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow group flex items-center justify-center p-2">
                  <img decoding="async" loading="lazy"
                    src={imgSrc}
                    alt={`${service.title} sample ${i + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/assets/brand-favicon.jpg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-14 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">Got Questions?</span>
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4 pt-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h4 className="text-base font-extrabold text-black flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm font-medium text-zinc-600 pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Links */}
      <section className="py-14 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-black">Related Printing Services</h3>
            <Link to="/services" className="text-xs font-extrabold text-[#E31B23] hover:underline flex items-center gap-1">
              <span>View All 21 Services</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs hover:border-[#E31B23] hover:shadow-md transition-all group"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 mb-2">
                  <img decoding="async" loading="lazy" src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-xs font-black text-black group-hover:text-[#E31B23] transition-colors line-clamp-1">
                  {rel.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />

    </div>
  );
}
