export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'insights' | 'pricing' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  idealFor: string;
  deliverables: string[];
  keyBenefit: string;
  iconName: 'layout' | 'search' | 'share-2' | 'bar-chart-3';
}

export interface ConceptProject {
  id: string;
  title: string;
  category: 'Website Design' | 'SEO Strategy' | 'Social Media' | 'Analytics & Reporting';
  location: string;
  summary: string;
  industry: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  metricsHypothesis: string;
  techStack: string[];
  colorTheme: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'SEO' | 'Web Design' | 'Analytics' | 'Social Media' | 'Strategy';
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  actionChecklist: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  cadence: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  excludedFeatures?: string[];
  ctaText: string;
}
