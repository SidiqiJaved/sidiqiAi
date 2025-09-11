import { Card, CardContent } from "./ui/card";
import { BlogPost } from "../types";
import { trackPortfolioEvents } from "../utils/analytics";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const handlePostClick = () => {
    trackPortfolioEvents.blogPostClick(post.title);
    if (post.slug) {
      // Navigate to blog post (future functionality)
      console.log(`Navigate to blog post: ${post.slug}`);
    }
  };

  return (
    <Card 
      className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      onClick={handlePostClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePostClick();
        }
      }}
      aria-label={`Read blog post: ${post.title}`}
    >
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-2 group-hover:text-blue-600 transition-colors duration-200">
              {post.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500 flex-shrink-0">
              {post.readTime && (
                <>
                  <time dateTime={post.date} aria-label={`Reading time: ${post.readTime}`}>
                    {post.readTime}
                  </time>
                  <span aria-hidden="true">•</span>
                </>
              )}
              <time dateTime={post.date} aria-label={`Published: ${post.date}`}>
                {post.date}
              </time>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {post.snippet}
          </p>
          
          {/* Accessibility hint */}
          <div className="sr-only">
            Press Enter or Space to read this blog post
          </div>
        </div>
      </CardContent>
    </Card>
  );
}