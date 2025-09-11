import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { SidiqiLogo } from "./SidiqiLogo";
import { Menu, X } from "lucide-react";
import { cn } from "./ui/utils";

const navLinks = [
  { href: "#home", label: "Home", section: "hero" },
  { href: "#about", label: "About", section: "about" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#writing", label: "Writing", section: "writing" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.section);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation clicks
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80; // Adjust based on header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" 
          : "bg-white/80 backdrop-blur-sm"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 transition-all duration-200 hover:opacity-80"
              aria-label="Go to homepage"
            >
              <SidiqiLogo className="w-10 h-10 lg:w-12 lg:h-12" />
              <span className="hidden sm:block text-xl font-bold text-gray-900">
                Javed Sidiqi
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Force display on desktop */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  activeSection === link.section
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
                aria-current={activeSection === link.section ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button - Only show on mobile */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Spacer for desktop layout balance */}
          <div className="hidden lg:block flex-shrink-0 w-20"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Only show on mobile */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </Button>
              </div>
              
              <nav className="p-4" aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.section}>
                      <button
                        onClick={() => handleNavClick(link.section)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                          activeSection === link.section
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        )}
                        aria-current={activeSection === link.section ? "page" : undefined}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}