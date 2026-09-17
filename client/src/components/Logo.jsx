import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Ctrl P Brand Logo Component
 * Incorporates the authentic brand emblem (rounded squircle badge) + Berlin Sans FB Bold wordmark
 * Supports 'light' (default) and 'dark' variants
 */
export default function Logo({ variant = 'light', size = 'default', showIcon = true }) {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className="flex items-center gap-3 group select-none">
      {/* Authentic Brand Emblem Squircle Badge */}
      {showIcon && (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 shadow-sm group-hover:shadow-md ${
          size === 'large' ? 'w-13 h-13' : 'w-10 h-10 sm:w-11 sm:h-11'
        } ${
          isDark 
            ? 'bg-zinc-900 border border-zinc-700' 
            : 'bg-white border border-zinc-200'
        }`}>
          <img
            src="/assets/brand-favicon.png"
            alt="Ctrl P Logo Emblem"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback SVG icon if image fails
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Official Typography Wordmark in Berlin Sans FB Bold */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline leading-none">
          <span 
            className={`font-['Berlin_Sans_FB',sans-serif] font-black tracking-tight transition-colors ${
              size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            } ${isDark ? 'text-white' : 'text-[#111111]'}`}
          >
            Ctrl
          </span>
          <span 
            className={`font-['Berlin_Sans_FB',sans-serif] font-black tracking-tight text-[#E31B23] ${
              size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            P
          </span>
          <span className="text-[10px] font-black text-zinc-400 ml-0.5 -translate-y-2">
            ®
          </span>
        </div>

        {/* Tagline */}
        <span 
          className={`text-[9px] sm:text-[10px] font-extrabold tracking-[0.16em] uppercase mt-1 transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          Printing • Advertising • Event
        </span>
      </div>
    </Link>
  );
}
