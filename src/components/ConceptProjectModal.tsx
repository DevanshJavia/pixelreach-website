import React, { useState } from 'react';
import { ConceptProject } from '../types';
import { X, ExternalLink, Check, Smartphone, Monitor, Layers } from 'lucide-react';

interface ConceptProjectModalProps {
  project: ConceptProject | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ConceptProjectModal: React.FC<ConceptProjectModalProps> = ({
  project,
  onClose,
  onBookCall
}) => {
  const [previewTab, setPreviewTab] = useState<'desktop' | 'mobile' | 'components'>('desktop');

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2c1d23]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-[#D8E2DC] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-[#2c1d23] text-white px-6 py-4 flex items-center justify-between border-b border-[#47333a]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#ffcad4] bg-[#47333a] px-2.5 py-1 rounded-md border border-[#9d8189]/40">
              Concept Project
            </span>
            <span className="text-xs text-[#D8E2DC] font-medium">{project.location}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D8E2DC]/80 hover:text-white hover:bg-[#47333a] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Category */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#2c1d23] tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-[#5c434c]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.industry}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#963847] font-semibold">South Australia Case Study</span>
            </div>
            <p className="mt-3 text-sm text-[#5c434c] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Interactive Mockup Simulation Box */}
          <div className="bg-[#2c1d23] rounded-xl p-4 sm:p-5 text-white border border-[#47333a]">
            <div className="flex items-center justify-between border-b border-[#47333a] pb-3 mb-4">
              <span className="text-xs font-semibold text-[#D8E2DC]">Concept Architecture Preview</span>
              <div className="flex items-center gap-1 bg-[#35232a] p-1 rounded-lg">
                <button
                  onClick={() => setPreviewTab('desktop')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                    previewTab === 'desktop' ? 'bg-[#f4acb7] text-[#2c1d23] font-semibold' : 'text-[#D8E2DC] hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setPreviewTab('mobile')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                    previewTab === 'mobile' ? 'bg-[#f4acb7] text-[#2c1d23] font-semibold' : 'text-[#D8E2DC] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile Wireframe</span>
                </button>
                <button
                  onClick={() => setPreviewTab('components')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                    previewTab === 'components' ? 'bg-[#f4acb7] text-[#2c1d23] font-semibold' : 'text-[#D8E2DC] hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Components</span>
                </button>
              </div>
            </div>

            {/* Simulated UI render depending on tab */}
            {previewTab === 'desktop' && (
              <div className="bg-[#1f1418] rounded-lg p-4 border border-[#47333a] space-y-3 font-mono text-xs">
                <div className="flex items-center gap-1.5 pb-2 border-b border-[#47333a] text-[#9d8189] text-[11px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[#D8E2DC]/80">https://concept.{project.id}.com.au</span>
                </div>
                <div className="h-32 rounded bg-gradient-to-r from-[#2c1d23] to-[#47333a] p-4 flex flex-col justify-center border border-[#47333a]">
                  <span className="text-[#ffcad4] font-sans text-xs font-semibold">{project.location}</span>
                  <p className="font-sans text-base font-bold text-white mt-1">{project.title}</p>
                  <p className="font-sans text-xs text-[#D8E2DC] mt-1 max-w-md line-clamp-2">{project.challenge}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-2.5 rounded bg-[#2c1d23] border border-[#47333a] text-[11px] text-[#D8E2DC]">
                    <p className="text-[#9d8189]">Fast Navigation</p>
                    <p className="font-sans font-semibold mt-0.5 text-white">Adelaide Metro Reach</p>
                  </div>
                  <div className="p-2.5 rounded bg-[#2c1d23] border border-[#47333a] text-[11px] text-[#D8E2DC]">
                    <p className="text-[#9d8189]">CTA Funnel</p>
                    <p className="font-sans font-semibold mt-0.5 text-white">Direct Local Booking</p>
                  </div>
                  <div className="p-2.5 rounded bg-[#2c1d23] border border-[#47333a] text-[11px] text-[#D8E2DC]">
                    <p className="text-[#9d8189]">Mobile Score</p>
                    <p className="font-sans font-semibold text-[#f4acb7] mt-0.5">99/100 Core Web Vitals</p>
                  </div>
                </div>
              </div>
            )}

            {previewTab === 'mobile' && (
              <div className="max-w-xs mx-auto bg-[#1f1418] rounded-2xl p-4 border-2 border-[#47333a] space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center text-[10px] text-[#9d8189] pb-1 border-b border-[#47333a]">
                  <span>9:41 AM</span>
                  <span>5G SA</span>
                </div>
                <div className="bg-[#2c1d23] p-3 rounded-lg border border-[#47333a] text-center">
                  <p className="font-bold text-white text-xs">{project.title}</p>
                  <p className="text-[10px] text-[#ffcad4] mt-0.5">{project.industry}</p>
                  <button className="mt-2 w-full py-1.5 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] rounded text-[11px] font-semibold transition-colors">
                    Tap to Call / Book Now
                  </button>
                </div>
                <div className="space-y-1.5 text-[11px] text-[#D8E2DC]">
                  <div className="p-2 bg-[#2c1d23] rounded border border-[#47333a]">✓ 1-Tap Directions (Adelaide Metro)</div>
                  <div className="p-2 bg-[#2c1d23] rounded border border-[#47333a]">✓ Instant Quote Calculator</div>
                  <div className="p-2 bg-[#2c1d23] rounded border border-[#47333a]">✓ Verified Local Business Schema</div>
                </div>
              </div>
            )}

            {previewTab === 'components' && (
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#1f1418] rounded-lg border border-[#47333a]">
                  <span className="text-[#ffcad4] font-semibold">Design Component Spec:</span>
                  <p className="text-[#D8E2DC] mt-1">High-contrast accessibility, WCAG AA compliant buttons, responsive grid typography.</p>
                </div>
                <div className="p-3 bg-[#1f1418] rounded-lg border border-[#47333a]">
                  <span className="text-[#ffcad4] font-semibold">Local SEO Component:</span>
                  <p className="text-[#D8E2DC] mt-1">Adelaide postal code & suburb schema, Google Maps local coordinates, NAP consistency.</p>
                </div>
              </div>
            )}
          </div>

          {/* Challenge & Strategy Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#FFE5D9]/25 p-5 rounded-xl border border-[#D8E2DC]">
              <h3 className="font-bold text-[#2c1d23] text-sm mb-2">The Small Business Challenge</h3>
              <p className="text-[#5c434c] leading-relaxed text-xs">
                {project.challenge}
              </p>
            </div>
            <div className="bg-[#D8E2DC]/30 p-5 rounded-xl border border-[#D8E2DC]">
              <h3 className="font-bold text-[#2c1d23] text-sm mb-2">The Practical Strategy</h3>
              <p className="text-[#5c434c] leading-relaxed text-xs">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-sm font-bold text-[#2c1d23] mb-3">Concept Deliverables & Assets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2c1d23] bg-[#FFE5D9]/20 p-2.5 rounded-lg border border-[#D8E2DC]">
                  <Check className="w-3.5 h-3.5 text-[#963847] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hypothesis & Tech Stack */}
          <div className="space-y-3 pt-2 border-t border-[#D8E2DC] text-xs">
            <div className="flex items-start gap-2 text-[#5c434c]">
              <span className="font-semibold text-[#2c1d23] shrink-0">Performance Hypothesis:</span>
              <span>{project.metricsHypothesis}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-semibold text-[#2c1d23]">Technical Foundation:</span>
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-[#D8E2DC]/50 text-[#2c1d23] font-medium px-2 py-0.5 rounded text-[11px] border border-[#D8E2DC]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFE5D9]/20 px-6 py-4 border-t border-[#D8E2DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#5c434c]">
            Fictional concept project designed by PixelReach Adelaide.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#2c1d23] bg-white border border-[#D8E2DC] rounded-lg hover:bg-[#FFE5D9]/30 w-full sm:w-auto transition-colors"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="px-4 py-2 text-xs font-semibold text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-lg shadow-sm w-full sm:w-auto text-center transition-colors"
            >
              Request Similar Project Scope
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
