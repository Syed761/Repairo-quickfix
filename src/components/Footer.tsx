/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageSquare, MapPin, Mail, Clock, Heart, Shield } from "lucide-react";
import { BRAND_NAME, PRIMARY_PHONE, WHATSAPP_PHONE, BANGALORE_LOCALITIES } from "../data";
import RepairoLogo from "./RepairoLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 font-medium text-sm pt-16 pb-12" id="footer-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand & Commitment */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <RepairoLogo className="h-8 w-8 shrink-0" iconOnly />
              <span className="text-white text-lg font-black tracking-wider uppercase font-display flex items-center gap-1.5">
                REPAIRO <span className="text-orange-500 text-xs px-1.5 py-0.5 bg-orange-950/60 border border-orange-900 rounded font-mono font-bold uppercase tracking-wider">Expert</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              Bangalore's premium doorstep appliance repair system. We operate with standard, background-verified technicians in official blue uniforms, delivering transparent billing and genuine spare parts across Bengaluru.
            </p>

            <div className="flex gap-3 text-xs text-slate-300 font-bold items-center pt-2">
              <Shield className="h-4.5 w-4.5 text-orange-500" />
              <span>Standard Insurance & Warranty Included</span>
            </div>
          </div>

          {/* Column 2: Quick Contacts */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white text-xs font-black tracking-wider uppercase">Instant Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-orange-500 fill-orange-500/20" />
                  <span>Call: +91 {PRIMARY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20need%20doorstep%20service%20support%20now.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-500 fill-emerald-500/20" />
                  <span>WhatsApp: +91 {WHATSAPP_PHONE}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-indigo-400" />
                <span>Daily: 08:00 AM - 09:30 PM</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-500">
                <MapPin className="h-4 w-4 text-slate-600" />
                <span>Head Office: Sector 4, HSR Layout, Bengaluru</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Coverage Area List (Direct Bangalore localities requested) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-white text-xs font-black tracking-wider uppercase">Active Bangalore Locations</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-semibold">
              We provide rapid same-day dispatch to the following primary tech sectors:
            </p>
            
            {/* Tag pills of Bangalore areas */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {BANGALORE_LOCALITIES.slice(0, 12).map((loc, idx) => (
                <span
                  key={idx}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-350 text-[10px] font-black tracking-tight px-2.5 py-1 rounded transition-colors text-slate-300"
                >
                  {loc} Service
                </span>
              ))}
              <span className="bg-orange-950 text-orange-400 text-[10px] font-black px-2.5 py-1 rounded border border-orange-900">
                & All Other Areas
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-semibold gap-4">
          <p>© {currentYear} {BRAND_NAME} Service Solutions. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Verified doorstep appliance repairs in Bangalore. Crafted with</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            <span>for a reliable home.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
