import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { 
  Layout, 
  Search, 
  Share2, 
  BarChart3, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-5 h-5 text-[#f4acb7]" />;
      case 'search':
        return <Search className="w-5 h-5 text-[#f4acb7]" />;
      case 'share-2':
        return <Share2 className="w-5 h-5 text-[#f4acb7]" />;
      case 'bar-chart-3':
        return <BarChart3 className="w-5 h-5 text-[#f4acb7]" />;
      default:
        return <Layout className="w-5 h-5 text-[#f4acb7]" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50 inline-block">
              Core Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              Practical digital marketing services built for South Australian small business.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              Every service we offer is designed to solve a specific business problem: getting discovered by local buyers, converting mobile visitors into inquiries, and knowing exactly which marketing efforts generate income.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Explorer Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-1.5 bg-[#D8E2DC]/50 rounded-2xl mb-12">
          {servicesData.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-2.5 p-3.5 sm:p-4 rounded-xl text-left transition-all font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                  isSelected
                    ? 'bg-[#2c1d23] text-[#FFE5D9] shadow-md'
                    : 'text-[#5c434c] hover:text-[#2c1d23] hover:bg-white/70'
                }`}
              >
                <span className="shrink-0">{getIcon(service.iconName)}</span>
                <span className="truncate">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Deep-Dive Card */}
        <div className="bg-white rounded-3xl border border-[#D8E2DC] p-8 sm:p-12 shadow-sm space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-[#D8E2DC]/60 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#963847] bg-[#FFE5D9] px-2.5 py-1 rounded-md">
                  Service {activeService.number}
                </span>
                <span className="text-xs text-[#9d8189] font-medium">Adelaide Practice Area</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2c1d23] tracking-tight">
                {activeService.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5c434c] leading-relaxed">
                {activeService.longDescription}
              </p>
            </div>

            <div className="bg-[#FFE5D9]/30 p-6 rounded-2xl border border-[#D8E2DC] lg:max-w-xs w-full space-y-2 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Ideal For:</span>
              <p className="text-xs text-[#2c1d23] font-medium leading-relaxed">
                {activeService.idealFor}
              </p>
              <div className="pt-3 border-t border-[#D8E2DC] mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#963847]">Primary Commercial Outcome:</span>
                <p className="text-xs text-[#2c1d23] font-semibold mt-1">
                  {activeService.keyBenefit}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist Grid */}
          <div>
            <h3 className="text-base font-bold text-[#2c1d23] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#963847]" />
              <span>What is included in every engagement</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FFE5D9]/20 border border-[#D8E2DC] text-sm text-[#2c1d23]">
                  <Check className="w-4 h-4 text-[#963847] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-[#D8E2DC]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#9d8189]">
              <ShieldCheck className="w-4 h-4 text-[#963847]" />
              <span>No lock-in contracts · Full intellectual property transfer to your business</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#2c1d23] bg-[#D8E2DC]/60 hover:bg-[#D8E2DC] rounded-lg transition-colors text-center"
              >
                View Pricing Packages
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-lg shadow-sm transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Complete Deliverables Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Comparison & Scope</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1d23] tracking-tight mt-1">
            How our four services work together
          </h2>
          <p className="mt-2 text-[#5c434c] text-sm">
            You can engage us for a single project or bundle multiple services for cohesive local marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((srv) => (
            <div key={srv.id} className="p-6 rounded-2xl bg-white border border-[#D8E2DC] space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#9d8189]">{srv.number}</span>
                <h3 className="font-bold text-[#2c1d23] text-base">{srv.title}</h3>
              </div>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                {srv.shortDescription}
              </p>
              <ul className="space-y-2 text-xs text-[#2c1d23] pt-2 border-t border-[#D8E2DC]/60">
                {srv.deliverables.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#963847] font-bold">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-12 border border-[#47333a] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Not sure which service your business needs first?</h2>
          <p className="text-sm text-[#D8E2DC]/80 max-w-xl mx-auto">
            Book a complimentary 20-minute Adelaide discovery call. We will review your current website, local Google presence, and recommend the highest-impact starting point.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Schedule Free Strategy Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
