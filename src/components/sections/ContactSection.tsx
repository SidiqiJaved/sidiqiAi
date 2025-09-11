import { Button } from "../ui/button";
import { socialLinks } from "../../data/portfolio";
import { trackPortfolioEvents } from "../../utils/analytics";

export function ContactSection() {
  const handleSocialClick = (url: string, platform: string) => {
    trackPortfolioEvents.socialClick(platform.toLowerCase());
    trackPortfolioEvents.contactClick(platform.toLowerCase());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getButtonClasses = (variant?: string, color?: string) => {
    const baseClasses = "px-4 sm:px-6 py-3 rounded-lg w-full sm:w-auto transition-all duration-200 focus:ring-2 focus:ring-offset-2";
    
    if (variant === "primary") {
      return `bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white ${baseClasses}`;
    }
    
    if (color === "red") {
      return `border-2 border-red-300 text-red-600 hover:bg-red-50 focus:ring-red-500 ${baseClasses}`;
    }
    
    return `border-2 border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 ${baseClasses}`;
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 px-4 sm:px-6 scroll-mt-20"
      aria-label="Contact and social links"
    >
      <div className="max-w-2xl mx-auto text-center">
        <header className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 px-2">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Always open to connect and collaborate. Reach out for partnerships, project discussions, or just to say hello.
          </p>
        </header>
        
        <nav 
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-lg mx-auto"
          role="navigation"
          aria-label="Social media and contact links"
        >
          {socialLinks.map((social) => (
            <Button
              key={social.id}
              size="lg"
              variant={social.variant === "primary" ? "default" : "outline"}
              className={getButtonClasses(social.variant, social.color)}
              onClick={() => handleSocialClick(social.url, social.name)}
              aria-label={`Connect with Javed Sidiqi on ${social.name}`}
            >
              <social.icon className="w-5 h-5 mr-2" aria-hidden="true" />
              {social.name}
            </Button>
          ))}
        </nav>

        {/* Contact structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Javed Sidiqi",
            "description": "Connect with Javed Sidiqi for partnerships, project discussions, and collaboration opportunities",
            "author": {
              "@type": "Person",
              "name": "Javed Sidiqi",
              "url": "https://www.sidiqi.ai",
              "sameAs": socialLinks.map(social => social.url)
            }
          })}
        </script>
      </div>
    </section>
  );
}