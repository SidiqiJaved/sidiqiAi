export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50"
      aria-label="About Javed Sidiqi"
    >
      <div className="max-w-4xl mx-auto">
        <header className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
        </header>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-2">
            I design and build <strong>AI-powered solutions</strong> for small businesses, healthcare, and education. 
            My mission is to make corporate-level technology accessible to mid-sized organizations. 
            This space is where I share my journey as a <em>builder</em> and <em>founder</em>, focusing on 
            innovative solutions that bridge the gap between enterprise tools and small business needs.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Business</h3>
              <p className="text-gray-600">Franchise solutions and operational tools that scale with growth</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600">Modernizing local clinics with digital booking, billing, and AI tools</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">AI-powered resume builders and career development platforms</p>
            </div>
          </div>
        </div>

        {/* FAQ Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does Javed Sidiqi specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Javed Sidiqi specializes in designing and building AI-powered solutions for small businesses, healthcare, and education sectors. He focuses on making corporate-level technology accessible to mid-sized organizations."
                }
              },
              {
                "@type": "Question", 
                "name": "What industries does Javed Sidiqi work with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Javed works with three main industries: Small businesses (franchise solutions and operational tools), Healthcare (modernizing local clinics), and Education (AI-powered resume builders and career development platforms)."
                }
              }
            ]
          })}
        </script>
      </div>
    </section>
  );
}