import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'foundation-web',
    name: 'Foundation Website',
    subtitle: 'For new ventures, sole traders & established small businesses needing a modern web presence.',
    price: '$2,400',
    cadence: 'AUD one-off investment',
    idealFor: 'Trades, local professionals, consultants, and independent retailers wanting a high-converting digital storefront.',
    features: [
      'Up to 5 custom-designed responsive pages (Home, About, Services, Projects, Contact)',
      'Engineered for mobile speed (under 1.5s load time)',
      'Complete Adelaide on-page SEO foundation & Google indexing setup',
      'High-conversion contact forms with spam protection & instant email alerts',
      'Google Business Profile audit & basic profile sync',
      'Full ownership of all website code, design files, and domain assets',
      '1-on-1 video training session on updating your own content'
    ],
    excludedFeatures: [
      'Ongoing monthly SEO link building',
      'Active social media posting'
    ],
    ctaText: 'Start Foundation Project'
  },
  {
    id: 'local-growth',
    name: 'Local Search & SEO Retainer',
    subtitle: 'For businesses with an existing website who want more inbound phone calls & Google map rankings.',
    price: '$1,250',
    cadence: 'AUD per month (No lock-in)',
    isPopular: true,
    idealFor: 'Businesses with a strong service offering who want consistent monthly visibility across Greater Adelaide.',
    features: [
      'Continuous Google Business Profile management & weekly updates',
      'Adelaide local map pack optimization & suburb keyword targeting',
      'Monthly technical site health audits & Core Web Vitals checks',
      'Quarterly local directory citation building & cleanup (AU directories)',
      '1 dedicated, research-backed local SEO blog article drafted & published per month',
      'Google Analytics 4 conversion tracking & custom Looker Studio dashboard',
      'Monthly 30-minute plain-English video review of rankings & inquiries',
      'Month-to-month agreement: cancel anytime with 14 days notice'
    ],
    ctaText: 'Accelerate Local Search'
  },
  {
    id: 'complete-reach',
    name: 'Complete Digital Partner',
    subtitle: 'All-inclusive marketing team in your corner: web maintenance, local SEO, social content & analytics.',
    price: '$2,400',
    cadence: 'AUD per month (No lock-in)',
    idealFor: 'Growing Adelaide businesses seeking full-service digital execution without the cost of hiring an internal marketing team.',
    features: [
      'Everything included in the Local Search & SEO Retainer',
      'Complete website maintenance, security updates, and priority design edits',
      'Active Social Media Management: 8 branded posts per month across 2 platforms',
      'Custom graphic templates & professional Adelaide-focused copy',
      'Quarterly conversion rate optimization (CRO) landing page tests',
      'Direct WhatsApp / Slack access for urgent marketing questions',
      'Detailed monthly attribution report: exact leads, phone calls & ROI',
      'No lock-in contracts; flexible pauses during seasonal lulls'
    ],
    ctaText: 'Book Partnership Discovery'
  }
];

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  priceAud: number;
  type: 'one-time' | 'monthly';
}

export const pricingAddOns: AddOnOption[] = [
  {
    id: 'copywriting',
    name: 'Professional Copywriting',
    description: 'Bespoke, research-backed Australian English copy for up to 5 web pages.',
    priceAud: 750,
    type: 'one-time'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Stripe Checkout',
    description: 'Shopping cart, product catalog setup (up to 20 products), and secure payment integration.',
    priceAud: 950,
    type: 'one-time'
  },
  {
    id: 'booking-system',
    name: 'Online Booking System Integration',
    description: 'Seamless appointment scheduling (e.g. Calendly, Timely, Halaxy, Square Appointments) embedded into your site.',
    priceAud: 450,
    type: 'one-time'
  },
  {
    id: 'extra-social',
    name: 'Additional Social Platform Management',
    description: 'Extend social media management to an extra platform with tailored monthly content.',
    priceAud: 500,
    type: 'monthly'
  },
  {
    id: 'analytics-audit',
    name: 'Deep-Dive Analytics & Tracking Audit',
    description: 'Complete audit and fix of broken GA4 tracking, pixel tags, and attribution events.',
    priceAud: 650,
    type: 'one-time'
  }
];

export const pricingFaqs = [
  {
    question: 'Are there any hidden fees or locked-in contracts?',
    answer: 'None at all. We quote upfront in Australian Dollars (AUD). All monthly retainers are strictly month-to-month with no minimum commitment beyond 14 days written notice. You also retain 100% full legal ownership of your website, domain, and data assets.'
  },
  {
    question: 'Do you work with businesses outside of Adelaide?',
    answer: 'While our consultancy is based in Adelaide and primarily focused on South Australian small businesses, sole traders, and regional producers (Barossa, Adelaide Hills, Fleurieu Peninsula), we also partner with select small businesses across Australia who value our pragmatic, transparent approach.'
  },
  {
    question: 'How quickly can our new website be launched?',
    answer: 'A standard 5-page Foundation Website is typically completed and launched within 2 to 4 weeks, provided content and feedback are supplied promptly. We agree on a firm timeline before any work commences.'
  },
  {
    question: 'Can I update the website myself once it is built?',
    answer: 'Yes! We configure user-friendly CMS management and record a tailored 20-minute screen video showing you exactly how to update photos, add blog posts, and edit text without breaking layouts.'
  },
  {
    question: 'How do we know if our marketing is actually working?',
    answer: 'We do not report on meaningless vanity metrics. Every month, we review tangible indicators: how many people clicked to call your phone number, how many contact forms were submitted, and where your Google search rankings stand for your key Adelaide suburbs.'
  }
];
