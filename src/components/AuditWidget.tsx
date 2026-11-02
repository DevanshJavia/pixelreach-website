import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface AuditWidgetProps {
  onNavigate: (page: PageId) => void;
}

export const AuditWidget: React.FC<AuditWidgetProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState({
    website: 'okay',
    seo: 'unverified',
    social: 'irregular',
    analytics: 'none'
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const questions = [
    {
      key: 'website',
      title: 'How is your current website performing on mobile phones?',
      options: [
        { value: 'modern', label: 'Fast, modern, and easy to read on smartphones', score: 3 },
        { value: 'okay', label: 'It works, but feels slow, outdated or hard to navigate on mobile', score: 1 },
        { value: 'none', label: 'We do not have a dedicated website yet (relying only on Facebook or word of mouth)', score: 0 }
      ]
    },
    {
      key: 'seo',
      title: 'Can Adelaide locals find your business on Google Maps?',
      options: [
        { value: 'top', label: 'Yes, we regularly show up in the top 3 map results for our primary service', score: 3 },
        { value: 'unverified', label: 'We have a Google profile, but we rarely show up or rank on page 2+', score: 1 },
        { value: 'none', label: 'Not set up or not verified yet', score: 0 }
      ]
    },
    {
      key: 'social',
      title: 'How consistent is your social media presence?',
      options: [
        { value: 'active', label: 'Consistent weekly posts showcasing real local jobs and projects', score: 3 },
        { value: 'irregular', label: 'Erratic: we post once every few weeks or months when we have time', score: 1 },
        { value: 'silent', label: 'Completely inactive or no dedicated social presence', score: 0 }
      ]
    },
    {
      key: 'analytics',
      title: 'Do you know which marketing channel generates your customer inquiries?',
      options: [
        { value: 'tracked', label: 'Yes, we track exact phone clicks and form submissions in GA4', score: 3 },
        { value: 'vague', label: 'We ask clients when they call, but have no reliable digital tracking', score: 1 },
        { value: 'none', label: 'Zero tracking: we have no idea where our web traffic or leads come from', score: 0 }
      ]
    }
  ];

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const resetAudit = () => {
    setStep(0);
    setIsCalculated(false);
  };

  const getRecommendations = () => {
    const recs = [];
    if (answers.website !== 'modern') {
      recs.push({
        title: 'Priority 1: Mobile-First Web Foundation',
        detail: 'Over 65% of local searches happen on mobile devices. Rebuilding or refining your website with sub-1.5s load speeds and click-to-call buttons will immediately capture lost mobile leads.'
      });
    }
    if (answers.seo !== 'top') {
      recs.push({
        title: 'Priority 2: Adelaide Google Business Profile Tuning',
        detail: 'Claiming your profile, optimizing primary categories, and adding South Australian service suburbs will help you appear in local map searches before competitors.'
      });
    }
    if (answers.analytics !== 'tracked') {
      recs.push({
        title: 'Priority 3: Phone & Inquiry Attribution Setup',
        detail: 'Install Google Tag Manager to track every phone number tap and form submission so you can invest marketing dollars into what actually generates income.'
      });
    }
    if (recs.length === 0) {
      recs.push({
        title: 'Strong Digital Foundation Detected',
        detail: 'Your core digital presence is solid. The next growth frontier is conversion rate optimization and targeted local content expansion.'
      });
    }
    return recs;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#D8E2DC] shadow-sm overflow-hidden">
      <div className="bg-[#2c1d23] px-6 py-5 text-[#FFE5D9] flex items-center justify-between border-b border-[#47333a]">
        <div>
          <span className="text-xs font-semibold text-[#f4acb7] uppercase tracking-wider">Interactive Assessment</span>
          <h3 className="text-lg font-bold text-[#FFE5D9] mt-0.5">Adelaide Small Business Digital Health Check</h3>
        </div>
        <div className="text-xs text-[#D8E2DC] bg-[#47333a] px-3 py-1.5 rounded-full font-medium">
          {isCalculated ? 'Results Ready' : `Question ${step + 1} of 4`}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {!isCalculated ? (
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#2c1d23] mb-6">
              {questions[step].title}
            </h4>

            <div className="space-y-3">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(questions[step].key, option.value)}
                  className="w-full text-left p-4 rounded-xl border border-[#D8E2DC] hover:border-[#f4acb7] hover:bg-[#FFE5D9]/40 transition-all text-sm font-medium text-[#2c1d23] flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                >
                  <span>{option.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#9d8189] group-hover:text-[#2c1d23] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#D8E2DC]/60 text-xs text-[#9d8189]">
              <span>Takes under 60 seconds · No email required</span>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-[#963847] hover:text-[#2c1d23] font-medium"
                >
                  ← Back to previous question
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#2c1d23] bg-[#D8E2DC]/50 p-3 rounded-lg border border-[#D8E2DC] text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#963847] shrink-0" />
              <span>Assessment completed based on your South Australian business profile.</span>
            </div>

            <h4 className="text-base font-bold text-[#2c1d23]">Your Recommended Action Roadmap:</h4>

            <div className="space-y-4">
              {getRecommendations().map((rec, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FFE5D9]/30 border border-[#D8E2DC]">
                  <h5 className="font-semibold text-[#2c1d23] text-sm mb-1">{rec.title}</h5>
                  <p className="text-xs text-[#5c434c] leading-relaxed">{rec.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D8E2DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={resetAudit}
                className="inline-flex items-center gap-1.5 text-xs text-[#9d8189] hover:text-[#2c1d23] font-medium"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                <span>Discuss Roadmap on Free Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
