import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Share2, 
  Download, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  QrCode, 
  RotateCw, 
  Globe, 
  Printer, 
  CreditCard, 
  ChevronRight, 
  Award, 
  Send,
  Navigation,
  X
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NfcCardPage({ onOpenQuote }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Visiting Cards');
  const [customMsg, setCustomMsg] = useState('');

  const cardData = {
    name: 'INTEKHAB',
    role: 'Founder & Commercial Print Director',
    company: 'Ctrl P',
    tagline: 'Printing • Advertising • Event',
    phone: '+91 9304085366',
    altPhone: '+91 7544095366',
    email: 'ctrlppatna@gmail.com',
    website: 'https://ctrlppatna.in',
    address: 'Shop No. 1 & 2, Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar - 800004',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ctrl+P,+Shop+No.+1+%26+2,+Kalyani+Complex,+Bari+Path,+Langar+Toli+Chauraha,+Patna,+Bihar+800004',
    gstin: '10AAIPQ8193J1ZD',
    msme: 'UDYAM-BR-26-0144129',
    hours: 'Monday – Saturday: 9:00 AM – 8:00 PM',
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ctrlppatna.in/nfc';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}&margin=10`;

  // Download .VCF Contact File for smartphone import
  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Intekhab;Ahmad;;;',
      'FN:Intekhab - Ctrl P',
      'ORG:Ctrl P - Printing, Advertising & Event',
      'TITLE:Founder & Commercial Print Director',
      'TEL;TYPE=CELL,VOICE:+919304085366',
      'TEL;TYPE=WORK,VOICE:+917544095366',
      'EMAIL;TYPE=WORK,INTERNET:ctrlppatna@gmail.com',
      'URL:https://ctrlppatna.in',
      'URL;TYPE=NFC_PROFILE:https://ctrlppatna.in/nfc',
      'ADR;TYPE=WORK:;;Shop No. 1 & 2, Kalyani Complex, Bari Path, Langar Toli Chauraha;Patna;Bihar;800004;India',
      'NOTE:Ctrl P Patna Printing Press. Specializing in Flex, Digital Press, Offset & Signboards. Contact: +91 9304085366',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Intekhab_CtrlP_Patna.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    triggerToast('Contact saved! Tap file to add to phonebook.');
  };

  // Trigger Toast Notification
  const triggerToast = (text) => {
    setCopied(text);
    setTimeout(() => setCopied(null), 3500);
  };

  // Copy to Clipboard
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    triggerToast(`${label} copied to clipboard!`);
  };

  // Share Card via Web Share API or Clipboard
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Intekhab | Ctrl P — Digital NFC Business Card',
          text: 'Connect with Intekhab (Ctrl P Printing Press, Patna). Flex, Digital & Offset printing specialists.',
          url: window.location.href,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          handleCopy(window.location.href, 'Profile link');
        }
      }
    } else {
      handleCopy(window.location.href, 'Profile link');
    }
  };

  // Quick WhatsApp preset messages
  const whatsappTopics = [
    { label: 'Visiting Cards', msg: 'Hi Intekhab, I need a quote for premium business / visiting cards.' },
    { label: 'Flex & Vinyl Printing', msg: 'Hi Intekhab, I have an urgent Flex / Star Flex / Vinyl printing inquiry.' },
    { label: 'Offset & Booklets', msg: 'Hi Intekhab, I need commercial offset printing for books / brochures.' },
    { label: 'Acrylic & 3D Signboards', msg: 'Hi Intekhab, I want to inquire about 3D acrylic LED glow signboards.' },
    { label: 'ID Cards & Lanyards', msg: 'Hi Intekhab, I need institutional ID cards & customized lanyards.' },
    { label: 'Custom Corporate RFQ', msg: 'Hi Intekhab, I have a corporate printing requirement and need an estimate.' },
  ];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const baseMsg = whatsappTopics.find((t) => t.label === selectedTopic)?.msg || 'Hello Intekhab, I tapped your Ctrl P NFC card.';
    const finalMsg = customMsg.trim() ? `${baseMsg} Note: ${customMsg}` : baseMsg;
    const url = `https://wa.me/919304085366?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  // Pixel waterfall layout replicating the exact staggered mosaic on Intekhab's card
  const mosaicGrid = [
    ['transparent', '#FCD34D', '#FB923C', 'transparent'],
    ['transparent', '#FCD34D', '#FB923C', 'transparent'],
    ['transparent', 'transparent', '#86EFAC', '#60A5FA'],
    ['transparent', 'transparent', '#86EFAC', 'transparent'],
    ['transparent', 'transparent', 'transparent', '#334155'],
    ['transparent', 'transparent', '#F97316', '#F97316'],
    ['#E2E8F0', 'transparent', '#38BDF8', '#FDE047'],
    ['#E2E8F0', 'transparent', 'transparent', 'transparent'],
    ['transparent', 'transparent', '#FDBA74', 'transparent'],
    ['transparent', '#1E293B', '#4ADE80', 'transparent'],
    ['transparent', '#1E293B', '#4ADE80', 'transparent'],
    ['transparent', 'transparent', '#93C5FD', '#FB923C'],
    ['transparent', 'transparent', '#93C5FD', '#FB923C'],
    ['transparent', '#FDBA74', 'transparent', 'transparent'],
    ['transparent', '#FDBA74', '#EA580C', 'transparent'],
    ['transparent', '#FCD34D', '#EA580C', '#86EFAC'],
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-zinc-900 selection:bg-[#E31B23] selection:text-white pb-20">
      <SEOHead
        title="Intekhab | Ctrl P NFC Smart Business Card — Patna"
        description="Official digital NFC business card of Intekhab at Ctrl P, Patna. Tap to save contact, chat on WhatsApp, get directions to Kalyani Complex, or order custom printing."
        keywords="Ctrl P NFC card, Intekhab Patna, digital visiting card Ctrl P, NFC business card Patna, commercial printing press Patna"
        canonicalPath="/nfc"
      />

      {/* Floating Toast Notification */}
      {copied && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-3 duration-200 border border-zinc-700">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{copied}</span>
        </div>
      )}

      {/* Ambient Light Accent Glow (Clean, bright, elegant) */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-red-50/70 via-amber-50/40 to-transparent pointer-events-none -z-10" />

      {/* Micro Top Bar / Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between text-xs text-zinc-500 font-semibold">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-800 shadow-2xs hover:text-[#E31B23] transition-all"
        >
          <Globe className="w-3.5 h-3.5 text-[#E31B23]" />
          <span>Visit Main Website</span>
          <ExternalLink className="w-3 h-3 text-zinc-400" />
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-600 font-bold uppercase tracking-wider text-[11px]">NFC Tap Active</span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 space-y-10">

        {/* HERO SECTION: The Interactive Digital Card in Light Background */}
        <section className="text-center space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs text-xs font-extrabold text-zinc-800">
              <Sparkles className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Official Smart NFC Digital Card</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight font-sans">
              Intekhab
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-lg mx-auto">
              Ctrl P • Printing • Advertising • Event • Patna
            </p>
          </div>

          {/* 3D Realistic Interactive Card Wrapper (Fully Fluid & Responsive on Mobile) */}
          <div className="max-w-xs sm:max-w-md md:max-w-lg mx-auto perspective-1000 py-2 sm:py-3">
            <div 
              className={`relative w-full min-h-[225px] sm:min-h-[260px] md:min-h-[280px] aspect-[1.55/1] sm:aspect-[1.72/1] rounded-2xl sm:rounded-3xl transition-transform duration-700 transform-style-3d cursor-pointer select-none group shadow-xl sm:shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(227,27,35,0.15)] ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
              aria-label="Click to flip NFC business card"
            >
              
              {/* ================= CARD FRONT ================= */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 p-4 sm:p-6 md:p-7 flex flex-col justify-between overflow-hidden backface-hidden shadow-card"
                style={{
                  backgroundImage: 'radial-gradient(#00000008 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              >
                {/* Subtle Holographic / Sheen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Official Ctrl P Logo + Tagline */}
                <div className="flex items-start justify-between z-10">
                  <div className="text-left space-y-0.5 sm:space-y-1">
                    <div className="flex items-baseline leading-none">
                      <span className="font-['Berlin_Sans_FB',sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-zinc-900">
                        Ctrl
                      </span>
                      <span className="font-['Berlin_Sans_FB',sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#E31B23]">
                        P
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 ml-0.5 -translate-y-1.5 sm:-translate-y-2">
                        ®
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-zinc-700 flex items-center gap-1 sm:gap-1.5 tracking-wide">
                      <span className="text-[#E31B23]">•</span>
                      <span>Printing</span>
                      <span className="text-[#E31B23]">•</span>
                      <span>Advertising</span>
                      <span className="text-[#E31B23]">•</span>
                      <span>Event</span>
                    </div>
                  </div>

                  {/* NFC Wave Chip Indicator */}
                  <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[9px] sm:text-[10px] font-extrabold text-zinc-600">
                    <CreditCard className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E31B23]" />
                    <span>NFC</span>
                  </div>
                </div>

                {/* Signature Pixel Waterfall Mosaic on Right Side (Matching uploaded card) */}
                <div className="absolute right-2 sm:right-4 md:right-6 top-2 bottom-2 sm:top-3 sm:bottom-3 w-10 sm:w-14 md:w-16 flex flex-col justify-center pointer-events-none">
                  <div className="grid grid-cols-4 gap-[1.5px] sm:gap-1">
                    {mosaicGrid.flat().map((color, idx) => (
                      <div
                        key={idx}
                        className={`aspect-square rounded-[1.5px] sm:rounded-xs transition-transform duration-300 group-hover:scale-105 ${
                          color === 'transparent' ? 'invisible' : 'visible shadow-2xs'
                        }`}
                        style={{
                          backgroundColor: color !== 'transparent' ? color : undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Left Contact & Personal Information */}
                <div className="text-left space-y-1 sm:space-y-1.5 z-10 max-w-[74%] sm:max-w-[70%]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm sm:text-base md:text-lg font-black text-black tracking-wider">
                      {cardData.name}
                    </span>
                  </div>
                  <div className="space-y-0.5 text-[11px] sm:text-xs md:text-sm font-bold text-zinc-700">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E31B23] shrink-0" />
                      <span className="font-mono text-[11px] sm:text-xs md:text-sm">{cardData.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500 shrink-0" />
                      <span className="truncate text-[10px] sm:text-xs">{cardData.email}</span>
                    </div>
                  </div>
                </div>

                {/* Micro Flip Prompt */}
                <div className="absolute bottom-1.5 sm:bottom-2 right-2.5 sm:right-4 text-[8px] sm:text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest flex items-center gap-1 z-10">
                  <span>Tap to flip</span>
                  <RotateCw className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                </div>
              </div>

              {/* ================= CARD BACK ================= */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 p-4 sm:p-6 md:p-7 flex flex-col justify-between items-center text-center rotate-y-180 backface-hidden shadow-card"
                style={{
                  backgroundImage: 'radial-gradient(#00000008 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              >
                {/* Back Top Tagline */}
                <div className="flex items-center justify-between w-full border-b border-zinc-100 pb-1.5 sm:pb-2">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-black text-black">
                    <span className="text-[#E31B23]">Ctrl P</span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-600">Smart Connect</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    MSME Verified
                  </span>
                </div>

                {/* Center QR Code */}
                <div className="flex flex-col items-center justify-center my-auto py-0.5 sm:py-1">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white p-1 sm:p-1.5 rounded-xl border-2 border-zinc-900 shadow-md">
                    <img 
                      src={qrCodeUrl} 
                      alt="Ctrl P Profile QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-zinc-600 uppercase tracking-wider mt-1 sm:mt-1.5">
                    Scan or Tap to Connect
                  </span>
                </div>

                {/* Back Bottom Address */}
                <div className="w-full pt-1.5 sm:pt-2 border-t border-zinc-100 text-[9px] sm:text-[11px] md:text-xs text-zinc-600 font-semibold space-y-0.5">
                  <p className="font-bold text-black truncate text-[10px] sm:text-xs">Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna</p>
                  <p className="text-zinc-500 font-mono text-[9px] sm:text-[10px]">GST: {cardData.gstin}</p>
                </div>

                {/* Micro Flip Prompt */}
                <div className="absolute bottom-1.5 sm:bottom-2 right-2.5 sm:right-4 text-[8px] sm:text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <span>Flip front</span>
                  <RotateCw className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Card Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-[11px] sm:text-xs font-bold text-zinc-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Flip Card ({isFlipped ? 'Front' : 'Back'})</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-[11px] sm:text-xs font-bold text-zinc-700 shadow-2xs transition-all active:scale-95 cursor-pointer hover:text-[#E31B23]"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Visit Site</span>
            </Link>

            <button
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-[11px] sm:text-xs font-bold text-zinc-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-zinc-900" />
              <span>QR Code</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-[11px] sm:text-xs font-bold text-zinc-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Share</span>
            </button>
          </div>
        </section>

        {/* PRIMARY CTA: SAVE CONTACT (vCard Import) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-xl space-y-5 text-center">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 tracking-tight">
              Save Contact to Your Smartphone
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              One tap adds Intekhab (Ctrl P) directly into your iOS Contacts or Android Phonebook.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={handleDownloadVCard}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#E31B23] hover:bg-[#C7141B] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Save Contact (.vcf)</span>
            </button>

            <a
              href={`tel:${cardData.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Intekhab</span>
            </a>

            <a
              href={`https://wa.me/919304085366?text=Hello%20Intekhab,%20I%20tapped%20your%20Ctrl%20P%20NFC%20Card%20and%20want%20to%20connect!`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-zinc-50 text-zinc-900 font-extrabold text-xs sm:text-sm border border-zinc-200 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Visit Site</span>
            </Link>
          </div>
        </section>

        {/* QUICK ACTION TILES GRID */}
        <section className="space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 text-left px-1">
            Quick Connect & Navigation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            
            {/* Phone */}
            <a
              href={`tel:${cardData.phone}`}
              className="bg-white p-4 rounded-2xl border border-zinc-200 hover:border-red-200 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 fill-[#E31B23]" />
              </div>
              <div>
                <span className="text-xs font-black text-black block">Call Primary</span>
                <span className="text-[11px] font-mono text-zinc-500 font-bold">9304085366</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919304085366?text=Hello%20Intekhab!`}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-2xl border border-zinc-200 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              </div>
              <div>
                <span className="text-xs font-black text-black block">WhatsApp</span>
                <span className="text-[11px] text-emerald-600 font-bold">Instant Reply</span>
              </div>
            </a>

            {/* Visit Website */}
            <Link
              to="/"
              className="bg-white p-4 rounded-2xl border border-zinc-200 hover:border-blue-200 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-black text-black block">Visit Website</span>
                <span className="text-[11px] text-zinc-500 font-bold">Explore Ctrl P</span>
              </div>
            </Link>

            {/* Google Maps Turn-by-Turn Navigation */}
            <a
              href={cardData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-2xl border border-zinc-200 hover:border-amber-200 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-black text-black block">Get Directions</span>
                <span className="text-[11px] text-zinc-500 font-bold">Kalyani Complex</span>
              </div>
            </a>

            {/* Official Email */}
            <a
              href={`mailto:${cardData.email}`}
              className="bg-white p-4 rounded-2xl border border-zinc-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group col-span-2 sm:col-span-1"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-black text-black block">Official Email</span>
                <span className="text-[11px] text-zinc-500 font-bold truncate max-w-[120px] block">ctrlppatna</span>
              </div>
            </a>

          </div>
        </section>

        {/* INSTANT WHATSAPP INQUIRY GENERATOR */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm space-y-5 text-left">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#E31B23]">
              Send Direct Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 tracking-tight">
              Select Your Requirement for Instant WhatsApp Quote
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              Choose your printing category below to chat with Intekhab on WhatsApp with pre-formatted specs.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            {whatsappTopics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                onClick={() => setSelectedTopic(topic.label)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedTopic === topic.label
                    ? 'bg-[#E31B23] text-white shadow-xs'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Custom Note input & Send button */}
          <form onSubmit={handleSendWhatsApp} className="space-y-3 pt-2">
            <div className="relative">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Optional: Quantity, size, or delivery urgency (e.g. 1000 cards by tomorrow)"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Start WhatsApp Conversation with Intekhab</span>
            </button>
          </form>
        </section>

        {/* BUSINESS PROFILE & VERIFICATIONS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm space-y-6 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-['Berlin_Sans_FB',sans-serif] text-2xl font-black shrink-0 shadow-md">
                Ctrl<span className="text-[#E31B23]">P</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-zinc-900">
                  Ctrl P — Design & Commercial Print Studio
                </h3>
                <p className="text-xs text-zinc-500 font-semibold">
                  Kalyani Complex, Langar Toli Chauraha, Patna • Est. Commercial Production
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Govt MSME Verified
              </span>
            </div>
          </div>

          {/* Details Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
            
            {/* Store Address */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-[10px] font-black uppercase text-zinc-400 block tracking-wider">
                Store Location
              </span>
              <p className="font-bold text-zinc-900 leading-relaxed">
                Shop No. 1 & 2, Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar - 800004
              </p>
              <button
                type="button"
                onClick={() => handleCopy(cardData.address, 'Store address')}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E31B23] hover:underline pt-1"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Full Address</span>
              </button>
            </div>

            {/* Working Hours */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-[10px] font-black uppercase text-zinc-400 block tracking-wider">
                Operating Hours
              </span>
              <p className="font-bold text-zinc-900">
                Monday to Saturday: 9:00 AM – 8:00 PM
              </p>
              <p className="text-zinc-500 text-[11px]">
                Sunday: By prior appointment for event & election urgencies
              </p>
            </div>

            {/* GSTIN */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                  GST Registration
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(cardData.gstin, 'GSTIN')}
                  className="text-[11px] font-bold text-[#E31B23] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <p className="font-mono font-black text-sm text-black">{cardData.gstin}</p>
              <p className="text-[10px] text-zinc-500">Official GST invoice issued for all corporate & B2B orders</p>
            </div>

            {/* MSME Udyam */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                  MSME Udyam ID
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(cardData.msme, 'MSME Number')}
                  className="text-[11px] font-bold text-[#E31B23] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <p className="font-mono font-black text-sm text-black">{cardData.msme}</p>
              <p className="text-[10px] text-zinc-500">Ministry of Micro, Small & Medium Enterprises, Govt. of India</p>
            </div>

          </div>
        </section>

        {/* CORE PRINT SERVICES CATALOG WITH DIRECT QUOTE */}
        <section className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23] block">
                What We Print
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 tracking-tight">
                Commercial Printing Services in Patna
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-extrabold text-[#E31B23] hover:underline hidden sm:inline-flex items-center gap-1"
            >
              <span>Explore All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Service 1: Visiting Cards */}
            <div className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-black">Business & Visiting Cards</h4>
                <p className="text-xs text-zinc-600 font-medium">
                  Matte laminated, Velvet soft-touch, Gold foil embossing, UV spot finish & luxury visiting cards.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenQuote && onOpenQuote('Business Card Printing')}
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-[#E31B23] hover:text-white text-xs font-bold text-zinc-800 transition-colors"
              >
                Inquire Rates
              </button>
            </div>

            {/* Service 2: Flex & Outdoor Banners */}
            <div className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Printer className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-black">Flex, Star Flex & Vinyl</h4>
                <p className="text-xs text-zinc-600 font-medium">
                  Large format hoardings, roll-up standees, backlit flex, one-way vision & vinyl stickers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenQuote && onOpenQuote('Flex & Banner Printing')}
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-[#E31B23] hover:text-white text-xs font-bold text-zinc-800 transition-colors"
              >
                Inquire Rates
              </button>
            </div>

            {/* Service 3: Offset Books & Catalogues */}
            <div className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-black">Offset Catalogues & Books</h4>
                <p className="text-xs text-zinc-600 font-medium">
                  Heidelberg speedmaster production for school diaries, institutional brochures, magazines & bill books.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenQuote && onOpenQuote('Offset Printing')}
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-[#E31B23] hover:text-white text-xs font-bold text-zinc-800 transition-colors"
              >
                Inquire Rates
              </button>
            </div>

          </div>
        </section>

        {/* OFFICIAL GOOGLE MAPS STORE LOCATION OF CTRL P */}
        <section className="bg-white rounded-3xl p-5 sm:p-7 border border-zinc-200/90 shadow-sm space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">
                Store Location & Navigation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 tracking-tight">
                Visit Ctrl P in Langar Toli, Patna
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Shop No. 1 & 2, Ground Floor, Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar - 800004
              </p>
            </div>
            <a
              href={cardData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold shadow-md transition-all self-start sm:self-auto shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 aspect-[16/9] sm:aspect-[21/9] min-h-[280px] bg-zinc-100 shadow-inner">
            <iframe
              title="Ctrl P Store Location Map"
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
        </section>

      </main>

      {/* ================= MODAL: FULL RESOLUTION QR CODE ================= */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 text-zinc-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-black">Scan to Connect</h3>
              <p className="text-xs text-zinc-500 font-semibold">
                Point any smartphone camera at this QR code to open Intekhab's profile.
              </p>
            </div>

            <div className="w-56 h-56 mx-auto bg-white p-3 rounded-2xl border-2 border-zinc-900 shadow-md">
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={handleShare}
                className="w-full py-3 rounded-xl bg-[#E31B23] text-white text-xs font-black uppercase tracking-wider shadow-md hover:bg-[#C7141B] transition-colors"
              >
                Share Profile Link
              </button>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="w-full py-2.5 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
