/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, X, ShieldAlert, Sparkles, TrendingDown, Clock, Percent } from "lucide-react";
import { BRAND_NAME, PRIMARY_PHONE } from "../data";

interface PricingSectionProps {
  onBookClick: () => void;
}

export default function PricingSection({ onBookClick }: PricingSectionProps) {
  return (
    <section className="py-12 bg-white border-b border-slate-200" id="pricing-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded inline-block">
            Simple Billing
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Transparent Pricing & Waiver Terms
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            We value your trust. Our rate card is straightforward, offering unmatched value with our inspection fee waiver guidelines.
          </p>
        </div>

        {/* Diagnostic Cost Breakdown Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Repairo Standard Price Card (Winner) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between border-2 border-orange-500">
            {/* Stamp Callout */}
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-[9px] font-mono font-bold px-4 py-1.5 rounded-bl uppercase tracking-wider">
              Best Waiver Terms
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Standard Plan</span>
                <h3 className="text-xl font-black font-display tracking-tight">{BRAND_NAME} Doorstep Rate</h3>
              </div>

              {/* Pricing Blocks */}
              <div className="grid grid-cols-2 gap-3 border-y border-slate-800 py-4">
                <div>
                  <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-1">Standard Home Visit</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-white">₹199</span>
                    <span className="text-[10px] text-slate-400">fixed visit</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-1">Expert Inspection</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-white">₹299</span>
                    <span className="text-[10px] text-slate-400">waived later</span>
                  </div>
                </div>
              </div>

              {/* Highlight Waiver Text */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 flex items-start gap-2.5">
                <div className="p-1 rounded-full bg-orange-500 text-white shrink-0 mt-0.5">
                  <Percent className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-orange-300 font-display">Waiver Active on repair execution</h4>
                  <p className="text-[11px] text-slate-300 leading-normal mt-0.5 font-medium">
                    When you agree to proceed with the diagnosed appliance repair service, we deduct the entire ₹299 inspection charges from your final invoice! You pay only basic repair parts & labor.
                  </p>
                </div>
              </div>

              {/* Checkpoints of guarantee */}
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2 text-slate-200">
                  <span className="text-emerald-400 font-extrabold">✓</span>
                  <span><strong>On-Site Live Repair:</strong> Restored in your presence.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <span className="text-emerald-400 font-extrabold">✓</span>
                  <span><strong>No post-work shocks:</strong> Fixed quote provided before starting.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <span className="text-emerald-400 font-extrabold">✓</span>
                  <span><strong>Warranty Coverage:</strong> Assured support period behind work.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onBookClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-mono uppercase tracking-wider text-xs font-bold py-3 rounded-lg text-center shadow-sm transition-all"
              >
                Book Doorstep Visit
              </button>
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="w-full border border-slate-800 hover:bg-slate-900 text-white font-mono uppercase tracking-wider text-xs font-bold py-3 rounded-lg text-center"
              >
                Call: {PRIMARY_PHONE}
              </a>
            </div>

          </div>

          {/* Pricing Comparison Panel */}
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Comparison Check</span>
                <h3 className="text-lg font-bold text-slate-900 font-display">Standard Local Mechanics</h3>
              </div>

              {/* Standard mechanic list */}
              <div className="space-y-3">
                <div className="relative pl-5 space-y-0.5">
                  <X className="absolute left-0 top-0.5 h-3.5 w-3.5 text-rose-500 stroke-[3]" />
                  <h4 className="text-xs font-bold text-slate-850">Unregulated Inspection Costs</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Often quote arbitrary numbers starting from ₹500 depending on location.</p>
                </div>

                <div className="relative pl-5 space-y-0.5 border-t border-slate-200/60 pt-3">
                  <X className="absolute left-0 top-3.5 h-3.5 w-3.5 text-rose-500 stroke-[3]" />
                  <h4 className="text-xs font-bold text-slate-850">No Waiver Commitment</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Inspection charges are flatly non-deductible even if you execute expensive repairs.</p>
                </div>

                <div className="relative pl-5 space-y-0.5 border-t border-slate-200/60 pt-3">
                  <X className="absolute left-0 top-3.5 h-3.5 w-3.5 text-rose-500 stroke-[3]" />
                  <h4 className="text-xs font-bold text-slate-850">Duplicate Spare Parts risks</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Sourcing cheaper duplicate spares to maximize local mechanic profits.</p>
                </div>
              </div>

              <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg flex items-start gap-2">
                <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-rose-800 leading-normal font-medium">
                  Don't trust valuable washing machines, split inverter ACs, or smart double door fridges to duplicate spares.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                ★★★★★ Trust Rated by 1,500+ Bangalore Homes
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
