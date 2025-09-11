import { Button } from "../ui/button";
import { ArrowRight, Youtube } from "lucide-react";
import { trackPortfolioEvents } from "../../utils/analytics";

export function HeroSection() {
  const handleProjectsClick = () => {
    trackPortfolioEvents.ctaClick('view_projects', 'hero');
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideosClick = () => {
    trackPortfolioEvents.socialClick('youtube');
    window.open('https://youtube.com/@javedsidiqi', '_blank');
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-32 lg:pt-36"
      aria-label="Hero section - Introduction"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Main Headline */}
        <hgroup className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight px-2">
            Javed Sidiqi – Builder, Innovator, Entrepreneur.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            This is my personal portfolio and innovation lab, where I share projects, writing, and weekly reflections on building AI-powered solutions for small businesses.
          </p>
        </hgroup>

        {/* Call-to-Action Buttons */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-4" role="navigation" aria-label="Primary actions">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto"
            onClick={handleProjectsClick}
            aria-describedby="projects-cta-desc"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
          <span id="projects-cta-desc" className="sr-only">
            Navigate to the projects section to see my latest work
          </span>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto"
            onClick={handleVideosClick}
            aria-describedby="videos-cta-desc"
          >
            Watch My Videos
            <Youtube className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
          <span id="videos-cta-desc" className="sr-only">
            Visit my YouTube channel to watch technical videos and tutorials
          </span>
        </nav>

        {/* Rich snippet markup for breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sidiqi.ai/"
              }
            ]
          })}
        </script>
      </div>
    </section>
  );
}