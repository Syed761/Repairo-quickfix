/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { User, Phone, CheckSquare, MessageSquare, MapPin, Calendar, Clock, FileText, CheckCircle, Sparkles, Check, X } from "lucide-react";
import { BANGALORE_LOCALITIES, SERVICES, TIME_SLOTS, PRIMARY_PHONE, WHATSAPP_PHONE } from "../data";
import { BookingData } from "../types";
import RepairoLogo from "./RepairoLogo";

interface BookingFormProps {
  initialServiceId?: string;
  onClose?: () => void;
  onSubmitSuccess?: (bookingId: string) => void;
}

export default function BookingForm({ initialServiceId = "", onClose, onSubmitSuccess }: BookingFormProps) {
  // Setup standard dates for next 5 days
  const [availableDates, setAvailableDates] = useState<{ value: string; label: string }[]>([]);
  
  // State variables for form inputs
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sameForWhatsapp, setSameForWhatsapp] = useState(true);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [serviceType, setServiceType] = useState(initialServiceId || SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [locality, setLocality] = useState(BANGALORE_LOCALITIES[0]);
  const [bookingAddress, setBookingAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Submitting States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedId, setGeneratedId] = useState("");
  const [validationError, setValidationError] = useState("");

  // Generate date selectors
  useEffect(() => {
    const dates = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 0; i < 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekdays[d.getDay()];
      const dateLabel = `${dayName} (${d.getDate()} ${months[d.getMonth()]})`;
      const dateVal = d.toISOString().split('T')[0];
      dates.push({ value: dateVal, label: dateLabel });
    }
    setAvailableDates(dates);
    setSelectedDate(dates[0].value);
  }, []);

  // Update whatsapp if "Same as phone" checked
  useEffect(() => {
    if (sameForWhatsapp) {
      setWhatsappNumber(phoneNumber);
    }
  }, [phoneNumber, sameForWhatsapp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Simple validation
    if (!customerName.trim()) {
      setValidationError("Please enter your full name.");
      return;
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setValidationError("Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.");
      return;
    }

    if (!sameForWhatsapp && !phoneRegex.test(whatsappNumber)) {
      setValidationError("Please enter a valid 10-digit Indian WhatsApp number.");
      return;
    }

    if (!bookingAddress.trim()) {
      setValidationError("Please provide your complete apartment/house layout address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate database insertion and booking log
    setTimeout(() => {
      const bId = "REPAIRO-" + Math.floor(100000 + Math.random() * 900000);
      setGeneratedId(bId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save to localStorage
      const prevBookingsStr = localStorage.getItem("repairo_bookings") || "[]";
      try {
        const prevBookings = JSON.parse(prevBookingsStr);
        const bookingRecord = {
          bookingId: bId,
          customerName,
          phoneNumber,
          whatsappNumber,
          serviceType,
          selectedDate,
          selectedSlot,
          locality,
          bookingAddress,
          notes,
          timestamp: new Date().toISOString()
        };
        prevBookings.unshift(bookingRecord);
        localStorage.setItem("repairo_bookings", JSON.stringify(prevBookings));
      } catch (err) {
        console.error("Local storage error:", err);
      }

      if (onSubmitSuccess) {
        onSubmitSuccess(bId);
      }
    }, 1100);
  };

  const getServiceName = (id: string) => {
    const sObj = SERVICES.find(s => s.id === id);
    return sObj ? sObj.name : "Appliance Service";
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-4 sm:p-6 text-center max-w-lg mx-auto border border-slate-200 shadow-xl relative" id="booking-success-pnl">
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-605 p-1 bg-slate-100 rounded-full cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm border border-emerald-500">
            <Check className="h-6 w-6 stroke-[3]" />
          </div>
        </div>

        <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded inline-block">
          Order Dispatched Successfully
        </span>

        <h3 className="text-xl font-black font-display text-slate-900 mt-3 tracking-tight">
          Service Appointment Reserved!
        </h3>
        
        <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed font-semibold">
          Your doorstep technician slot has been reserved. A Repairo supervisor is reviewing your request now.
        </p>

        {/* Booking Id Card */}
        <div className="my-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-left space-y-2.5 max-w-md mx-auto">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono font-bold text-slate-400 uppercase text-[10px]">Booking Reference:</span>
            <span className="font-mono font-bold text-slate-900 bg-slate-150 px-2 py-0.5 rounded border border-slate-200 text-xs">
              {generatedId}
            </span>
          </div>

          <div className="border-t border-slate-200 pt-2.5 text-[11px] grid grid-cols-2 gap-y-2 gap-x-4 text-slate-700">
            <div>
              <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase">Customer</span>
              <strong className="text-slate-900 font-sans">{customerName}</strong>
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase">Service</span>
              <strong className="text-slate-900 font-sans">{getServiceName(serviceType)}</strong>
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase">Scheduled Area</span>
              <strong className="text-slate-900 font-sans">{locality}</strong>
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 font-mono font-bold uppercase">Reserved Slot</span>
              <strong className="text-slate-900 font-mono">{selectedSlot}</strong>
            </div>
          </div>
        </div>

        {/* Prompt to double confirm via instant call or WhatsApp */}
        <div className="bg-orange-50/75 border border-orange-100 rounded-lg p-3.5 text-center space-y-2.5 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-orange-900">
            <Sparkles className="h-4 w-4 text-orange-600 animate-pulse" />
            <span>Want Instant Dispatch Approval?</span>
          </div>
          <p className="text-[11px] text-slate-800 leading-normal font-bold">
            Call or WhatsApp us now to instantly assign our closest technician in {locality} to you right away!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center justify-center gap-1.5 w-full bg-orange-500 hover:bg-orange-600 text-white font-mono uppercase tracking-wider font-bold text-[11px] py-2.5 rounded-lg shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 fill-white" />
              <span>Call: {PRIMARY_PHONE}</span>
            </a>
            
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE}?text=Hi%20Repairo%20QuickFix%2C%20I%20just%20submitted%20a%20doorstep%20booking%20with%20ID%20${generatedId}.%20Please%20approve%20technician%20instantly.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono uppercase tracking-wider font-bold text-[11px] py-2.5 rounded-lg shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 text-xs text-slate-500 hover:text-indigo-900 font-bold underline cursor-pointer"
          >
            Go Back
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-lg max-w-xl mx-auto" id="booking-form-box">
      
      {/* Header and top close button if inside modal */}
      <div className="flex justify-between items-start mb-5 pb-4 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <RepairoLogo className="h-9 w-9 shrink-0 mt-0.5" iconOnly />
          <div className="space-y-0.5">
            <h3 className="text-lg font-black text-slate-900 font-display tracking-tight">Book Doorstep Visit</h3>
            <p className="text-[11px] text-slate-500 font-bold">
              No inspection fee (waived completely on repair completion)
            </p>
          </div>
        </div>
        
        {onClose && (
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {validationError && (
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-3.5 mb-5 text-xs text-rose-700 font-semibold flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0"></span>
          <span>{validationError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="booking-name" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Your Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              id="booking-name"
              placeholder="E.g., Suresh Kumar"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-11 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Contact Numbers Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Phone number */}
          <div className="space-y-1.5">
            <label htmlFor="booking-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              10-Digit Mobile Number *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-xs font-extrabold text-slate-400">+91</span>
              <input
                type="tel"
                id="booking-phone"
                placeholder="E.g., 9916571062"
                maxLength={10}
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-13 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Whatsapp Number fields */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="booking-whatsapp" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                WhatsApp Number *
              </label>
              
              <label className="flex items-center gap-1 cursor-pointer select-none text-[10px] font-black text-orange-600 uppercase">
                <input
                  type="checkbox"
                  checked={sameForWhatsapp}
                  onChange={(e) => setSameForWhatsapp(e.target.checked)}
                  className="rounded border-slate-300 text-orange-500 focus:ring-orange-400 h-3 w-3"
                />
                <span>Same as above</span>
              </label>
            </div>
            
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-xs font-extrabold text-slate-400">+91</span>
              <input
                type="tel"
                id="booking-whatsapp"
                placeholder="E.g., 7829007201"
                maxLength={10}
                required
                disabled={sameForWhatsapp}
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value.replace(/\D/g, ''))}
                className={`w-full border rounded-xl py-3 pl-13 pr-4 text-sm font-semibold focus:outline-none focus:bg-white transition-all ${
                  sameForWhatsapp 
                    ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed" 
                    : "bg-slate-50 border-slate-200/80 text-indigo-950 focus:border-indigo-900"
                }`}
              />
            </div>
          </div>

        </div>

        {/* Appliance Category Row */}
        <div className="space-y-1.5">
          <label htmlFor="booking-category" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Select Malfunctioning Appliance *
          </label>
          <div className="relative">
            <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <select
              id="booking-category"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-11 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
              <option value="other-appliance">Other Appliance Repair</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Day Selection */}
          <div className="space-y-1.5">
            <label htmlFor="booking-date" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Doorstep Service Day *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <select
                id="booking-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-11 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {availableDates.map((dateObj) => (
                  <option key={dateObj.value} value={dateObj.value}>
                    {dateObj.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Time slot choice */}
          <div className="space-y-1.5">
            <label htmlFor="booking-slot" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Preferred Diagnostic Slot *
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <select
                id="booking-slot"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-11 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Locality in Bangalore drop-down */}
        <div className="space-y-1.5">
          <label htmlFor="booking-locality" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Bangalore Sector / Locality *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <select
              id="booking-locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 pl-11 pr-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              {BANGALORE_LOCALITIES.map((loc) => (
                <option key={loc} value={loc}>
                  {loc} Area
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-1.5">
          <label htmlFor="booking-address" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Complete Home Address (House/Flat No, Block, Apartment Name) *
          </label>
          <textarea
            id="booking-address"
            rows={2}
            placeholder="E.g., Flat 402, Block B, Silver Crest Apartments, Lane 3"
            required
            value={bookingAddress}
            onChange={(e) => setBookingAddress(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 px-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all"
          />
        </div>

        {/* Notes (brand, model, issue) */}
        <div className="space-y-1.5">
          <label htmlFor="booking-notes" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Appliance Brand & Issue Details (Optional)
          </label>
          <textarea
            id="booking-notes"
            rows={2}
            placeholder="E.g., Samsung. Refrigerator is making a humming sound and freezer is not forming ice properly."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-3 px-4 text-sm text-indigo-950 font-semibold focus:outline-none focus:border-indigo-900 focus:bg-white transition-all"
          />
        </div>

        {/* Final CTA Submission button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black py-4 rounded-xl shadow-lg transition-all hover:shadow-orange-500/20 active:scale-99 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Reserving Dispatch Slot...</span>
              </>
            ) : (
              <>
                <Check className="h-5 w-5 stroke-[3]" />
                <span>Submit & Confirm Appointment</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
