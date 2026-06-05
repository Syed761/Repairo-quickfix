/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Clock, Check, Sparkles, MapPin } from "lucide-react";
import { BRAND_NAME, PRIMARY_PHONE, WHATSAPP_PHONE } from "../data";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-14 lg:pt-12 lg:pb-16" id="hero-section">
      {/* Decorative light effects */}
      <div className="absolute top-0 left-1/4 h-56 w-56 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 h-64 w-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" />
              <span>Bangalore's Most Reliable Doorstep Care Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
              Expert Appliance Repair <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 drop-shadow-sm">
                at Your Doorstep
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl leading-relaxed">
              Professional, same-day repair services across Bangalore. Our uniformed expert technicians resolve issues in washing machines, washing driers, AC units, and refrigerators on-site with 100% genuine spares.
            </p>

            {/* Quick Pricing Badge / Value Indicator */}
            <div className="bg-slate-900/95 border border-slate-850 rounded-xl p-3.5 max-w-md grid grid-cols-3 gap-1.5 text-center divide-x divide-slate-800">
              <div>
                <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">Home Visit</span>
                <span className="text-lg sm:text-xl font-extrabold text-white">₹199</span>
              </div>
              <div className="px-1">
                <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">Inspection</span>
                <span className="text-lg sm:text-xl font-extrabold text-white">₹299</span>
              </div>
              <div className="px-1">
                <span className="block text-[9px] text-orange-400 font-mono font-bold uppercase tracking-wider">Waived Off</span>
                <span className="text-[10px] font-bold text-orange-300 leading-tight block mt-0.5">ON REPAIR</span>
              </div>
            </div>

            {/* Action Buttons (Strictly matching user guidelines for Call Now and WhatsApp) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                id="hero-call-now-cta"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-mono uppercase tracking-wider font-bold px-5 py-3 rounded-lg shadow-sm active:scale-95 transition-all text-center"
              >
                <Phone className="h-4.5 w-4.5 fill-white" />
                <div className="text-left leading-tight font-sans">
                  <span className="block text-[8px] uppercase tracking-wider text-orange-100 font-bold">Tap To Call Now</span>
                  <span className="text-sm font-extrabold">{PRIMARY_PHONE}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20want%20to%20book%20an%20appliance%20repair%20service%20in%20Bangalore.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono uppercase tracking-wider font-bold px-5 py-3 rounded-lg shadow-sm active:scale-95 transition-all text-center"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-white" />
                <div className="text-left leading-tight font-sans">
                  <span className="block text-[8px] uppercase tracking-wider text-emerald-100 font-bold">Message WhatsApp</span>
                  <span className="text-sm font-bold">7829007201</span>
                </div>
              </a>
            </div>

            {/* Micro Highlights inline list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-slate-900">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span>Verified Engineers</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span>Transparent Cost</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span>Doorstep Care</span>
              </div>
            </div>

          </div>

          {/* Graphical Trust Presentation with Indian Technician Context (Right Column) */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              
              {/* Main Decorative Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-600 opacity-20 blur pointer-events-none"></div>
              
              {/* Background Plate representing professional technician */}
              <div className="relative rounded-xl overflow-hidden border border-slate-850 bg-slate-900 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=600"
                  alt="Indian technician wearing professional uniform repairing split air conditioner"
                  className="w-full h-[260px] sm:h-[300px] object-cover object-center scale-102 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay representing the Repairo service brand */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating Badge 1: Verification */}
                <div className="absolute top-3 left-3 bg-slate-950/90 text-white rounded px-2.5 py-1.5 text-[10px] font-mono font-bold border border-slate-800 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-400 fill-orange-400/20" />
                  <span>100% Verified Agents</span>
                </div>

                {/* Floating Badge 2: Bangalore Specifics */}
                <div className="absolute top-3 right-3 bg-slate-950/95 text-white rounded px-2.5 py-1.5 text-[10px] font-mono font-bold border border-slate-800 flex items-center gap-1 shadow-md">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Serving All Areas in Bangalore</span>
                </div>

                {/* Floating Badge 3: Cost Waiver callout */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-950/90 text-white rounded-lg p-3 border border-slate-800 flex items-center justify-between shadow-lg backdrop-blur-sm">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-slate-450 font-mono font-bold block">Exclusive Policy</span>
                    <span className="text-xs font-black text-white">No Inspection Charge</span>
                    <span className="text-[10px] text-slate-350 block">Waived entirely if you agree to repair.</span>
                  </div>
                  <div className="bg-orange-500 text-white text-[10px] font-mono font-bold px-2 py-1 rounded text-center uppercase tracking-wider">
                    <span>Waived</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Instant Booking Callout Widget */}
              <div className="absolute -bottom-6 -right-2 bg-white text-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 hidden sm:block max-w-[190px] animate-bounce-slow">
                <div className="flex items-center gap-1.5 text-orange-600 font-mono text-[10px] font-bold mb-1">
                  <Clock className="h-3.5 w-3.5 animate-spin-slow" />
                  <span>Filling Fast Today</span>
                </div>
                <p className="text-[10px] font-bold text-slate-700 leading-snug mb-1.5">Next available doorstep technician dispatch slot:</p>
                <div className="bg-slate-50 text-slate-900 border border-slate-200 text-[11px] font-mono font-bold py-1 px-2 rounded text-center">
                  03:00 - 05:00 PM
                </div>
                <button 
                  onClick={onBookClick}
                  className="w-full mt-1.5 text-center text-[10px] text-orange-600 hover:text-orange-700 font-bold block underline cursor-pointer"
                >
                  Confirm Slot Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
