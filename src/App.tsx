/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ConceptProject, InsightArticle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { InsightsPage } from './pages/InsightsPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { ConceptProjectModal } from './components/ConceptProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { portfolioConceptProjects } from './data/portfolioData';
import { insightsArticles } from './data/articlesData';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const validPages: PageId[] = ['home', 'about', 'services', 'portfolio', 'insights', 'pricing', 'contact'];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [activeProject, setActiveProject] = useState<ConceptProject | null>(null);
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  // Sync hash routing on popstate or hashchange
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and meta description dynamically for optimal SEO
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'PixelReach – Digital Marketing Adelaide',
      about: 'About PixelReach – Adelaide Digital Marketing Consultancy',
      services: 'Services – Web Design, SEO & Analytics Adelaide | PixelReach',
      portfolio: 'Concept Portfolio – South Australian Web & SEO Cases | PixelReach',
      insights: 'Insights & Guides – Digital Marketing for Adelaide Small Business | PixelReach',
      pricing: 'Transparent Pricing & Packages AUD – PixelReach Adelaide',
      contact: 'Book a Consultation – PixelReach Adelaide Digital Marketing'
    };

    const pageDescriptions: Record<PageId, string> = {
      home: 'Practical digital marketing that helps Adelaide small businesses get seen, connect with customers and measure progress.',
      about: 'Learn about PixelReach, our South Australian focus, small-business philosophy, and transparent digital marketing approach.',
      services: 'Explore our 4 core services: Website design & development, local Adelaide SEO, social media management, and analytics.',
      portfolio: 'Concept case studies demonstrating our technical web design, Google Maps local SEO, and analytics architecture in South Australia.',
      insights: 'Fluff-free digital marketing guides, local SEO checklists, and conversion advice for Adelaide small business owners.',
      pricing: 'Transparent Australian Dollar (AUD) pricing for small-business websites, SEO retainers, and analytics tracking with no lock-ins.',
      contact: 'Schedule a free 20-minute discovery call or meet us for coffee in the Adelaide CBD at 115 King William Street.'
    };

    document.title = pageTitles[currentPage] || pageTitles.home;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescriptions[currentPage] || pageDescriptions.home);
    }
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (projectId: string) => {
    const found = portfolioConceptProjects.find((p) => p.id === projectId);
    if (found) {
      setActiveProject(found);
    }
  };

  const handleOpenArticle = (articleId: string) => {
    const found = insightsArticles.find((a) => a.id === articleId);
    if (found) {
      setActiveArticle(found);
    }
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* 3-Zone Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} onOpenProject={handleOpenProject} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage onNavigate={navigateTo} onOpenProject={handleOpenProject} />
        )}
        {currentPage === 'insights' && (
          <InsightsPage onNavigate={navigateTo} onOpenArticle={handleOpenArticle} />
        )}
        {currentPage === 'pricing' && (
          <PricingPage onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Professional Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Concept Project Drawer / Modal */}
      <ConceptProjectModal
        project={activeProject}
        onClose={handleCloseProject}
        onBookCall={() => navigateTo('contact')}
      />

      {/* Interactive Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={handleCloseArticle}
        onBookCall={() => navigateTo('contact')}
      />
    </div>
  );
}
