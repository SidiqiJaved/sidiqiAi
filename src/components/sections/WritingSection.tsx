import { BlogPostCard } from "../BlogPostCard";
import { blogPosts } from "../../data/portfolio";

export function WritingSection() {
  return (
    <section 
      id="writing" 
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 scroll-mt-20"
      aria-label="Blog posts and insights"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
            Writing / Insights
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Weekly reflections on building AI solutions, entrepreneurship, and bridging the technology gap for small businesses.
          </p>
        </header>
        
        <div 
          className="space-y-6 sm:space-y-8"
          role="feed"
          aria-label="Blog posts"
        >
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              role="article"
              aria-label={`Blog post ${index + 1}: ${post.title}`}
            >
              <BlogPostCard post={post} />
            </article>
          ))}
        </div>

        {/* Blog structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Javed Sidiqi's Insights",
            "description": "Weekly reflections on building AI solutions, entrepreneurship, and technology for small businesses",
            "author": {
              "@type": "Person",
              "name": "Javed Sidiqi",
              "url": "https://www.sidiqi.ai"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.snippet,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "Javed Sidiqi"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sidiqi.ai"
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
}