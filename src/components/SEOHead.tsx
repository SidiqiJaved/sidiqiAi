import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  structuredData?: object;
  canonical?: string;
}

export function SEOHead({
  title = "Javed Sidiqi - Builder, Innovator, Entrepreneur | AI Solutions & Portfolio",
  description = "Personal portfolio and innovation lab of Javed Sidiqi. AI-powered solutions for small businesses, healthcare, and education. Builder, entrepreneur, and innovation specialist.",
  keywords = "Javed Sidiqi, AI, entrepreneur, builder, innovation, portfolio, small business, healthcare, education, React, TypeScript, franchise solutions",
  ogImage = "https://www.sidiqi.ai/og-image.jpg",
  url = "https://www.sidiqi.ai",
  canonical = "https://www.sidiqi.ai/",
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setMetaProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set canonical URL
    const setCanonicalLink = (href: string) => {
      let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Javed Sidiqi');
    setMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    
    // Canonical URL
    setCanonicalLink(canonical);

    // Open Graph tags
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('og:url', url);
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', 'Sidiqi.ai');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@javedsidiqi');
    setMetaTag('twitter:creator', '@javedsidiqi');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Additional SEO meta tags
    setMetaTag('theme-color', '#2563eb');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('format-detection', 'telephone=no');

    // Add structured data if provided
    if (structuredData) {
      let structuredDataElement = document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');
      if (!structuredDataElement) {
        structuredDataElement = document.createElement('script');
        structuredDataElement.setAttribute('type', 'application/ld+json');
        structuredDataElement.setAttribute('id', 'dynamic-structured-data');
        document.head.appendChild(structuredDataElement);
      }
      structuredDataElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, url, canonical, structuredData]);

  return null;
}