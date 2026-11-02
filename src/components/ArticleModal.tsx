import React from 'react';
import { InsightArticle } from '../types';
import { X, CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookCall
}) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2c1d23]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-title"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-[#D8E2DC] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Bar */}
        <div className="bg-[#2c1d23] text-white px-6 py-4 flex items-center justify-between border-b border-[#47333a]">
          <div className="flex items-center gap-2 text-xs text-[#ffcad4] font-medium">
            <span>PixelReach Insights</span>
            <span aria-hidden="true">·</span>
            <span>{article.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D8E2DC]/80 hover:text-white hover:bg-[#47333a] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Metadata */}
          <div className="space-y-3 border-b border-[#D8E2DC]/80 pb-6">
            <h1 id="article-title" className="text-2xl sm:text-3xl font-bold text-[#2c1d23] leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-[#5c434c]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9d8189]" />
                <span>{article.publishDate}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9d8189]" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-[#963847] font-semibold">By PixelReach Advisory Adelaide</span>
            </div>
          </div>

          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-[#2c1d23] font-medium leading-relaxed bg-[#FFE5D9]/25 p-4 rounded-xl border border-[#D8E2DC]">
            {article.excerpt}
          </p>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-[#5c434c] text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Action Checklist Box */}
          <div className="bg-[#FFE5D9]/30 border border-[#D8E2DC] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-[#2c1d23] font-bold text-base">
              <CheckCircle className="w-5 h-5 text-[#963847]" />
              <h3>Action Checklist for Adelaide Business Owners</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#2c1d23]">
              {article.actionChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#f4acb7] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#FFE5D9]/20 px-6 py-4 border-t border-[#D8E2DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#5c434c]">
            Need guidance implementing this in your Adelaide business?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#2c1d23] bg-white border border-[#D8E2DC] rounded-lg hover:bg-[#FFE5D9]/30 w-full sm:w-auto transition-colors"
            >
              Close Guide
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-lg shadow-sm w-full sm:w-auto transition-colors"
            >
              <span>Book Strategy Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
