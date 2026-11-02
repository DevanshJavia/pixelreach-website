import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import brandLogo from '../assets/logo.svg';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#23171c] text-[#D8E2DC] border-t border-[#47333a]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Upper Footer: Core Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={brandLogo}
                alt="PixelReach Logo"
                className="w-8 h-8 rounded-lg shadow-sm"
              />
              <span className="text-xl font-bold tracking-tight text-[#FFE5D9]">
                Pixel<span className="text-[#f4acb7]">Reach</span>
              </span>
            </div>
            
            <p className="text-[#D8E2DC]/80 text-sm leading-relaxed max-w-sm">
              Practical digital marketing that helps Adelaide small businesses get seen, connect with customers and measure progress.
            </p>
            
            <div className="pt-2 text-xs text-[#9d8189] space-y-1">
              <p className="flex items-center gap-1.5 text-[#ffcad4] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#f4acb7] shrink-0" />
                <span>Adelaide Owned & Operated · South Australia</span>
              </p>
              <p className="text-[#D8E2DC]/70">Specialising in sole traders, trade contractors, boutique retail, and local startups.</p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFE5D9] mb-4">Pages</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Portfolio (Concepts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Insights & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#f4acb7] transition-colors focus:outline-none focus-visible:underline"
                >
                  Contact & Book
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFE5D9] mb-4">Core Services</h3>
            <ul className="space-y-2.5 text-sm text-[#D8E2DC]/80">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left hover:text-[#f4acb7] transition-colors"
                >
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left hover:text-[#f4acb7] transition-colors"
                >
                  Search Engine Optimisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left hover:text-[#f4acb7] transition-colors"
                >
                  Social Media Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left hover:text-[#f4acb7] transition-colors"
                >
                  Analytics & Reporting
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="inline-flex items-center gap-1 text-xs text-[#f4acb7] hover:text-[#ffcad4] font-medium"
                >
                  <span>View Transparent Rates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Adelaide Office & Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFE5D9] mb-4">Adelaide Office</h3>
            <ul className="space-y-3 text-sm text-[#D8E2DC]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f4acb7] shrink-0 mt-0.5" />
                <span>Level 2, 115 King William Street, Adelaide SA 5000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f4acb7] shrink-0" />
                <span>(08) 8123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 text-[#f4acb7] shrink-0" />
                <span>hello@pixelreach.com.au</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-[#D8E2DC]/60">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Mon–Fri: 9:00am – 5:00pm ACST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#47333a]">
          <div className="bg-[#2c1d23] rounded-xl p-4 border border-[#47333a] text-xs text-[#D8E2DC]/80 space-y-1.5">
            <p className="font-medium text-[#FFE5D9]">
              Honest Portfolio & Business Disclosure:
            </p>
            <p>
              PixelReach is a fictional digital marketing consultancy website built to demonstrate high-standard static web architecture, accessible UI design, and regional South Australian market positioning. All client case studies and portfolio projects featured across this website are strictly fictional concept projects designed to illustrate strategic methodologies, not real business results.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Acknowledgment & Copyright */}
        <div className="mt-8 pt-6 border-t border-[#36242c] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9d8189]">
          <p>
            PixelReach acknowledges the Kaurna people as the traditional custodians of the Adelaide Plains and pays respect to their Elders past, present and emerging.
          </p>
          <p className="shrink-0 text-[#D8E2DC]/60">
            © {new Date().getFullYear()} PixelReach Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

