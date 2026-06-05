/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Clock, ShieldCheck, CreditCard, Home, Sparkles, Award } from "lucide-react";
import { HIGHLIGHTS } from "../data";

export default function Highlights() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="h-7 w-7 text-orange-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-7 w-7 text-indigo-600" />;
      case "CreditCard":
        return <CreditCard className="h-7 w-7 text-rose-500" />;
      case "Home":
        return <Home className="h-7 w-7 text-emerald-500" />;
      default:
        return <Sparkles className="h-7 w-7 text-indigo-500" />;
    }
  };

  return (
    <section className="py-12 bg-indigo-50/20 border-b border-slate-200" id="highlights-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-indigo-900 bg-indigo-100 px-2.5 py-1 rounded inline-block">
            Our Care Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Why Bangalore Trusts Repairo QuickFix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            We don't just repair appliances; we deliver convenience, transparent billing, and complete family peace of mind at your home.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((high) => (
            <div
              key={high.id}
              className="bg-white rounded-xl p-4.5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full"
            >
              <div className="space-y-3">
                {/* Icon wrapper with a soft background gradient */}
                <div className="h-11 w-11 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-102 transition-transform duration-350">
                  {getIconComponent(high.icon)}
                </div>
                
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5 font-display">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>{high.title}</span>
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {high.description}
                </p>
              </div>

              {/* Small subtle visual card accent */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>Bangalore Verified</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Promise Sticker */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-1.5">
              <Award className="h-4.5 w-4.5 text-orange-500 fill-orange-500/10" />
              <span className="text-[10px] font-mono font-bold text-indigo-950 uppercase tracking-wider">100% Satisfaction Guarantee</span>
            </div>
            <div className="hidden sm:block text-slate-300 font-light">|</div>
            <p className="text-xs text-slate-500 font-bold leading-normal">
              If the exact same issue reoccurs within 30 days of repair work, we fix it again FREE of cost.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
