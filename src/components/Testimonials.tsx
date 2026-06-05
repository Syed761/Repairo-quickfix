/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, Quote, User, MapPin, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [filter, setFilter] = useState<string>("all");

  const filteredReviews = filter === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.serviceReceived.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="testimonials-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2 font-sans">
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded inline-block">
            Customer Love
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Hear What Bangalore Says About Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-605 text-slate-650 font-medium">
            Over 1,500+ happy homes served with transparent pricing. Verified reviews directly from HSR, Whitefield, Koramangala & Indiranagar areas.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              filter === "all"
                ? "bg-slate-905 bg-slate-900 text-white shadow-sm border border-slate-900 font-bold"
                : "bg-slate-100/80 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Reviews
          </button>
          
          <button
            onClick={() => setFilter("washing")}
            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              filter === "washing"
                ? "bg-slate-905 bg-slate-900 text-white shadow-sm border border-slate-900 font-bold"
                : "bg-slate-100/80 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Washing Machine
          </button>

          <button
            onClick={() => setFilter("ac")}
            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              filter === "ac"
                ? "bg-slate-905 bg-slate-900 text-white shadow-sm border border-slate-900 font-bold"
                : "bg-slate-100/80 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Air Conditioner
          </button>

          <button
            onClick={() => setFilter("refrigerator")}
            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              filter === "refrigerator"
                ? "bg-slate-905 bg-slate-900 text-white shadow-sm border border-slate-900 font-bold"
                : "bg-slate-100/80 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Refrigerator
          </button>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {filteredReviews.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between hover:shadow-sm hover:bg-slate-100/30 transition-all group h-full"
            >
              <div className="space-y-3">
                
                {/* Stars Row */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < test.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Main Quote Text */}
                <p className="text-xs text-slate-700 leading-normal font-medium italic relative pl-3.5">
                  <span className="absolute left-0 top-0 text-orange-500 text-lg font-serif">“</span>
                  {test.comment}
                </p>

              </div>

              {/* Customer Profile badge */}
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-2.5">
                <div className="h-8.5 w-8.5 rounded-lg bg-orange-600 border border-orange-500 font-bold text-white flex items-center justify-center text-xs shadow-inner shrink-0 uppercase">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-none font-display">{test.name}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1">
                    <MapPin className="h-2.5 w-2.5 text-orange-500 shrink-0" />
                    <span className="truncate">{test.location}</span>
                  </div>
                </div>
              </div>

              {/* Tag Service Received */}
              <div className="mt-3 pt-2.5 border-t border-slate-200 flex justify-between items-center text-[9px] font-mono font-bold text-indigo-950 uppercase">
                <span className="bg-orange-100 text-orange-850 px-2 py-0.5 rounded">
                  {test.serviceReceived}
                </span>
                <span className="text-slate-400">{test.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Live Counter Display */}
        <div className="mt-10 bg-orange-50 rounded-xl p-4 text-center max-w-xl mx-auto border border-orange-200">
          <div className="flex items-center justify-center gap-1 text-[10px] font-extrabold uppercase text-orange-800 mb-1.5 font-mono">
            <Sparkles className="h-4 w-4 text-orange-600 animate-pulse" />
            <span>Bangalore Live Dispatch Logs</span>
          </div>
          <p className="text-xs text-slate-800 font-bold leading-normal leading-snug">
            Over <span className="text-orange-600 text-sm font-extrabold font-mono">27 appliances</span> diagnosed and serviced today inside Koramangala, Sarjapur Road, and HSR Layout areas alone. Secure your doorstep slot today.
          </p>
        </div>

      </div>
    </section>
  );
}
