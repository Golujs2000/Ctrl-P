import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Doctor & Healthcare Printing (Files, Prescription Pads)',
  'Logo Design & Brand Identity',
  'International Order (Worldwide Shipping)',
  'Staple, Spiral & Wire-O Binding',
  'Book Printing & Publishing',
  'Urdu Design & Calligraphy Work',
  'Letter Pad & Letterhead Printing',
  'Roll-Up Standee & Display Banners',
  'Promotional Canopy Tents',
  'Promotional Sunshade Umbrellas',
  'Packaging Box Design & Dielines',
  'Certificate & Award Printing',
  'Business Card Printing',
  'Brochure & Prospectus Printing',
  'Flyer & Leaflet Printing',
  'Poster Printing',
  'Banner & Flex Printing',
  'Calendar Printing (Wall & Desk)',
  'PVC ID Card & Lanyard Printing',
  'Custom Ceramic Mug Printing',
  'T-Shirt & Apparel Heat Press',
  'High-Volume Offset Printing',
  'High-Speed Digital Printing',
  'Signage & Storefront Branding',
  'Event Printing Package'
];

export default function QuoteModal({ isOpen, onClose, initialService }) {
  const [service, setService] = useState(initialService || 'Doctor & Healthcare Printing (Files, Prescription Pads)');
  const [isInternational, setIsInternational] = useState(false);
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('500');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    try {
      const payload = {
        name,
        phone,
        service,
        quantity,
        isInternational,
        country: isInternational ? country : 'India',
        requirements: isInternational ? `[INTERNATIONAL ORDER - DESTINATION: ${country || 'Overseas'}] ${notes}` : notes
      };

      // Call Express API endpoint
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      
      const destText = isInternational ? `\n• Destination Country: ${country || 'Overseas'}` : '';
      const fallbackWaText = encodeURIComponent(
        `Hello Ctrl P! I need a quote for:\n• Service: ${service}\n• Quantity: ${quantity}${destText}\n• Name: ${name}\n• Phone: ${phone}\n• Notes: ${notes}`
      );
      const link = data?.whatsappUrl || `https://wa.me/919304085366?text=${fallbackWaText}`;
      
      setWhatsappLink(link);
      setSubmitted(true);
    } catch (err) {
      console.error('Quote submit error:', err);
      // Fallback directly to WhatsApp
      const destText = isInternational ? `\n• Destination Country: ${country || 'Overseas'}` : '';
      const fallbackWaText = encodeURIComponent(
        `Hello Ctrl P! I need a quote for:\n• Service: ${service}\n• Quantity: ${quantity}${destText}\n• Name: ${name}\n• Phone: ${phone}\n• Notes: ${notes}`
      );
      setWhatsappLink(`https://wa.me/919304085366?text=${fallbackWaText}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-100 p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1 mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-[#E31B23]">
                Instant Commercial Quote
              </span>
              <h3 className="text-2xl font-black text-black">
                Tell Us What You Need Printed
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Get factory-direct pricing with fast response from our team in Patna.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Select Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:bg-white transition-all"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* International Shipping Toggle */}
              <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌍</span>
                  <div>
                    <div className="text-xs font-extrabold text-black">International Order?</div>
                    <div className="text-[11px] text-zinc-500">Worldwide air freight via DHL / FedEx</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isInternational}
                    onChange={(e) => setIsInternational(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E31B23]"></div>
                </label>
              </div>

              {/* International Destination Field */}
              {isInternational && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Destination Country & City *
                  </label>
                  <input
                    type="text"
                    required={isInternational}
                    placeholder="e.g. United States (California), UAE (Dubai)"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-amber-50/50 border border-amber-300 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] transition-all"
                  />
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9304085366"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Quantity / Size Estimate
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 pcs or 10x4 ft banner"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:bg-white transition-all"
                />
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Specifications (Paper GSM, Lamination, Urgent Date)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Matte finish, need by tomorrow evening in Patna"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:bg-white transition-all"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#E31B23] hover:bg-[#C7141B] disabled:opacity-60 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Quote Now</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-zinc-400 font-medium">
                  Or call directly: <a href="tel:9304085366" className="text-black font-bold hover:underline">9304085366</a>
                </span>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success View */
          <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-black">Quote Request Received!</h3>
              <p className="text-sm font-medium text-zinc-600">
                Thank you, <strong className="text-black">{name}</strong>. Our team in Patna is reviewing your request for <strong className="text-[#E31B23]">{service}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Service:</span>
                <span className="font-extrabold text-black">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Quantity:</span>
                <span className="font-extrabold text-black">{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Phone:</span>
                <span className="font-extrabold text-black">{phone}</span>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-bold text-zinc-500 hover:text-black transition-colors"
              >
                Done / Close
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
