import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Website Design & Development',
    shortDescription: 'Modern, high-speed, mobile-optimised websites engineered specifically to turn Adelaide visitors into confirmed inquiries and sales.',
    longDescription: 'Most small business websites look okay on desktop but load slowly, break on mobile, and confuse potential customers. We build clean, responsive, accessible websites focused on clear customer journeys, swift page speeds, and prominent calls to action. Every site is built with modern web standards, strong on-page technical SEO, and complete mobile friendliness.',
    idealFor: 'Adelaide sole traders, trades businesses, local medical & allied health practices, and boutique service providers.',
    deliverables: [
      'Bespoke, brand-aligned responsive design for mobile, tablet, and desktop',
      'Ultra-fast loading speeds under 1.5s for superior Google Core Web Vitals',
      'Clear contact forms, click-to-call buttons, and inquiry funnels',
      'Accessible WCAG-compliant typography and contrast standards',
      'Content Management System (CMS) setup with handover video guide',
      'Technical on-page SEO foundation, sitemaps, and SSL security configuration'
    ],
    keyBenefit: 'Turn casual mobile searchers into phone calls and booking requests without confusion.',
    iconName: 'layout'
  },
  {
    id: 'seo',
    number: '02',
    title: 'Search Engine Optimisation (SEO)',
    shortDescription: 'Local Adelaide SEO and Google Business Profile optimisation to put your business directly in front of buyers searching in your area.',
    longDescription: 'When someone in Adelaide searches for your service on their phone, do you show up in the top Google Maps results or on page three? Our SEO focuses squarely on practical local search visibility. We optimise your Google Business Profile, audit your website architecture, target high-intent Adelaide keywords, and build authentic local citations across South Australian directories.',
    idealFor: 'Businesses with a physical Adelaide location or mobile service area seeking consistent inbound organic inquiries.',
    deliverables: [
      'Comprehensive Google Business Profile audit, setup, and category tuning',
      'High-intent Adelaide keyword mapping for high-conversion searches',
      'On-page optimisation (meta tags, header hierarchy, internal linking)',
      'Local schema markup (LocalBusiness JSON-LD) implementation',
      'South Australian directory citation cleanup and review strategy',
      'Quarterly local competitor ranking and visibility breakdown'
    ],
    keyBenefit: 'Show up in the Google Maps top-3 local pack when nearby customers need your service.',
    iconName: 'search'
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Management',
    shortDescription: 'Consistent, professional social content that showcases your craft, answers customer questions, and builds community trust.',
    longDescription: 'You do not need to dance on TikTok to win customers in South Australia. You need clear, consistent, and authentic communication that demonstrates your reliability and expertise. We develop monthly content schedules, design branded graphic templates, write engaging captions, and manage posting across Instagram, Facebook, and LinkedIn so your channels stay active without draining your time.',
    idealFor: 'Time-poor business owners who want a polished, active presence without spending hours every week on content creation.',
    deliverables: [
      'Monthly strategic content calendars aligned with local seasonal buying habits',
      'Custom branded graphic templates designed for easy multi-format sharing',
      'Compelling, plain-English caption writing highlighting your local projects',
      'Strategic hashtag and geotag research for Greater Adelaide and SA regions',
      'Active community engagement guidelines and inquiry routing',
      'Monthly performance snapshots covering engagement, reach, and profile clicks'
    ],
    keyBenefit: 'Maintain a dependable, trustworthy brand presence that reassures buyers before they hire you.',
    iconName: 'share-2'
  },
  {
    id: 'analytics',
    number: '04',
    title: 'Digital Analytics & Reporting',
    shortDescription: 'Clear, plain-English monthly dashboards and tracking setups so you always know where your leads come from and what is working.',
    longDescription: 'Vanity metrics like impressions and arbitrary hits do not pay the bills. We configure Google Analytics 4 (GA4) and Google Tag Manager properly to measure what actually matters: phone clicks, contact form submissions, quote downloads, and booking button presses. Every month, you receive a concise 1-page summary explaining your trends and recommended next steps.',
    idealFor: 'Owners who want transparent accountability and clear data to guide their marketing investments.',
    deliverables: [
      'Clean Google Analytics 4 (GA4) setup with custom conversion event tracking',
      'Google Tag Manager container deployment for phone and email click tracking',
      'Custom interactive Google Looker Studio dashboard tailored to your KPIs',
      'Monthly plain-English PDF executive summary highlighting inquiries and ROI',
      'Lead attribution mapping (Google Search vs. Social vs. Direct vs. Referral)',
      'Practical recommendations on which pages or channels deserve more focus'
    ],
    keyBenefit: 'Eliminate guesswork and know with certainty which marketing efforts generate genuine revenue.',
    iconName: 'bar-chart-3'
  }
];
