import { BlogPostCard } from "../BlogPostCard";
import { blogPosts } from "../../data/portfolio";

export function WritingSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900 px-2">
          Writing / Insights
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}