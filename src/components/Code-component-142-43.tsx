import { Card, CardContent } from "./ui/card";
import { BlogPost } from "../types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const handlePostClick = () => {
    if (post.slug) {
      // Navigate to blog post (future functionality)
      console.log(`Navigate to blog post: ${post.slug}`);
    }
  };

  return (
    <Card 
      className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer group"
      onClick={handlePostClick}
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
                  <span>{post.readTime}</span>
                  <span>•</span>
                </>
              )}
              <span>{post.date}</span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {post.snippet}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}