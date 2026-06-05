/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, MessageSquare, Menu, X, CheckCircle } from "lucide-react";
import { BRAND_NAME, PRIMARY_PHONE, WHATSAPP_PHONE } from "../data";
import RepairoLogo from "./RepairoLogo";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" id="header-nav">
      {/* Top Banner Alert - Trust Badging */}
      <div className="bg-slate-950 text-white text-[11px] py-1.5 px-4 font-mono flex justify-between items-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">Live Tech Slots Open Today in Bangalore</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400 font-medium">
          <span>✓ Insured Repairs</span>
          <span>✓ 100% Genuine Spares</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <RepairoLogo className="h-9 w-9 shrink-0" iconOnly />
            <div>
              <div className="text-lg font-black font-display text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
                <span>REPAIRO</span>
                <span className="text-orange-600 text-[9px] px-1.5 py-0.5 bg-orange-100 border border-orange-200/50 rounded font-mono font-bold uppercase tracking-wider">Expert</span>
              </div>
              <p className="text-[9px] text-slate-450 font-mono tracking-widest uppercase mt-0.5 font-bold">Expert Home Service</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 font-display font-bold text-slate-650">
            <button onClick={() => scrollToSection("services-section")} className="hover:text-blue-900 text-xs uppercase tracking-wider transition-colors text-left cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection("pricing-section")} className="hover:text-blue-900 text-xs uppercase tracking-wider transition-colors text-left cursor-pointer">
              Pricing
            </button>
            <button onClick={() => scrollToSection("highlights-section")} className="hover:text-blue-950 text-xs uppercase tracking-wider transition-colors text-left cursor-pointer">
              Why Us
            </button>
            <button onClick={() => scrollToSection("testimonials-section")} className="hover:text-blue-900 text-xs uppercase tracking-wider transition-colors text-left cursor-pointer">
              Reviews
            </button>
            <button onClick={() => scrollToSection("faqs-section")} className="hover:text-blue-900 text-xs uppercase tracking-wider transition-colors text-left cursor-pointer">
              FAQs
            </button>
          </nav>

          {/* Call & Book Group */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone calling link */}
            <a
              href={`tel:${PRIMARY_PHONE}`}
              id="desktop-header-call"
              className="flex items-center gap-2 text-slate-900 hover:bg-slate-50 font-mono text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 transition-all font-bold"
            >
              <Phone className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
              <div className="text-left leading-tight">
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold font-sans">Support</span>
                <span className="font-extrabold">{PRIMARY_PHONE}</span>
              </div>
            </a>

            {/* Direct WhatsApp chat */}
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20want%20to%20book%20an%20appliance%20repair%20service%20in%20Bangalore.`}
              target="_blank"
              rel="noopener noreferrer"
              id="desktop-header-whatsapp"
              className="flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-1.5 rounded-lg font-mono font-bold text-xs shadow-sm transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Book doorstep appointment */}
            <button
              onClick={onBookClick}
              id="desktop-header-book-btn"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-mono uppercase tracking-wider font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Book Visit
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              id="mobile-header-call-btn"
              className="p-1.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-100"
              aria-label="Call support"
            >
              <Phone className="h-4.5 w-4.5 fill-orange-600" />
            </a>
            
            <button
              onClick={onBookClick}
              id="mobile-header-book-now"
              className="bg-blue-900 hover:bg-blue-950 text-white font-mono uppercase tracking-wider font-black text-[10px] px-2.5 py-1.5 rounded"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white" id="mobile-drawer-menu">
          <div className="space-y-1.5 px-4 pt-3 pb-6">
            <button
              onClick={() => scrollToSection("services-section")}
              className="block w-full text-left font-semibold text-lg text-slate-800 py-3 border-b border-slate-50"
            >
              Services Offered
            </button>
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="block w-full text-left font-semibold text-lg text-slate-800 py-3 border-b border-slate-50"
            >
              Pricing Details
            </button>
            <button
              onClick={() => scrollToSection("highlights-section")}
              className="block w-full text-left font-semibold text-lg text-slate-800 py-3 border-b border-slate-50"
            >
              Why Repairo QuickFix
            </button>
            <button
              onClick={() => scrollToSection("testimonials-section")}
              className="block w-full text-left font-semibold text-lg text-slate-800 py-3 border-b border-slate-50"
            >
              Customer Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faqs-section")}
              className="block w-full text-left font-semibold text-lg text-slate-800 py-3"
            >
              Frequently Asked Questions
            </button>

            <div className="pt-5 space-y-3">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-indigo-900 to-indigo-950 text-white font-bold py-3.5 rounded-xl text-center shadow"
              >
                <Phone className="h-5 w-5 fill-white" />
                <span>Call Now: {PRIMARY_PHONE}</span>
              </a>

              <a
                href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20want%20to%20book%20an%20appliance%20repair%20service%20in%20Bangalore.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center shadow"
              >
                <MessageSquare className="h-5 w-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
