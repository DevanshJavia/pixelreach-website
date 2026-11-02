import React, { useState } from 'react';
import { PageId } from '../types';
import { portfolioConceptProjects } from '../data/portfolioData';
import { 
  ArrowRight, 
  MapPin, 
  ShieldAlert, 
  ExternalLink, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (projectId: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = [
    'All',
    'Website Design',
    'SEO Strategy',
    'Social Media',
    'Analytics & Reporting'
  ];

  const filteredProjects = filter === 'All'
    ? portfolioConceptProjects
    : portfolioConceptProjects.filter((p) => p.category === filter);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50 inline-block">
              Concept Demonstrations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              Concept projects illustrating our strategy and design standards.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              To respect business ethics and transparent practices, all case studies below are fictional concept projects engineered to demonstrate our technical web architecture, local SEO mapping, and analytics attribution for South Australian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFE5D9]/50 border border-[#f4acb7]/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-[#2c1d23]">
          <Info className="w-5 h-5 text-[#963847] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">Transparent Demonstration Notice: </span>
            PixelReach does not fabricate testimonials or client results. The projects presented on this page are concept case studies based on typical South Australian small-business operational challenges. Click on any project card to inspect the interactive UI wireframe, deliverables, and technical implementation.
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#D8E2DC]/50 rounded-xl max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                filter === cat
                  ? 'bg-[#2c1d23] text-[#FFE5D9] shadow-sm'
                  : 'text-[#5c434c] hover:text-[#2c1d23] hover:bg-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Concept Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-[#D8E2DC] overflow-hidden shadow-sm hover:border-[#f4acb7] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Mockup preview strip */}
                <div className={`p-6 bg-gradient-to-br ${project.colorTheme} border-b border-[#D8E2DC]/60 flex flex-col justify-between h-44 relative`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#963847] bg-[#FFE5D9] px-2.5 py-1 rounded shadow-xs">
                      Concept Study
                    </span>
                    <span className="text-xs text-[#2c1d23] font-medium bg-white/90 px-2 py-0.5 rounded">
                      {project.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#5c434c]">{project.industry}</span>
                    <h3 className="text-lg font-bold text-[#2c1d23] mt-0.5 leading-snug group-hover:text-[#963847] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#5c434c] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#D8E2DC]/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9d8189]">Key Deliverables</span>
                    <ul className="space-y-1 text-xs text-[#2c1d23]">
                      {project.deliverables.slice(0, 2).map((deliv, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#963847] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="bg-[#FFE5D9]/40 text-[#5c434c] border border-[#D8E2DC] px-2 py-0.5 rounded text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenProject(project.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#2c1d23] bg-[#D8E2DC]/40 hover:bg-[#f4acb7] hover:text-[#2c1d23] rounded-xl transition-all"
                >
                  <span>Inspect Concept Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Project Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-12 border border-[#47333a] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Have a specific project in mind?</h2>
          <p className="text-xs sm:text-sm text-[#D8E2DC]/80 max-w-lg mx-auto">
            Whether you need a new website, local Google Maps ranking overhaul, or an analytics audit, we will draft a concrete proposal for your Adelaide business.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Request Custom Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
