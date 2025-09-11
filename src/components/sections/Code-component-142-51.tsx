import { Button } from "../ui/button";
import { socialLinks } from "../../data/portfolio";

export function ContactSection() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const getButtonClasses = (variant?: string, color?: string) => {
    const baseClasses = "px-4 sm:px-6 py-3 rounded-lg w-full sm:w-auto transition-colors duration-200";
    
    if (variant === "primary") {
      return `bg-blue-600 hover:bg-blue-700 text-white ${baseClasses}`;
    }
    
    if (color === "red") {
      return `border-2 border-red-300 text-red-600 hover:bg-red-50 ${baseClasses}`;
    }
    
    return `border-2 border-gray-300 text-gray-700 hover:bg-gray-100 ${baseClasses}`;
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 px-2">
          Let's Connect
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 px-2">
          Always open to connect and collaborate.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-lg mx-auto">
          {socialLinks.map((social) => (
            <Button
              key={social.id}
              size="lg"
              variant={social.variant === "primary" ? "default" : "outline"}
              className={getButtonClasses(social.variant, social.color)}
              onClick={() => handleSocialClick(social.url)}
            >
              <social.icon className="w-5 h-5 mr-2" />
              {social.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}