/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TestimonialItem } from "./types";

export const BRAND_NAME = "Repairo QuickFix";
export const PRIMARY_PHONE = "9916571062";
export const WHATSAPP_PHONE = "7829007201";

export const BANGALORE_LOCALITIES = [
  "Whitefield",
  "Koramangala",
  "HSR Layout",
  "Marathahalli",
  "JP Nagar",
  "Jayanagar",
  "Indiranagar",
  "Hebbal",
  "Yelahanka",
  "Electronic City",
  "BTM Layout",
  "Bellandur",
  "Sarjapur Road",
  "Malleshwaram",
  "Rajajinagar",
  "Banashankari",
  "Kalyan Nagar",
  "Brookefield",
  "RT Nagar",
  "Basaveshwaranagar"
];

export const SERVICES: ServiceItem[] = [
  {
    id: "washing-machine",
    name: "Washing Machine Repair",
    icon: "WashingMachine",
    description: "Expert diagnostics and repairs for all types of washing machines (front-load, top-load, semi-automatic & fully-automatic) of all leading brands.",
    priceDetails: "Inspection ₹299 (Waived on Repair) | Spare parts as per rate card",
    features: [
      "Drum repair & replacement",
      "Inlet/Outlet valve fixing",
      "Motor & drive belt replacement",
      "Control board (PCB) repairs",
      "Unusual noise & vibration fixing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ac-service",
    name: "AC Service & Repair",
    icon: "AirConditioner",
    description: "Comprehensive AC servicing, wet wash, deep cleaning, gas charging, and breakdown repairs for Split and Window ACs.",
    priceDetails: "Wet Clean Service at ₹499 | Breakdown Inspection at ₹299 (Waived on repair)",
    features: [
      "Cooling coil deep cleaning",
      "Refrigerant Gas leak check & top-up",
      "Compressor diagnostic & repair",
      "Remote controller pairing & sensor fixes",
      "Copper piping & water leakage fix"
    ],
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "refrigerator",
    name: "Refrigerator Repair",
    icon: "Refrigerator",
    description: "Prompt troubleshooting and restore services for single door, double door, side-by-side, and smart refrigerators of all brands.",
    priceDetails: "Inspection ₹299 (Waived on Repair) | Direct doorstep fixing",
    features: [
      "Compressor testing & replacement",
      "Gas charging & sealing",
      "Defrost timer & thermostat replacement",
      "Internal fan & door gasket replacement",
      "Power fluctuation control issues"
    ],
    imageUrl: "https://images.unsplash.com/photo-1571175432247-5238ee75ca15?auto=format&fit=crop&q=80&w=800"
  }
];

export const HIGHLIGHTS = [
  {
    id: "same-day",
    title: "Same-Day Service",
    description: "Book before 4 PM for prompt same-day doorstep inspection across Bangalore.",
    icon: "Clock"
  },
  {
    id: "verified",
    title: "Verified Technicians",
    description: "Background checked, skilled, and certified Indian repair professionals wearing branded uniforms.",
    icon: "ShieldCheck"
  },
  {
    id: "transparent",
    title: "Transparent Pricing",
    description: "Visit at ₹199, Inspection at ₹299. The inspection fee is fully waived on repair!",
    icon: "CreditCard"
  },
  {
    id: "doorstep",
    title: "Doorstep Support",
    description: "No hassle of carrying appliances. Complete repairs are done right inside your home.",
    icon: "Home"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    location: "HSR Layout, Bangalore",
    rating: 5,
    comment: "Excellent experience! My LG front-load washing machine was making an awful noise. Technician Rohit arrived within 2 hours in a proper uniform, diagnosed a faulty drum bearing, and repaired it on the spot. Inspection fee was waived, paid only for parts and labor. Fully recommended!",
    serviceReceived: "Washing Machine Repair",
    date: "2 days ago"
  },
  {
    id: "test-2",
    name: "Priyanka Sharma",
    location: "Whitefield, Bangalore",
    rating: 5,
    comment: "The AC was barely cooling. The Repairo technician did a proper jet pump wet wash cleaning. He showed me the transparent rate card of Gas Refills, and did an amazing job. Fast and very satisfying!",
    serviceReceived: "AC Deep Cleaning & Service",
    date: "1 week ago"
  },
  {
    id: "test-3",
    name: "Amit Patel",
    location: "Koramangala, Bangalore",
    rating: 5,
    comment: "Our double-door Samsung refrigerator suddenly stopped cooling overnight. Called Repairo at 9 AM, the tech service was done by 12:30 PM. The technician, Vignesh, was extremely professional, replaced the malfunctioning startup relay, and charged according to standard pricing.",
    serviceReceived: "Refrigerator Diagnostic",
    date: "3 days ago"
  },
  {
    id: "test-4",
    name: "Sneha Nair",
    location: "Indiranagar, Bangalore",
    rating: 5,
    comment: "Very professional doorstep service. No hidden charges. They actually waived off the inspection charge because I proceeded with the repair. The technician was respectful, wore a professional uniform, and cleaned up the area after finishing.",
    serviceReceived: "AC Fan Motor Replacement",
    date: "Yesterday"
  }
];

export const TIME_SLOTS = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "01:00 PM - 03:00 PM",
  "03:00 PM - 05:00 PM",
  "05:00 PM - 07:00 PM",
  "07:00 PM - 09:00 PM"
];

export const FAQS = [
  {
    question: "How do your pricing and waivers work?",
    answer: "Our standard Home Visit charge is ₹199. The expert Diagnostic/Inspection fee is ₹299. However, if you choose to go ahead with the recommended repair, the ₹299 inspection fee is completely waived off!"
  },
  {
    question: "Do you use original spare parts?",
    answer: "Yes, we source and install only 100% brand-authorized, genuine spare parts that come with official warranty support. You will receive a standard GST invoice and clear pricing."
  },
  {
    question: "Are your technicians background verified?",
    answer: "Absolutely. All Repairo technicians are local Indian professionals who undergo strict background verification, technical certifications, and customer safety training. They always wear full Repairo-branded uniforms and carry ID cards."
  },
  {
    question: "Do you offer any warranty on the repair work?",
    answer: "Yes, we offer an assured 30 to 90 days warranty on both spare parts and workmanship depending on the service category."
  }
];
