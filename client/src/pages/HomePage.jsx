import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Machines from '../components/Machines';
import AboutWhy from '../components/AboutWhy';
import Portfolio from '../components/Portfolio';
import CtaBanner from '../components/CtaBanner';
import Location from '../components/Location';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
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
