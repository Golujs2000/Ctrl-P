import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Machines from '../components/Machines';
import AboutWhy from '../components/AboutWhy';
import Portfolio from '../components/Portfolio';
import CtaBanner from '../components/CtaBanner';
import Location from '../components/Location';
import SEOHead from '../components/SEOHead';

export default function HomePage({ onOpenQuote }) {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ctrl P — Printing • Advertising • Event",
      "url": "https://ctrlppatna.in/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ctrlppatna.in/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ctrl P — A Design & Print Shop",
      "image": "https://ctrlppatna.in/assets/ctrlp-official-brand-logo.webp",
      "telephone": "+919304085366",
      "email": "ctrlppatna@gmail.com",
      "priceRange": "₹₹",
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
      "hasMap": "https://maps.google.com/?q=25.6162456,85.158286",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "21:00"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Ctrl P — Printing • Advertising • Event | Best Printing Press in Patna"
        description="Patna's premier commercial printing press in Kalyani Complex, Langar Toli. Doctor patient files, book publishing, Urdu literature, packaging boxes, standees, canopies, umbrellas & worldwide shipping."
        keywords="Ctrl P Patna, printing press Patna, offset printing press Bihar, doctor patient file printing, book printing Patna, eco flex banner Patna, packaging boxes Patna"
        canonicalPath="/"
        schema={homeSchema}
      />
      <Hero onOpenQuote={() => onOpenQuote()} />
      <Services 
        onOpenQuote={() => onOpenQuote()} 
        onSelectService={(svc) => onOpenQuote(svc)} 
      />
      <Machines onOpenQuote={() => onOpenQuote('Offset Printing')} />
      <AboutWhy onOpenQuote={() => onOpenQuote()} />
      <Portfolio onOpenQuote={(svc) => onOpenQuote(svc)} />
      <CtaBanner onOpenQuote={() => onOpenQuote()} />
      <Location />
    </>
  );
}
