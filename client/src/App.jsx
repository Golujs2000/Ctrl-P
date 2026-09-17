import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MachinesPage from './pages/MachinesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-[#E31B23] selection:text-white">
        
        {/* Sticky Global Navbar */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Dynamic Multi-Page Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/machines" element={<MachinesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/our-work" element={<PortfolioPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage onOpenQuote={handleOpenQuote} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuote={() => handleOpenQuote()} />

        {/* Global Quote Calculator / Lead Modal */}
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
    </BrowserRouter>
  );
}
