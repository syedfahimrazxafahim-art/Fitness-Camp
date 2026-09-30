import React, { useState } from 'react';
import { X, Clock, Calendar, User, Share2, Check, Bookmark, ThumbsUp } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(48);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen || !post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#ffffff] text-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8">
        
        {/* Cover Image */}
        <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#CEF72E] text-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-full font-mono">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Article Header */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 leading-tight mb-4 font-heading">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-neutral-400" />
                  <span className="font-semibold text-neutral-800">{post.author.name}</span>
                  <span className="text-neutral-400">({post.author.role})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                    hasLiked
                      ? 'bg-red-50 text-red-600 border-red-200'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{likes}</span>
                </button>

                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                    isSaved
                      ? 'bg-amber-50 text-amber-600 border-amber-200'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg font-medium text-neutral-800 leading-relaxed italic border-l-4 border-[#CEF72E] pl-4 py-1">
            {post.excerpt}
          </p>

          {/* Article Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="bg-[#FAFBF6] rounded-2xl p-5 border border-neutral-200 flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-[#E5F976] flex items-center justify-center font-black text-neutral-900 font-heading shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">{post.author.name}</div>
              <div className="text-xs text-neutral-500">{post.author.role} · STRIVE Master Coach</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
