import React from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { AuditWidget } from '../components/AuditWidget';
import adelaideBadge from '../assets/adelaide-badge.svg';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  Search, 
  Share2, 
  BarChart3, 
  MapPin, 
  ShieldCheck, 
  MessageSquareText, 
  ChevronRight,
  TrendingUp,
  Target
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-6 h-6 text-[#f4acb7]" />;
      case 'search':
        return <Search className="w-6 h-6 text-[#f4acb7]" />;
      case 'share-2':
        return <Share2 className="w-6 h-6 text-[#f4acb7]" />;
      case 'bar-chart-3':
        return <BarChart3 className="w-6 h-6 text-[#f4acb7]" />;
      default:
        return <Layout className="w-6 h-6 text-[#f4acb7]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#47333a]">
        {/* Architectural ambient background glow matching palette */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f4acb7] blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Value Proposition, Action CTAs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Trust Badge with Bundled SVG Asset */}
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFE5D9] bg-[#47333a]/80 px-3 py-1.5 rounded-lg border border-[#9d8189]/50 shadow-xs">
                <img src={adelaideBadge} alt="Adelaide South Australia" className="w-4 h-4 rounded-sm" />
                <span>Adelaide, South Australia · Digital Consultancy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#FFE5D9] tracking-tight leading-[1.15] text-balance">
                Practical digital marketing that helps small businesses <span className="text-[#f4acb7]">get seen</span>, connect with customers and measure progress.
              </h1>

              {/* Clear Value Proposition */}
              <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed max-w-2xl">
                We partner with Adelaide small-business owners, sole traders, and local startups to build fast mobile websites, rank on Google Maps, create realistic social content, and track real customer inquiries. No lock-in contracts, zero tech jargon.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] active:bg-[#f4acb7] rounded-xl shadow-lg shadow-[#2c1d23]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFE5D9] bg-[#47333a]/90 hover:bg-[#5c434c] hover:text-[#FFE5D9] rounded-xl border border-[#9d8189]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#9d8189]"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-[#f4acb7]" />
                </button>
              </div>

              {/* Trust Attributes Row */}
              <div className="pt-4 border-t border-[#47333a] flex flex-wrap items-center gap-6 text-xs text-[#D8E2DC]/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#f4acb7]" />
                  <span>No Lock-In Retainers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f4acb7]" />
                  <span>100% Asset Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#f4acb7]" />
                  <span>South Australian Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Digital Marketing Performance Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1f1418]/95 rounded-3xl p-6 sm:p-7 border border-[#47333a] shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-[#47333a]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f4acb7]" />
                    <span className="text-xs font-semibold text-[#FFE5D9]">Adelaide Local Presence Overview</span>
                  </div>
                  <span className="text-[11px] text-[#ffcad4] font-mono">Monthly Snapshot</span>
                </div>

                <div className="space-y-4 py-5">
                  {/* Metric 1 */}
                  <div className="p-3.5 rounded-xl bg-[#2c1d23] border border-[#47333a] flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#D8E2DC]/80">Google Maps 3-Pack Visibility</p>
                      <p className="text-sm font-bold text-[#FFE5D9] mt-0.5">Top-3 Local Rank (Adelaide Metro)</p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#FFE5D9] bg-[#5c434c] px-2 py-1 rounded border border-[#9d8189]/50">
                      +18 Inquiries
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3.5 rounded-xl bg-[#2c1d23] border border-[#47333a] flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#D8E2DC]/80">Mobile Speed & Core Web Vitals</p>
                      <p className="text-sm font-bold text-[#FFE5D9] mt-0.5">1.1s Mobile Load Time</p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#2c1d23] bg-[#f4acb7] px-2 py-1 rounded border border-[#ffcad4]">
                      Grade A
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3.5 rounded-xl bg-[#2c1d23] border border-[#47333a] flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#D8E2DC]/80">Inquiry Tracking & Attribution</p>
                      <p className="text-sm font-bold text-[#FFE5D9] mt-0.5">Phone Clicks & Form Submissions</p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#FFE5D9] bg-[#47333a] px-2 py-1 rounded">
                      GA4 Verified
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#47333a] flex items-center justify-between text-xs text-[#D8E2DC]/80">
                  <span>Transparent Monthly Reporting</span>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="text-[#f4acb7] hover:text-[#ffcad4] font-medium inline-flex items-center gap-1"
                  >
                    <span>View Pricing Plans</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Four Core Services Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Core Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2c1d23] tracking-tight mt-1 text-balance">
              Four focused services engineered for real small-business growth
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#5c434c] text-sm max-w-sm">
            We avoid unnecessary agency fluff and deliver the four pillars essential to your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D8E2DC] hover:border-[#f4acb7] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE5D9] group-hover:bg-[#ffcad4] flex items-center justify-center transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9d8189]">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2c1d23] group-hover:text-[#963847] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#5c434c] leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-5 pt-4 border-t border-[#D8E2DC]/70 space-y-1.5">
                  <span className="text-[11px] font-semibold text-[#9d8189] uppercase tracking-wider">Key Deliverable</span>
                  <p className="text-xs text-[#2c1d23] font-medium">
                    {service.deliverables[0]}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#963847] group-hover:text-[#f4acb7] transition-colors py-1"
                >
                  <span>Learn more about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose PixelReach Section */}
      <section className="bg-[#2c1d23] text-[#FFE5D9] py-20 sm:py-24 border-y border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f4acb7]">The PixelReach Difference</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFE5D9] tracking-tight mt-1 text-balance">
              Why Adelaide small businesses choose our practical approach
            </h2>
            <p className="mt-3 text-[#D8E2DC]/80 text-sm">
              We started PixelReach because small businesses deserve honest advice, fair pricing, and direct senior expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#36242c] border border-[#47333a] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#47333a] border border-[#9d8189]/50 flex items-center justify-center text-[#f4acb7]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFE5D9]">Direct Senior Attention</h3>
              <p className="text-xs text-[#D8E2DC]/75 leading-relaxed">
                You work directly with experienced digital consultants who understand the Adelaide market—never outsourced to junior accounts or offshore subcontractors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#36242c] border border-[#47333a] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#47333a] border border-[#9d8189]/50 flex items-center justify-center text-[#f4acb7]">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFE5D9]">Zero Jargon, Plain English</h3>
              <p className="text-xs text-[#D8E2DC]/75 leading-relaxed">
                We speak in plain commercial terms: inquiries, phone calls, rankings, and conversions. We never hide behind confusing technical buzzwords.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#36242c] border border-[#47333a] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#47333a] border border-[#9d8189]/50 flex items-center justify-center text-[#f4acb7]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFE5D9]">Transparent & Upfront</h3>
              <p className="text-xs text-[#D8E2DC]/75 leading-relaxed">
                All pricing is published in AUD. We never lock clients into 12-month handcuffs. If our work doesn't prove its value, you can cancel at any time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#36242c] border border-[#47333a] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#47333a] border border-[#9d8189]/50 flex items-center justify-center text-[#f4acb7]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFE5D9]">Realistic & Evidence-Based</h3>
              <p className="text-xs text-[#D8E2DC]/75 leading-relaxed">
                No false promises of "ranking #1 by tomorrow". We build sustainable, permanent organic equity that grows with your business year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Work Section (Clean Human Editorial 01–04) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Our Methodology</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2c1d23] tracking-tight mt-1 text-balance">
            How we partner with South Australian businesses
          </h2>
          <p className="mt-3 text-[#5c434c] text-sm">
            A structured, collaborative 4-step framework tailored to the pace and realities of small-business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-[#D8E2DC] relative">
            <span className="text-3xl font-extrabold text-[#9d8189]/30">01</span>
            <h3 className="text-base font-bold text-[#2c1d23] mt-2">Discovery & Local Audit</h3>
            <p className="text-xs sm:text-sm text-[#5c434c] mt-2 leading-relaxed">
              We review your existing website, Adelaide competitors, Google profile, and current customer touchpoints to identify quick wins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#D8E2DC] relative">
            <span className="text-3xl font-extrabold text-[#9d8189]/30">02</span>
            <h3 className="text-base font-bold text-[#2c1d23] mt-2">Pragmatic Strategy</h3>
            <p className="text-xs sm:text-sm text-[#5c434c] mt-2 leading-relaxed">
              We establish clear, realistic milestones tailored to your budget—prioritising high-impact conversion fixes over vanity redesigns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#D8E2DC] relative">
            <span className="text-3xl font-extrabold text-[#9d8189]/30">03</span>
            <h3 className="text-base font-bold text-[#2c1d23] mt-2">Execution & Polish</h3>
            <p className="text-xs sm:text-sm text-[#5c434c] mt-2 leading-relaxed">
              We build your website, optimise local SEO, or craft social content with rigorous attention to mobile speed and accessibility.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#D8E2DC] relative">
            <span className="text-3xl font-extrabold text-[#9d8189]/30">04</span>
            <h3 className="text-base font-bold text-[#2c1d23] mt-2">Measurement & Review</h3>
            <p className="text-xs sm:text-sm text-[#5c434c] mt-2 leading-relaxed">
              Each month, we meet to review real inquiries, inspect attribution data, and refine your marketing roadmap collaboratively.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Interactive Small-Business Digital Health Audit Tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Self-Service Tool</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1d23] tracking-tight mt-1">
            Where does your Adelaide business stand online?
          </h2>
          <p className="mt-2 text-[#5c434c] text-xs sm:text-sm">
            Take our 60-second interactive check to receive a custom prioritized improvement checklist.
          </p>
        </div>

        <AuditWidget onNavigate={onNavigate} />
      </section>

      {/* 6. Featured Concept Project Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-12 border border-[#47333a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffcad4]">
                <span>Featured Concept Case Study</span>
                <span aria-hidden="true">·</span>
                <span>Norwood, Adelaide SA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FFE5D9] tracking-tight">
                Norwood Specialty Coffee Roasters
              </h2>
              <p className="text-sm text-[#D8E2DC] leading-relaxed">
                A concept project demonstrating how an independent artisan roastery in Adelaide’s eastern suburbs can connect foot-traffic from The Parade with weekly recurring coffee bean subscriptions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-[#47333a] text-[#FFE5D9] px-3 py-1 rounded-md">Mobile E-Commerce</span>
                <span className="text-xs bg-[#47333a] text-[#FFE5D9] px-3 py-1 rounded-md">Local SEO & Map Pack</span>
                <span className="text-xs bg-[#47333a] text-[#FFE5D9] px-3 py-1 rounded-md">Sub-1.2s Load Speed</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onOpenProject('norwood-coffee')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  <span>Explore Concept Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1f1418] p-6 rounded-2xl border border-[#47333a]">
              <span className="text-xs font-mono text-[#f4acb7] block mb-2">Technical Benchmark</span>
              <div className="space-y-3 text-xs text-[#D8E2DC] font-mono">
                <div className="flex justify-between py-1 border-b border-[#47333a]">
                  <span>Performance:</span>
                  <span className="text-[#f4acb7] font-bold">100 / 100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#47333a]">
                  <span>Accessibility:</span>
                  <span className="text-[#f4acb7] font-bold">100 / 100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#47333a]">
                  <span>Best Practices:</span>
                  <span className="text-[#f4acb7] font-bold">100 / 100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#47333a]">
                  <span>Local SEO Schema:</span>
                  <span className="text-[#f4acb7] font-bold">Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Consultation Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#2c1d23] via-[#3d2832] to-[#47333a] rounded-3xl p-8 sm:p-14 text-[#FFE5D9] text-center border border-[#47333a] relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffcad4]">Ready to take the next step?</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFE5D9] tracking-tight text-balance">
              Let's build a practical digital presence for your Adelaide business.
            </h2>
            <p className="text-sm sm:text-base text-[#D8E2DC] leading-relaxed">
              Book a no-obligation 20-minute discovery call or meet us for coffee in the Adelaide CBD. We will review your current online footprint and provide honest, actionable recommendations.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFE5D9] bg-[#47333a]/80 hover:bg-[#5c434c] rounded-xl border border-[#9d8189]/50 transition-all"
              >
                <span>Check Transparent Pricing</span>
              </button>
            </div>
            <p className="text-xs text-[#D8E2DC]/80 pt-2">
              (08) 8123 4567 · Level 2, 115 King William Street, Adelaide SA 5000
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
