import { useEffect } from "react";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { WritingSection } from "./components/sections/WritingSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { SEOHead } from "./components/SEOHead";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { initializeAnalytics } from "./utils/analytics";
import { useSEOTracking } from "./hooks/usePerformance";

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Javed Sidiqi",
  "url": "https://www.sidiqi.ai",
  "image": "https://www.sidiqi.ai/javed-sidiqi.jpg",
  "sameAs": [
    "https://linkedin.com/in/javedsidiqi",
    "https://twitter.com/javedsidiqi",
    "https://youtube.com/@javedsidiqi"
  ],
  "jobTitle": "Builder, Innovator, Entrepreneur",
  "worksFor": {
    "@type": "Organization",
    "name": "Sidiqi.ai"
  },
  "description": "Builder, innovator, and entrepreneur specializing in AI-powered solutions for small businesses, healthcare, and education.",
  "knowsAbout": ["Artificial Intelligence", "Small Business Solutions", "Healthcare Technology", "Educational Technology", "React", "TypeScript", "Node.js"],
  "alumniOf": {
    "@type": "Organization",
    "name": "Various Technology Programs"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Developer & Entrepreneur",
    "occupationLocation": {
      "@type": "Place",
      "name": "Global"
    },
    "skills": ["JavaScript", "React", "TypeScript", "AI/ML", "Business Strategy"]
  }
};

export default function App() {
  // Initialize SEO and performance tracking
  useSEOTracking();

  useEffect(() => {
    // Initialize analytics and tracking
    initializeAnalytics();
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-gray-900">
        <SEOHead structuredData={structuredData} />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        <main id="main-content" role="main">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <WritingSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}