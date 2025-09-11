import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEOHead({
  title = "Javed Sidiqi - Builder, Innovator, Entrepreneur",
  description = "Personal portfolio and innovation lab of Javed Sidiqi. AI-powered solutions for small businesses, healthcare, and education.",
  keywords = "Javed Sidiqi, AI, entrepreneur, builder, innovation, portfolio, small business, healthcare, education",
  ogImage = "/og-image.jpg",
  url = "https://sidiqi.ai"
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

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Javed Sidiqi');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('og:url', url);
    setMetaProperty('og:type', 'website');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Additional meta tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('theme-color', '#2563eb');
  }, [title, description, keywords, ogImage, url]);

  return null;
}