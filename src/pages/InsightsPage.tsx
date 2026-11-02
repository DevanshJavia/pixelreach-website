import React, { useState } from 'react';
import { PageId } from '../types';
import { insightsArticles } from '../data/articlesData';
import { Clock, Calendar, ArrowRight, BookOpen, Compass, CheckCircle } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenArticle: (articleId: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'SEO', 'Web Design', 'Analytics', 'Social Media', 'Strategy'];

  const filteredArticles = selectedCategory === 'All'
    ? insightsArticles
    : insightsArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50 inline-block">
              Practical Knowledge
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              Actionable digital marketing guides for South Australian small business.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              Straightforward, fluff-free advice written specifically for Adelaide sole traders, tradies, and startups. Learn how to optimize your Google presence, improve web conversions, and interpret your numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#D8E2DC]/50 rounded-xl max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                selectedCategory === cat
                  ? 'bg-[#2c1d23] text-[#FFE5D9] shadow-sm'
                  : 'text-[#5c434c] hover:text-[#2c1d23] hover:bg-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-[#D8E2DC] p-6 sm:p-7 shadow-sm hover:border-[#f4acb7] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
                <div className="flex items-center gap-2 text-xs text-[#9d8189]">
                  <span className="font-semibold text-[#963847]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.publishDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#2c1d23] group-hover:text-[#963847] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5c434c] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Practical Takeaway Snippet */}
                <div className="bg-[#FFE5D9]/30 p-3 rounded-xl border border-[#D8E2DC] text-xs text-[#2c1d23] space-y-1">
                  <span className="font-semibold text-[#2c1d23] block text-[11px] uppercase tracking-wider">
                    Key Action Included:
                  </span>
                  <p className="line-clamp-2 text-[#5c434c]">{article.actionChecklist[0]}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8E2DC]/60">
                <button
                  onClick={() => onOpenArticle(article.id)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#963847] group-hover:text-[#2c1d23] transition-colors py-1"
                >
                  <span>Read Complete Guide & Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-12 border border-[#47333a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">Have a specific question about your marketing?</h3>
            <p className="text-xs sm:text-sm text-[#D8E2DC]/80">
              We offer free 20-minute digital audits for Adelaide business owners. No sales pressure, just practical advice on what to prioritize next.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all"
          >
            <span>Book 20-Min Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
