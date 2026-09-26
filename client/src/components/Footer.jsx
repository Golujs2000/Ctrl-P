import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Bar: Brand, Navigation, Social Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-100">
          
          {/* Brand Logo with GSTIN & MSME Badges */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
            <Logo size="large" />
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-zinc-50 border border-zinc-200 shadow-2xs text-[11px] font-bold text-zinc-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>GST: <span className="font-mono font-extrabold text-black">10AAIPQ8193J1ZD</span></span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-zinc-50 border border-zinc-200 shadow-2xs text-[11px] font-bold text-zinc-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>MSME: <span className="font-mono font-extrabold text-black">UDYAM-BR-26-0144129</span></span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-bold text-zinc-700">
            <Link to="/" className="hover:text-[#E31B23] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#E31B23] transition-colors">About</Link>
            <Link to="/services" className="hover:text-[#E31B23] transition-colors">Services</Link>
            <Link to="/machines" className="hover:text-[#E31B23] transition-colors">Machines</Link>
            <Link to="/our-work" className="hover:text-[#E31B23] transition-colors">Our Work</Link>
            <Link to="/contact" className="hover:text-[#E31B23] transition-colors">Contact</Link>
            <Link to="/nfc" className="hover:text-[#E31B23] transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]"></span>
              <span>NFC Card</span>
            </Link>
          </nav>

          {/* Top Quick Social Buttons */}
          <div className="flex items-center gap-2.5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919304085366"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/CtrlPpatna/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Dedicated Contact, Store Map & Connect Section */}
        <div className="py-8 border-b border-zinc-100 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left: Contact Info Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 1. Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Store Address</h4>
                <p className="text-xs font-bold text-zinc-900 leading-snug">
                  Shop No. 1 & 2, Ground Floor, Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar - 800004
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Ctrl+P,+Shop+No.+1+%26+2,+Kalyani+Complex,+Bari+Path,+Langar+Toli+Chauraha,+Patna,+Bihar+800004"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E31B23] hover:underline"
                >
                  <span>Open Directions in Google Maps →</span>
                </a>
              </div>
            </div>

            {/* 2. Mobile Numbers */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Mobile & Call</h4>
                <div className="flex flex-col gap-0.5 text-xs font-black text-zinc-900">
                  <a href="tel:9304085366" className="hover:text-[#E31B23] transition-colors">
                    +91 9304085366
                  </a>
                  <a href="tel:7544095366" className="hover:text-[#E31B23] transition-colors">
                    +91 7544095366
                  </a>
                </div>
                <p className="text-[11px] text-zinc-500 font-medium">Mon–Sat: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* 3. Official Business Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 border border-red-100 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Official Business Email</h4>
                <a
                  href="mailto:ctrlppatna@gmail.com"
                  className="text-xs font-black text-zinc-900 hover:text-[#E31B23] transition-colors break-all block"
                >
                  ctrlppatna@gmail.com
                </a>
                <p className="text-[11px] text-zinc-500 font-medium">Orders, quotes & corporate billing</p>
              </div>
            </div>

            {/* 4. Social & Instant Chat */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500">Connect & Social</h4>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919304085366"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/CtrlPpatna/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <p className="text-[11px] text-zinc-500 font-medium">WhatsApp chat & catalog available</p>
            </div>

          </div>

          {/* Right: Interactive Google Map of Ctrl P (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Store Location Map</span>
              </span>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ctrl+P,+Shop+No.+1+%26+2,+Kalyani+Complex,+Bari+Path,+Langar+Toli+Chauraha,+Patna,+Bihar+800004"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-[#E31B23] hover:underline"
              >
                Directions →
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 aspect-[16/9] sm:aspect-[16/10] bg-zinc-100 shadow-sm">
              <iframe
                title="Ctrl P Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.658985488402!2d85.15828599999999!3d25.6162456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5931a41f9a41%3A0x69618fc13b242190!2sCtrl%20P!5e0!3m2!1sen!2sin!4v1789612804891!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* Specialized Services Directory Grid */}
        <div className="py-8 border-b border-zinc-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-left text-xs">
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Healthcare</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/doctor-healthcare-printing" className="hover:text-[#E31B23]">Doctor Patient Files</Link></li>
              <li><Link to="/services/letterhead-letterpad-printing" className="hover:text-[#E31B23]">Prescription Letterpads</Link></li>
              <li><Link to="/services/id-card-printing" className="hover:text-[#E31B23]">Clinic Staff ID Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Publishing</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/book-printing-publishing" className="hover:text-[#E31B23]">Book Printing</Link></li>
              <li><Link to="/services/urdu-design-calligraphy-print" className="hover:text-[#E31B23]">Urdu Literature</Link></li>
              <li><Link to="/services/spiral-staple-binding" className="hover:text-[#E31B23]">Spiral & Glue Binding</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Outdoor & Banners</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/standee-rollup-display-printing" className="hover:text-[#E31B23]">Roll-Up Standees</Link></li>
              <li><Link to="/services/canopy-tent-promotional-outdoor" className="hover:text-[#E31B23]">Promotional Canopies</Link></li>
              <li><Link to="/services/promotional-umbrella-sunshade" className="hover:text-[#E31B23]">Sunshade Umbrellas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Packaging & Gifts</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/packaging-box-dieline-printing" className="hover:text-[#E31B23]">Mono Carton Boxes</Link></li>
              <li><Link to="/services/t-shirt-printing" className="hover:text-[#E31B23]">Custom T-Shirt Printing</Link></li>
              <li><Link to="/services/custom-mug-printing" className="hover:text-[#E31B23]">Mug & Gift Printing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Corporate</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/logo-design-services" className="hover:text-[#E31B23]">Logo & Brand Identity</Link></li>
              <li><Link to="/services/certificate-award-printing" className="hover:text-[#E31B23]">Awards & Certificates</Link></li>
              <li><Link to="/services/business-card-printing" className="hover:text-[#E31B23]">Prestige Business Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-black uppercase tracking-wider mb-2.5 text-[11px]">Global Reach</h4>
            <ul className="space-y-1.5 text-zinc-600 font-semibold">
              <li><Link to="/services/international-printing-orders" className="text-[#E31B23] font-black hover:underline">🌍 Worldwide Shipping</Link></li>
              <li><Link to="/machines" className="hover:text-[#E31B23]">In-House Press Tour</Link></li>
              <li><button onClick={() => onOpenQuote()} className="text-zinc-800 font-bold hover:text-[#E31B23] cursor-pointer">Instant Price Quote</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 text-center text-xs font-semibold text-zinc-500 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">CMYK In-House Press</span>
            <div className="flex items-center gap-1.5 text-[10px] font-black">
              <span className="inline-flex items-center gap-1 text-zinc-600"><span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-xs" />C</span>
              <span className="inline-flex items-center gap-1 text-zinc-600"><span className="w-2.5 h-2.5 rounded-full bg-[#EC008C] shadow-xs" />M</span>
              <span className="inline-flex items-center gap-1 text-zinc-600"><span className="w-2.5 h-2.5 rounded-full bg-[#FFED00] shadow-xs border border-zinc-200" />Y</span>
              <span className="inline-flex items-center gap-1 text-zinc-600"><span className="w-2.5 h-2.5 rounded-full bg-[#111111] shadow-xs" />K</span>
            </div>
          </div>
          <p>
            © {new Date().getFullYear()} Ctrl P. All rights reserved. | Printing • Advertising • Event | Patna, Bihar
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-bold border border-zinc-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>GSTIN: <span className="font-mono font-black text-black">10AAIPQ8193J1ZD</span></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-bold border border-zinc-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>MSME UDYAM: <span className="font-mono font-black text-black">UDYAM-BR-26-0144129</span></span>
            </div>
            <a
              href="mailto:ctrlppatna@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-bold border border-zinc-200 hover:text-[#E31B23] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#E31B23]" />
              <span>ctrlppatna@gmail.com</span>
            </a>
          </div>
          <p className="text-[11px] text-zinc-400">
            Shop No. 1 & 2, Ground Floor, Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna - 800004 • Direct Offset & Digital Press
          </p>
        </div>

      </div>

    </footer>
  );
}
