import { ConceptProject } from '../types';

export const portfolioConceptProjects: ConceptProject[] = [
  {
    id: 'norwood-coffee',
    title: 'Norwood Specialty Coffee Roasters',
    category: 'Website Design',
    location: 'Norwood, Adelaide SA',
    summary: 'Concept e-commerce and local pickup platform built for an independent South Australian roastery.',
    industry: 'Hospitality & Specialty Retail',
    challenge: 'A fictional artisan roastery needed to bridge foot traffic from The Parade with weekly recurring coffee bean subscriptions for South Australian home baristas.',
    strategy: 'Designed an unhurried, tactile online shopping experience with clear roast profile guides, streamlined 2-step checkout, and prominent Adelaide metro dispatch timelines.',
    deliverables: [
      'Responsive multi-device e-commerce concept',
      'Interactive bean finder quiz & grind selector',
      'Local pickup dispatch time indicator',
      'Accessible typography & high-contrast product cards'
    ],
    metricsHypothesis: 'Targeting sub-1.2s mobile load times and a friction-free recurring subscription workflow.',
    techStack: ['Modern Responsive Frontend', 'Tailwind CSS', 'Structured Product Schema', 'Local Store Pickup API Pattern'],
    colorTheme: 'from-amber-900/10 to-stone-900/20'
  },
  {
    id: 'hills-eco-retreat',
    title: 'Adelaide Hills Eco-Pavilions',
    category: 'Website Design',
    location: 'Crafers / Stirling, Adelaide Hills SA',
    summary: 'Concept boutique tourism booking portal showcasing sustainable luxury accommodation in the Mount Lofty Ranges.',
    industry: 'Regional Tourism & Hospitality',
    challenge: 'Prospective guests needed reassurance regarding seasonal accessibility, sustainable design, and seamless mobile weekend getaway reservations.',
    strategy: 'Crafted an airy, tranquil layout balancing landscape vistas with an interactive pavilion availability calendar and curated local itinerary maps.',
    deliverables: [
      'Direct reservation booking UI concept',
      'Interactive Adelaide Hills seasonal itinerary guide',
      'Integrated Google Maps coordinates & scenic driving route',
      'Fast image gallery with lazy loading and semantic alt text'
    ],
    metricsHypothesis: 'Engineered to reduce third-party booking commissions through a compelling direct reservation experience.',
    techStack: ['Mobile-First Layout', 'SVG Map Embed', 'Booking Flow Architecture', 'Accessibility Contrast Testing'],
    colorTheme: 'from-emerald-950/20 to-slate-900/30'
  },
  {
    id: 'bowden-joinery',
    title: 'Bowden Architectural Joinery',
    category: 'SEO Strategy',
    location: 'Bowden / Brompton, Adelaide SA',
    summary: 'Concept local SEO roadmap and portfolio showcase for high-end residential cabinetmakers in Adelaide.',
    industry: 'Building & Construction Trades',
    challenge: 'Local residential architects and homeowners struggled to discover custom cabinetry specialists during the early planning and council submission phases.',
    strategy: 'Structured localized search pages targeting inner-suburb queries (e.g., "custom cabinetry Unley", "architectural joinery Adelaide") paired with project specification sheets.',
    deliverables: [
      'Adelaide suburb-by-suburb SEO keyword architecture',
      'Detailed project portfolio layout with material specifications',
      'Google Business Profile category mapping blueprint',
      'On-page Schema.org HomeAndConstructionBusiness structured data'
    ],
    metricsHypothesis: 'Aimed at capturing organic commercial search queries from Adelaide architects and interior designers.',
    techStack: ['Local SEO Architecture', 'JSON-LD Schema', 'Suburbs Directory Strategy', 'Mobile Speed Optimisation'],
    colorTheme: 'from-blue-950/20 to-slate-900/30'
  },
  {
    id: 'king-william-legal',
    title: 'King William Street Advisory',
    category: 'Analytics & Reporting',
    location: 'Adelaide CBD, SA',
    summary: 'Concept measurement framework and consultation booking funnel for a boutique commercial legal practice.',
    industry: 'Professional & Legal Services',
    challenge: 'The practice had no clear attribution data regarding whether high-value corporate inquiries originated from referral sites, Google search, or local business listings.',
    strategy: 'Deployed Google Analytics 4 conversion tracking paired with Google Tag Manager for confidential consultation request forms and direct phone taps.',
    deliverables: [
      'GA4 event tracking schema for inquiry qualification',
      'Executive 1-page Looker Studio dashboard mockup',
      'Mobile-optimized discrete consultation scheduler',
      'Privacy-first analytics policy complying with Australian Privacy Principles'
    ],
    metricsHypothesis: 'Full attribution transparency enabling the firm to verify exact customer acquisition cost per practice area.',
    techStack: ['GA4 Conversion Schema', 'Google Tag Manager', 'Looker Studio Blueprint', 'Privacy-Compliant Funnel'],
    colorTheme: 'from-indigo-950/20 to-purple-950/30'
  },
  {
    id: 'semaphore-surf',
    title: 'Semaphore Coastal Gear & Apparel',
    category: 'Social Media',
    location: 'Semaphore, Adelaide SA',
    summary: 'Concept social media content framework and community engagement system for a heritage beachside retailer.',
    industry: 'Retail & Outdoor Lifestyle',
    challenge: 'Seasonal winter drops experienced steep revenue dips while summer stock sold out unpredictably without pre-launch customer anticipation.',
    strategy: 'Built a 12-month calendar dividing the year into quarterly community surf forecasts, local beach cleanup highlights, and VIP product drop teasers.',
    deliverables: [
      'Multi-format visual Instagram & Facebook template system',
      'Adelaide coastal micro-influencer collaboration guidelines',
      'South Australian seasonal weather-responsive post triggers',
      'Direct message automated response scripts for common size/stock queries'
    ],
    metricsHypothesis: 'Targeting stable year-round customer footfall and steady organic engagement across Adelaide western suburbs.',
    techStack: ['Content Calendar System', 'Graphic Template Spec', 'Meta Business Suite Plan', 'Engagement SLA Guide'],
    colorTheme: 'from-cyan-950/20 to-blue-950/30'
  },
  {
    id: 'barossa-provisions',
    title: 'Barossa Valley Artisan Pantry',
    category: 'Analytics & Reporting',
    location: 'Barossa Valley / Adelaide Hills, SA',
    summary: 'Concept regional gourmet food collective platform connecting regional SA producers to Adelaide households.',
    industry: 'Artisan Food & Regional Agriculture',
    challenge: 'Regional producers lacked visibility on which specific gourmet hamper combinations resonated with Adelaide metropolitan gift buyers.',
    strategy: 'Implemented end-to-end cart event tagging, delivery postcode analysis, and seasonal holiday checkout funnel tracking.',
    deliverables: [
      'Postcode-based regional dispatch reporting model',
      'E-commerce cart abandonment analysis template',
      'Adelaide metro next-day delivery notification UI',
      'Interactive producer spotlight directory'
    ],
    metricsHypothesis: 'Clear tracking of seasonal gifting spikes (Easter, Father’s Day, Christmas) to optimize stock allocation.',
    techStack: ['E-Commerce Funnel Tracking', 'Postcode Segmentation', 'Looker Reporting Mockup', 'Responsive UI Grid'],
    colorTheme: 'from-violet-950/20 to-slate-900/30'
  }
];
