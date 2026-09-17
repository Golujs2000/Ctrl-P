import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Machines from './components/Machines';
import AboutWhy from './components/AboutWhy';
import Portfolio from './components/Portfolio';
import CtaBanner from './components/CtaBanner';
import Location from './components/Location';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Business Card Printing');

  const handleOpenQuote = (serviceName) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section matching mockup */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Services Section (21 Cards + Custom Solutions banner) */}
        <Services 
          onOpenQuote={() => handleOpenQuote()} 
          onSelectService={(svc) => handleOpenQuote(svc)} 
        />

        {/* 3. Machines Section (Offset, Eco-Flex, Specs Card) */}
        <Machines onOpenQuote={() => handleOpenQuote('Offset Printing')} />

        {/* 4. About Ctrl P & Why Ctrl P (Side-by-Side) */}
        <AboutWhy onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Real Samples & Portfolio Gallery */}
        <Portfolio onOpenQuote={(svc) => handleOpenQuote(svc)} />

        {/* 6. Bold Yellow & Red Full-Width CTA Strip */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />

        {/* 7. Store Location & Interactive Patna Map */}
        <Location />
      </main>

      {/* Footer matching mockup */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quote Calculator / Lead Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />

      {/* Floating Quick WhatsApp Launcher */}
      <aside 
        aria-label="Contact via WhatsApp"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href="https://wa.me/919304085366?text=Hello%20Ctrl%20P!%20I%20have%20an%20urgent%20printing%20inquiry"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        >
          <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">WhatsApp Order</span>
        </a>
      </aside>

    </div>
  );
}
