import React from 'react';
import { PageId } from '../types';
import { MapPin, Users, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50">
              <Compass className="w-3.5 h-3.5 text-[#f4acb7]" />
              <span>About PixelReach Adelaide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              We started PixelReach to provide honest, practical marketing for South Australian small businesses.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              No 12-month handcuffs. No confusing tech jargon. Just reliable websites, local Google Maps rankings, and transparent monthly reporting designed for owners who value straight talk.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story / Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Our Story</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2c1d23] tracking-tight">
              Bridging the gap between corporate agencies and busy sole traders
            </h2>
            <div className="space-y-4 text-[#5c434c] text-sm sm:text-base leading-relaxed">
              <p>
                In Adelaide, word-of-mouth is everything. But when prospective customers hear about your business, the first thing they do is reach for their phone to look you up on Google.
              </p>
              <p>
                Too many South Australian small business owners—from cabinetmakers in Bowden to allied health practitioners in Norwood—have been burned by eastern-state digital agencies charging exorbitant monthly fees with zero understanding of the local market.
              </p>
              <p>
                PixelReach was established with a singular focus: deliver practical, high-standard digital marketing that respects small-business cash flow. We treat every client's marketing budget as if it were our own, prioritizing quick wins and permanent organic assets over fleeting ad spend.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#D8E2DC]">
                <h4 className="font-bold text-[#2c1d23] text-sm mb-1">South Australia First</h4>
                <p className="text-xs text-[#5c434c]">Based in the Adelaide CBD, meeting clients face-to-face from Marion to Barossa.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D8E2DC]">
                <h4 className="font-bold text-[#2c1d23] text-sm mb-1">Complete Transparency</h4>
                <p className="text-xs text-[#5c434c]">Clear monthly reports in plain English. You own all code, accounts, and creative assets.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-2xl p-8 border border-[#47333a] shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-[#FFE5D9] border-b border-[#47333a] pb-3">
                Our Core Principles
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFE5D9]">Practicality Over Hype</h4>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">We implement what actually generates inquiries, avoiding passing social fads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFE5D9]">Fair & Open Pricing</h4>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">Transparent rates published in AUD. No hidden maintenance clauses or surprise invoices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFE5D9]">No Handcuff Retainers</h4>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">We earn your trust every single month. Cancel anytime with two weeks notice.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFE5D9]">Direct Senior Collaboration</h4>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">You talk directly to the specialist executing your website and campaign strategy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-[#D8E2DC]/30 py-16 sm:py-20 border-y border-[#D8E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Client Sectors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1d23] tracking-tight mt-1">
              Who we serve across Greater Adelaide
            </h2>
            <p className="mt-2 text-[#5c434c] text-sm">
              We specialize in service-based businesses, local retailers, and trades where local trust is the ultimate conversion driver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">Trade Contractors & Builders</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Plumbers, electricians, joiners, roofers, and builders who need high-converting mobile sites and top Google Maps positioning across Adelaide suburbs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">Allied Health & Medical Clinics</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Physiotherapy, dental, chiropractic, and psychology clinics needing clear patient booking flows, accessible UI, and high local prominence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">Professional & Legal Advisory</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Accountants, commercial solicitors, bookkeepers, and architects seeking sophisticated digital credibility and qualified inbound consultation requests.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">Boutique Retail & Hospitality</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Specialty roasters, artisan cellars, local fashion boutiques, and venues requiring seamless e-commerce, click-and-collect, and social content.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">South Australian Startups</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Early-stage ventures seeking rapid market validation, conversion-focused landing pages, and clean analytics without huge capital expenditure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D8E2DC] shadow-xs space-y-2">
              <h3 className="font-bold text-[#2c1d23] text-base">Regional Producers & Tourism</h3>
              <p className="text-xs text-[#5c434c] leading-relaxed">
                Wineries, eco-stays, and gourmet producers in the Adelaide Hills, McLaren Vale, and Barossa reaching Adelaide metro and interstate visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adelaide Office & Coffee Chat CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 sm:p-12 border border-[#47333a] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f4acb7]">Meet Locally</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFE5D9] tracking-tight">
              Let's grab a coffee on King William Street
            </h2>
            <p className="text-xs sm:text-sm text-[#D8E2DC]/80 leading-relaxed">
              We are located at Level 2, 115 King William Street in Adelaide. Book a free discovery chat and let's review your website together over an espresso.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-xl shadow-lg transition-all"
            >
              <span>Schedule Discovery Chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
