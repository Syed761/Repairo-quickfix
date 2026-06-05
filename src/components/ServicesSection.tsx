/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageSquare, RotateCw, Wind, Flame, Check, Shield, ArrowRight } from "lucide-react";
import { SERVICES, PRIMARY_PHONE, WHATSAPP_PHONE } from "../data";

interface ServicesSectionProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  // Map icons safely
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "WashingMachine":
        return <RotateCw className="h-6 w-6 text-orange-500 animate-spin-slow" />;
      case "AirConditioner":
        return <Wind className="h-6 w-6 text-blue-500" />;
      case "Refrigerator":
        return <Flame className="h-6 w-6 text-cyan-500" />;
      default:
        return <RotateCw className="h-6 w-6 text-orange-500" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200" id="services-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded inline-block">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Premium Appliance Solutions: On-Site Doorstep Fixes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Our skilled Indian service technicians visit your Bangalore home in uniform, diagnose with modern tools, and fix issues instantly on standard rate cards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group h-full"
            >
              {/* Image Banner Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={`${service.name} doorstep service inside a Bangalore household`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm shadow-sm px-2 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 animate-pulse">
                  <div className="p-1 bg-slate-50 shadow-inner rounded">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-900 leading-none">Repairo Pro</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-black font-display tracking-tight leading-tight">{service.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Standard Rate Highlighting */}
                  <div className="bg-orange-50/70 border border-orange-100 px-3 py-2 rounded-lg flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 font-display">Diagnostic Fee:</span>
                    <span className="font-mono font-bold text-orange-600 bg-orange-100/50 px-1.5 py-0.5 rounded">₹299 (Waived)</span>
                  </div>

                  {/* Feature lists */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Frequent Doorstep Fixes:</span>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <Check className="h-4.5 w-4.5 text-emerald-500 stroke-[3px] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className="w-full bg-blue-900 hover:bg-blue-950 text-white font-mono uppercase tracking-wider font-bold py-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                  >
                    <span>Instant Booking</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${PRIMARY_PHONE}`}
                      className="flex items-center justify-center gap-1 border border-slate-200 hover:bg-slate-50 text-slate-905 font-mono py-2 rounded-lg font-bold transition-all text-center text-[11px]"
                    >
                      <Phone className="h-3 w-3 text-orange-500 fill-orange-500" />
                      <span>Call Now</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20want%20to%20book%20doorstep%20${encodeURIComponent(service.name)}%20in%20Bangalore.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-700 font-mono py-2 rounded-lg font-bold transition-all text-center text-[11px]"
                    >
                      <MessageSquare className="h-3 w-3 text-emerald-600 fill-emerald-600/10" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Genuine Spares Warning note */}
        <div className="mt-12 bg-indigo-950 text-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
              <Shield className="h-5 w-5 stroke-[2.5]" />
              <span>Repairo Spares Guarantee</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Need spare part replacement?</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              We carry certified replacement spares for brands like Samsung, LG, Whirlpool, IFB, Bosch, Daikin, Voltas, and and others. Standardized rate cards are shown before any installation.
            </p>
          </div>
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="bg-white hover:bg-slate-100 text-indigo-950 font-black px-6 py-3 rounded-xl shadow-md transition-all shrink-0 text-sm inline-flex items-center gap-2"
          >
            <span>Dial Support</span>
            <span>{PRIMARY_PHONE}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
