export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 bg-gray-50"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
          <div 
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
            role="img"
            aria-label="Javed Sidiqi logo"
          >
            <span className="text-white font-bold text-sm">JS</span>
          </div>
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            Javed Sidiqi
          </span>
        </div>
        
        <address className="not-italic">
          <p className="text-gray-600 text-sm sm:text-base">
            Builder, Innovator, Entrepreneur
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Specializing in AI-powered solutions for small businesses, healthcare, and education
          </p>
        </address>
        
        <nav className="mt-6 mb-4" aria-label="Footer navigation">
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <a 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="About section"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Projects section"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#writing" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Writing section"
              >
                Writing
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Contact section"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {currentYear} Javed Sidiqi. All rights reserved. 
            <span className="mx-2">|</span>
            <a 
              href="/privacy" 
              className="hover:text-blue-600 transition-colors duration-200"
              aria-label="Privacy policy"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a 
              href="/sitemap.xml" 
              className="hover:text-blue-600 transition-colors duration-200"
              aria-label="Sitemap"
            >
              Sitemap
            </a>
          </p>
        </div>

        {/* Organization structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sidiqi.ai",
            "url": "https://www.sidiqi.ai",
            "founder": {
              "@type": "Person",
              "name": "Javed Sidiqi"
            },
            "description": "AI-powered solutions for small businesses, healthcare, and education",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Global"
            }
          })}
        </script>
      </div>
    </footer>
  );
}