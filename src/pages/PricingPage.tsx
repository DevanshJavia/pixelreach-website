import React, { useState } from 'react';
import { PageId } from '../types';
import { pricingPlans, pricingAddOns, pricingFaqs } from '../data/pricingData';
import { 
  Check, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Calculator, 
  Sparkles,
  Info
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [basePlanSelected, setBasePlanSelected] = useState<string>('foundation-web');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  // Calculate live estimate in AUD
  const baseCost = basePlanSelected === 'foundation-web' ? 2400 : basePlanSelected === 'local-growth' ? 1250 : 2400;
  const isMonthly = basePlanSelected !== 'foundation-web';

  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const found = pricingAddOns.find((a) => a.id === addOnId);
    return sum + (found ? found.priceAud : 0);
  }, 0);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50 inline-block">
              Transparent Pricing
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              Honest, upfront pricing with zero hidden agency extras.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              All prices published in Australian Dollars (AUD). No locked-in 12-month contracts. You retain 100% intellectual property ownership of your website, tracking accounts, and digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all flex flex-col justify-between ${
                plan.isPopular
                  ? 'bg-[#2c1d23] text-[#FFE5D9] border-2 border-[#f4acb7] shadow-xl shadow-[#2c1d23]/30 relative'
                  : 'bg-white text-[#2c1d23] border border-[#D8E2DC] shadow-sm'
              }`}
            >
              <div>
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f4acb7] text-[#2c1d23] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular Retainer
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${plan.isPopular ? 'text-[#D8E2DC]' : 'text-[#5c434c]'}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className={`my-6 pt-4 border-t ${plan.isPopular ? 'border-[#47333a]' : 'border-[#D8E2DC]/60'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className={`text-xs ${plan.isPopular ? 'text-[#ffcad4]' : 'text-[#9d8189]'}`}>
                      {plan.cadence}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${plan.isPopular ? 'text-[#ffcad4]' : 'text-[#9d8189]'}`}>
                    Included in this plan:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#f4acb7]' : 'text-[#963847]'}`} />
                        <span className={plan.isPopular ? 'text-[#FFE5D9]' : 'text-[#2c1d23]'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-6 border-t ${plan.isPopular ? 'border-[#47333a]' : 'border-[#D8E2DC]/60'}`}>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] shadow-md font-bold'
                      : 'bg-[#2c1d23] hover:bg-[#47333a] text-[#FFE5D9]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Project Cost Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#D8E2DC] p-8 sm:p-10 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE5D9] flex items-center justify-center text-[#963847]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c1d23]">
                Interactive Scope & Add-On Estimator
              </h2>
              <p className="text-xs text-[#5c434c] mt-0.5">
                Select your base foundation or retainer, then toggle optional add-ons to see estimated AUD investment.
              </p>
            </div>
          </div>

          {/* Base Plan Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">1. Select Core Base Service</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pricingPlans.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setBasePlanSelected(p.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all text-xs focus:outline-none ${
                    basePlanSelected === p.id
                      ? 'border-[#f4acb7] bg-[#FFE5D9]/50 text-[#2c1d23] font-bold shadow-xs'
                      : 'border-[#D8E2DC] hover:border-[#f4acb7] text-[#5c434c]'
                  }`}
                >
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-[#963847] mt-1 font-mono font-bold">{p.price} AUD</p>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons Toggles */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">2. Select Optional Specialized Add-Ons</label>
            <div className="space-y-2">
              {pricingAddOns.map((addon) => {
                const isSelected = selectedAddOns.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus:outline-none ${
                      isSelected
                        ? 'border-[#f4acb7] bg-[#FFE5D9]/40 text-[#2c1d23]'
                        : 'border-[#D8E2DC] hover:border-[#f4acb7] text-[#5c434c]'
                    }`}
                  >
                    <div className="space-y-0.5 max-w-md">
                      <div className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                          isSelected ? 'bg-[#f4acb7] border-[#f4acb7] text-[#2c1d23] font-bold' : 'border-[#9d8189] bg-white'
                        }`}>
                          {isSelected && '✓'}
                        </span>
                        <span className="text-xs font-bold text-[#2c1d23]">{addon.name}</span>
                      </div>
                      <p className="text-[11px] text-[#5c434c] ml-6">{addon.description}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#963847] shrink-0 ml-4">
                      +${addon.priceAud} AUD
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Total Bar */}
          <div className="p-5 rounded-2xl bg-[#2c1d23] text-[#FFE5D9] border border-[#47333a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#D8E2DC]/80">Estimated Total Investment:</span>
              <p className="text-2xl font-bold font-mono text-[#f4acb7]">
                ${baseCost + addOnsTotal} AUD {isMonthly ? '/ month' : 'one-off'}
              </p>
              <p className="text-[11px] text-[#D8E2DC]/60 mt-0.5">Excludes GST · Formal written quote provided upon review</p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#f4acb7] hover:bg-[#ffcad4] text-[#2c1d23] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              <span>Confirm Scope on Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9d8189]">Common Inquiries</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1d23] tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#5c434c] mt-2">
            Everything you need to know about working with PixelReach.
          </p>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D8E2DC] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#2c1d23]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9d8189] transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-[#963847]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#D8E2DC]/60 text-xs sm:text-sm text-[#5c434c] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Assurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFE5D9]/30 border border-[#D8E2DC] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#963847] shrink-0" />
            <div>
              <h3 className="font-bold text-[#2c1d23] text-sm">Our Small Business Transparency Guarantee</h3>
              <p className="text-xs text-[#5c434c] mt-0.5">
                We will never charge you for a service you do not need, and you will never receive an unexpected invoice.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-5 py-2.5 bg-[#2c1d23] text-[#FFE5D9] hover:bg-[#47333a] text-xs font-semibold rounded-lg transition-colors"
          >
            Speak with an Adelaide Advisor
          </button>
        </div>
      </section>

    </div>
  );
};
