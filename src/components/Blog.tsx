import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogProps {
  onSelectArticle: (post: BlogPost) => void;
  onViewAllArticles: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectArticle, onViewAllArticles }) => {
  return (
    <section id="blog" className="py-20 lg:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-heading">
              FROM OUR BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight">
              Latest Fitness Tips & Insights
            </h2>
          </div>

          <button
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-800 hover:text-black group cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-100 shadow-sm border border-neutral-200/80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-2">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-700 font-semibold">{post.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-black leading-snug mb-3 font-heading transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Action Link */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 group-hover:text-black pt-1">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
