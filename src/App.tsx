/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, HelpCircle, ChevronDown, Sparkles, Shield, Bookmark, CheckCircle, Clock } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

import { BRAND_NAME, PRIMARY_PHONE, WHATSAPP_PHONE, FAQS } from "./data";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load locally saved bookings
  const loadBookings = () => {
    const data = localStorage.getItem("repairo_bookings");
    if (data) {
      try {
        setRecentBookings(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse bookings", e);
      }
    }
  };

  useEffect(() => {
    loadBookings();
    
    // Add custom tab title
    document.title = "Expert Appliance Repair Bangalore - Repairo QuickFix";
  }, []);

  const handleOpenBooking = (serviceId: string = "") => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (bookingId: string) => {
    // Reload local storage list
    loadBookings();
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased font-sans flex flex-col justify-between selection:bg-orange-500 selection:text-white" id="repairo-app">
      
      {/* Dynamic Navigation Header */}
      <Header onBookClick={() => handleOpenBooking("")} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => handleOpenBooking("")} />

        {/* Brand Indicators / Floating Booking logs tray if any exist */}
        {recentBookings.length > 0 && (
          <div className="bg-indigo-50 border-y border-indigo-100 py-3 text-xs" id="local-history-indicator">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <Bookmark className="h-4.5 w-4.5 text-orange-500 fill-orange-500/10" />
                <span className="font-bold text-indigo-950">
                  You have <span className="text-orange-600 font-extrabold">{recentBookings.length}</span> doorstep booking requests submitted on this device.
                </span>
              </div>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="bg-indigo-900 text-white rounded px-3 py-1 font-black cursor-pointer hover:bg-indigo-950 transition-colors uppercase tracking-wider text-[10px]"
              >
                {showHistory ? "Hide Booking History" : "View Booking Records & Status"}
              </button>
            </div>
          </div>
        )}

        {/* Interactive Booking History list Drawer */}
        <AnimatePresence>
          {showHistory && recentBookings.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white border-b border-indigo-100 overflow-hidden"
              id="local-booking-list-drawer"
            >
              <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-md font-extrabold text-indigo-950">Active Doorstep Bookings</h4>
                  <p className="text-xs text-slate-400 font-bold">Refreshed: Real-time</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentBookings.map((b, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-4.5 bg-slate-50 space-y-2.5 shadow-inner">
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-slate-400 font-bold uppercase">{b.bookingId}</span>
                        <span className="bg-emerald-100 text-emerald-800 font-black text-[9px] px-2 py-0.5 rounded flex items-center gap-1 uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>Slot Reserved</span>
                        </span>
                      </div>
                      
                      <div className="text-xs text-slate-750 font-bold space-y-1">
                        <p className="text-indigo-950 text-sm font-black">{b.customerName}</p>
                        <p className="text-slate-600">{b.serviceType === "washing-machine" ? "Washing Machine Repair" : b.serviceType === "ac-service" ? "AC Service" : b.serviceType === "refrigerator" ? "Refrigerator Repair" : "Appliance Service"}</p>
                        <p className="text-slate-500 font-medium">{b.locality} Area - {b.bookingAddress}</p>
                        <p className="text-indigo-900 flex items-center gap-1 font-extrabold text-[11px] pt-1">
                          <Clock className="h-3.5 w-3.5 text-orange-500" />
                          <span>Slot: {b.selectedSlot}</span>
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex gap-2">
                        <a
                          href={`tel:${PRIMARY_PHONE}`}
                          className="w-full text-center py-1.5 bg-orange-500 text-white rounded text-[10px] font-bold block"
                        >
                          Call Dispatch to Fast-Track
                        </a>
                        <a
                          href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20checking%20status%20for%20BookingId%20${b.bookingId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-1.5 bg-emerald-600 text-white rounded text-[10px] font-bold block"
                        >
                          WhatsApp Status
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Showcase Category */}
        <ServicesSection onServiceSelect={(id) => handleOpenBooking(id)} />

        {/* Pricing Transparency & Waiver */}
        <PricingSection onBookClick={() => handleOpenBooking("")} />

        {/* Pillars / Core Highlights block */}
        <Highlights />

        {/* Customer Reviews and Experiences */}
        <Testimonials />

        {/* Interactive accordion FAQ Block */}
        <section className="py-12 bg-slate-50 border-t border-slate-200" id="faqs-section">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-rose-600 bg-rose-100 px-2.5 py-1 rounded inline-block">
                Assurance Hub
              </span>
              <h2 className="text-2xl font-extrabold font-display text-slate-900 tracking-tight">
                Frequently Asked Pricing & Safety Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-650 font-medium">
                Clear answers regarding our Bangalore service dispatches, parts replacement warranty terms, and billing structure.
              </p>
            </div>

            <div className="space-y-3.5 rounded-xl bg-white border border-slate-200 p-5 md:p-6" id="faqs-list">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left py-2.5 font-bold font-display text-slate-850 hover:text-slate-900 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-4.5 w-4.5 text-slate-400 shrink-0 transform transition-transform duration-200 ${
                        openFaqIndex === idx ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <p className="pl-7 text-xs text-slate-600 leading-relaxed font-semibold pb-1.5">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Support disclaimer box */}
            <div className="mt-6 bg-slate-950 text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-orange-400 shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">Have other appliance doubts?</h4>
                  <p className="text-xs text-slate-300 font-semibold leading-normal mt-0.5">Our Bangalore diagnostic team answers on the phone instantly.</p>
                </div>
              </div>
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="bg-orange-500 hover:bg-orange-600 text-white font-mono uppercase tracking-wider font-bold text-[11px] px-4 py-2.5 rounded transition-colors shadow"
              >
                Speak to Expert: {PRIMARY_PHONE}
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Modal for Booking appointment */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-55 overflow-y-auto flex items-center justify-center p-4" id="booking-modal-overlay">
            {/* Backdrop dark shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative w-full max-w-xl z-10"
            >
              <BookingForm
                initialServiceId={selectedServiceId}
                onClose={() => setIsBookingOpen(false)}
                onSubmitSuccess={handleBookingSuccess}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky Call/WhatsApp bottom Action bar exclusively for mobile layouts */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow px-4 py-2.5 grid grid-cols-2 gap-3.5" id="mobile-sticky-cta-bar">
        {/* Telephone Dial support bar */}
        <a
          href={`tel:${PRIMARY_PHONE}`}
          id="mobile-sticky-phone-dial"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-mono rounded-lg shadow-sm py-2.5 px-1 tracking-wider uppercase font-bold text-center text-xs active:scale-95 transition-all cursor-pointer"
        >
          <Phone className="h-3.5 w-3.5 fill-white" />
          <div className="text-left leading-tight font-sans">
            <span className="block text-[8px] uppercase text-orange-100 font-bold tracking-tight">Visit at ₹199</span>
            <span className="text-xs font-black">{PRIMARY_PHONE}</span>
          </div>
        </a>

        {/* WhatsApp Chat link bar */}
        <a
          href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%2520I%2520want%2520to%2520schedule%2520doorstep%2520service%2520in%2520Bangalore.%2520Please%2520assign%2520technician.`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-chat"
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-mono rounded-lg shadow-sm py-2.5 px-1 tracking-wider uppercase font-bold text-center text-xs active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare className="h-3.5 w-3.5 fill-white animate-pulse" />
          <div className="text-left leading-tight font-sans">
            <span className="block text-[8px] uppercase text-emerald-100 font-bold tracking-tight">Active Online Chat</span>
            <span className="text-xs font-bold">WhatsApp Now</span>
          </div>
        </a>
      </div>

    </div>
  );
}
