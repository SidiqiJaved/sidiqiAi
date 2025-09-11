import { Button } from "../ui/button";
import { ArrowRight, Youtube } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center space-x-4 mb-8 sm:mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight px-2">
            Javed Sidiqi – Builder, Innovator, Entrepreneur.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            This is my personal portfolio and innovation lab, where I share projects, writing, and weekly reflections.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            onClick={() => window.open('https://youtube.com/@javedsidigui', '_blank')}
          >
            Watch My Videos
            <Youtube className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}