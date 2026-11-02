import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';
import brandLogo from '../assets/logo.svg';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'insights', label: 'Insights' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2c1d23]/95 backdrop-blur-md border-b border-[#47333a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark with ES-bundled SVG asset */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4acb7] rounded-md p-1"
            aria-label="PixelReach Homepage"
          >
            <img
              src={brandLogo}
              alt="PixelReach Logo"
              className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight text-[#FFE5D9] whitespace-nowrap shrink-0">
              Pixel<span className="text-[#f4acb7]">Reach</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4acb7] rounded ${
                    isActive
                      ? 'text-[#FFE5D9] font-semibold'
                      : 'text-[#D8E2DC]/80 hover:text-[#FFE5D9]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f4acb7] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] active:bg-[#f4acb7] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f4acb7] focus-visible:ring-offset-[#2c1d23]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D8E2DC] hover:text-[#FFE5D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4acb7] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2c1d23] border-b border-[#47333a] px-4 pt-2 pb-6 space-y-1">
          <div className="py-2 px-3 text-xs text-[#ffcad4] font-medium flex items-center gap-1.5 border-b border-[#47333a] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Adelaide Digital Marketing</span>
          </div>
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#47333a] text-[#FFE5D9] font-semibold'
                    : 'text-[#D8E2DC] hover:bg-[#3d2a32] hover:text-[#FFE5D9]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 mt-2 border-t border-[#47333a]">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] rounded-lg shadow-sm"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
