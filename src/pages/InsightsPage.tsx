import React, { useState } from 'react';
import { PageId } from '../types';
import { insightsArticles } from '../data/articlesData';
import { Clock, Calendar, ArrowRight, BookOpen, Compass, CheckCircle } from 'lucide-react';
import heroBackdrop from '../assets/images/hero_adelaide_backdrop_1794815556400.jpg';
import analyticsWorkspace from '../assets/images/analytics_workspace_1794815557003.jpg';

import studioConsultation from '../assets/images/studio_consultation_1794815556837.jpg';

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

  const featuredArticle = filteredArticles.find((a) => a.featured);
  const gridArticles = featuredArticle
    ? filteredArticles.filter((a) => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#2c1d23] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <img
          src={heroBackdrop}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1d23]/85 via-[#35232a]/85 to-[#25181e]/95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Featured Sub-Theme Pillar Post */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-3xl border border-[#D8E2DC] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-[#FFE5D9]/25 border-b lg:border-b-0 lg:border-r border-[#D8E2DC] flex flex-col justify-between">
              <img
                src={studioConsultation}
                alt="Digital marketing strategy planning in a boutique Adelaide studio"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              {featuredArticle.sections && (
                <div className="p-6 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#963847]">
                    5 Focused Sub-Themes Inside
                  </span>
                  <ul className="space-y-2 text-xs text-[#2c1d23]">
                    {featuredArticle.sections.map((sec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#963847] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="font-medium leading-snug">{sec.heading}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#9d8189]">
                  <span className="px-2.5 py-0.5 rounded bg-[#2c1d23] text-[#FFE5D9] font-semibold uppercase tracking-wider text-[11px]">
                    Featured Guide
                  </span>
                  <span className="font-semibold text-[#963847]">{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.publishDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1d23] leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-[#5c434c] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="bg-[#FFE5D9]/30 p-4 rounded-xl border border-[#D8E2DC] text-xs text-[#2c1d23] space-y-1.5">
                  <span className="font-bold uppercase tracking-wider text-[11px] text-[#963847] block">
                    Why Customers Read This Playbook:
                  </span>
                  <p className="text-[#5c434c] leading-relaxed">
                    {featuredArticle.content[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8E2DC]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#5c434c]">
                  Includes 5 sub-theme deep dives + action checklist
                </span>
                <button
                  onClick={() => onOpenArticle(featuredArticle.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-sm transition-all"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
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
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-10 border border-[#47333a] grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#47333a] bg-[#1f1418]">
            <img
              src={analyticsWorkspace}
              alt="Digital analytics workspace displaying growth metrics and strategy notebook"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold">Have a specific question about your marketing?</h3>
              <p className="text-xs sm:text-sm text-[#D8E2DC]/80">
                We offer free 20-minute digital audits for Adelaide business owners. No sales pressure, just practical advice on what to prioritize next.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Book 20-Min Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
