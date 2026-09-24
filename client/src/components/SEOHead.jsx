import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = 'https://ctrlppatna.in/assets/ctrlp-hero-brand-background-banner.jpg',
  ogType = 'website',
  schema
}) {
  const location = useLocation();
  const baseUrl = 'https://ctrlppatna.in';
  const fullUrl = `${baseUrl}${canonicalPath || location.pathname}`;

  useEffect(() => {
    // 1. Title Tag
    if (title) {
      document.title = title.includes('Ctrl P') ? title : `${title} | Ctrl P Patna`;
    }

    // Helper to set or update meta tag
    const setMeta = (selector, attribute, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrVal.replace(/['"]/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    // 2. Meta Description & Keywords
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    if (keywords) {
      setMeta('meta[name="keywords"]', 'content', keywords);
    }

    // 3. Open Graph & Twitter Cards
    const activeTitle = title ? (title.includes('Ctrl P') ? title : `${title} | Ctrl P Patna`) : document.title;
    setMeta('meta[property="og:title"]', 'content', activeTitle);
    setMeta('meta[name="twitter:title"]', 'content', activeTitle);
    setMeta('meta[property="og:url"]', 'content', fullUrl);
    setMeta('meta[name="twitter:url"]', 'content', fullUrl);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[property="og:image"]', 'content', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`);
    setMeta('meta[name="twitter:image"]', 'content', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`);

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 5. Dynamic JSON-LD Structured Data Schema
    const scriptId = 'dynamic-page-schema';
    let scriptEl = document.getElementById(scriptId);

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Cleanup custom dynamic schema when unmounting page
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, keywords, fullUrl, ogImage, ogType, schema]);

  return null;
}
