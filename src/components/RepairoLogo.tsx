import React from "react";

interface RepairoLogoProps {
  className?: string; // Sizing class for the SVG element, e.g. "h-12 w-12"
  showText?: boolean; // Whether to render "REPAIRO" and "EXPERT HOME SERVICE" below
  iconOnly?: boolean; // If true, only renders the shield logo mark
  textInverse?: boolean; // If true, make the text white/slate-250 instead of brand blue/slate-700
}

export default function RepairoLogo({
  className = "h-12 w-12",
  showText = false,
  iconOnly = false,
  textInverse = false,
}: RepairoLogoProps) {
  // Brand color definitions:
  // Orange: #f26522
  // Blue: #194f80
  
  const logoMark = (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Behind-layer / Shadow and general ambient offset */}
      
      {/* 2. Orange Outer / Backing Shield Accent (provides the 3D orange layering) */}
      <path
        d="M 250 440 C 370 340, 410 240, 410 145 L 250 80 L 90 145 C 90 240, 130 340, 250 440 Z"
        fill="#f26522"
      />
      
      {/* 3. Blue Inner Shield (slightly smaller, layered on top of orange) */}
      <path
        d="M 250 425 C 352 332, 388 240, 388 152 L 250 92 L 112 152 C 112 240, 148 332, 250 425 Z"
        fill="#124775"
      />
      
      {/* 4. Glossy Highlight Cover on right side of shield (subtle 3D split) */}
      <path
        d="M 250 92 L 388 152 C 388 240, 352 332, 250 425 L 250 92 Z"
        fill="#ffffff"
        fillOpacity="0.06"
      />

      {/* 5. Dynamic Sweeping Wrench Tool */}
      {/* The handle of the wrench sweeps behind and around. Here we represent this with a thick blue and orange accented wrapping path */}
      <g>
        {/* Wrench Sweeping Body Outline */}
        <path
          d="M 120 410 C 60 370, 40 280, 120 180 C 140 155, 175 125, 215 105"
          stroke="#194f80"
          strokeWidth="24"
          strokeLinecap="round"
          className="opacity-0" /* Hidden helper */
        />

        {/* Bottom Left Wrench Head / Mouth */}
        <g transform="translate(130, 360) rotate(-45)">
          {/* Wrench Outer circle shape */}
          <path
            d="M -35 -35 C -55 -15, -55 15, -35 35 C -15 55, 15 55, 35 35 C 55 15, 55 -15, 35 -35"
            fill="#194f80"
            stroke="#ffffff"
            strokeWidth="5"
          />
          {/* Wrench Jaw Cutout */}
          <rect x="-14" y="-55" width="28" height="60" fill="#f26522" rx="4" />
        </g>

        {/* Top Right Wrench Head / Mouth */}
        <g transform="translate(370, 140) rotate(135)">
          {/* Wrench Outer circle shape */}
          <path
            d="M -30 -30 C -48 -12, -48 12, -30 30 C -12 48, 12 48, 30 30 C 48 12, 48 -12, 30 -30"
            fill="#194f80"
            stroke="#ffffff"
            strokeWidth="5"
          />
          {/* Wrench Jaw Cutout */}
          <rect x="-12" y="-45" width="24" height="50" fill="#f26522" rx="4" />
        </g>

        {/* Bridge handle segment overlay */}
        <path
          d="M 140 350 C 110 320, 110 260, 160 215 C 210 170, 290 130, 350 150"
          stroke="#194f80"
          strokeWidth="32"
          strokeLinecap="round"
          className="mix-blend-normal"
        />
        <path
          d="M 140 350 C 110 320, 110 260, 160 215 C 210 170, 290 130, 350 150"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.15"
        />
      </g>

      {/* 6. Appliance Outlines inside the shield */}
      <g stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        
        {/* A. Air Conditioner unit (Top center) */}
        <g transform="translate(0, -10)">
          {/* AC Frame */}
          <rect x="200" y="150" width="100" height="35" rx="5" strokeWidth="10" />
          {/* AC Vent flap line */}
          <line x1="210" y1="172" x2="290" y2="172" strokeWidth="6" />
          {/* Display indicator */}
          <circle cx="275" cy="161" r="3" fill="#ffffff" stroke="none" />
          {/* Temperature indicator line segment */}
          <line x1="260" y1="161" x2="268" y2="161" strokeWidth="4" />

          {/* Heating / Cooling air flow lines (3 wavy vertical strokes) */}
          <path d="M 235 198 Q 230 208, 235 218 Q 240 228, 235 238" strokeWidth="6" />
          <path d="M 250 198 Q 245 208, 250 218 Q 255 228, 250 238" strokeWidth="6" />
          <path d="M 265 198 Q 260 208, 265 218 Q 270 228, 265 238" strokeWidth="6" />
        </g>

        {/* B. Washing Machine (Bottom left of internal layout) */}
        <g transform="translate(180, 245)">
          {/* Outer Frame */}
          <rect x="0" y="0" width="60" height="70" rx="6" strokeWidth="10" />
          {/* Control Drawer Line */}
          <line x1="8" y1="16" x2="52" y2="16" strokeWidth="6" />
          {/* Liquid Drawer outline */}
          <rect x="10" y="6" width="12" height="6" rx="1" strokeWidth="4" />
          {/* Dial and indicators */}
          <circle cx="45" cy="9" r="2.5" fill="#ffffff" />
          {/* Rounded central door */}
          <circle cx="30" cy="42" r="18" strokeWidth="8" />
          {/* Glass window reflection accent */}
          <path d="M 22 42 A 8 8 0 0 1 30 34" strokeWidth="4" />
        </g>

        {/* C. Refrigerator Unit (Bottom right of internal layout) */}
        <g transform="translate(260, 215)">
          {/* Double-door tall frame */}
          <rect x="0" y="0" width="60" height="100" rx="6" strokeWidth="10" />
          {/* Freezer / Fridge Split Horizontal Line */}
          <line x1="8" y1="45" x2="52" y2="45" strokeWidth="6" />
          
          {/* Freezer vertical dividing handle */}
          <line x1="14" y1="14" x2="14" y2="34" strokeWidth="8" />
          {/* Main fridge door vertical handle */}
          <line x1="14" y1="56" x2="14" y2="86" strokeWidth="8" />

          {/* Ice dispenser on freezer door (traditional double door detail) */}
          <rect x="35" y="16" width="12" height="15" rx="2" strokeWidth="4" />
        </g>
      </g>
    </svg>
  );

  if (iconOnly) {
    return logoMark;
  }

  // If we should render the text alongside or below
  return (
    <div className="flex flex-col items-center text-center select-none">
      {logoMark}
      {showText && (
        <div className="mt-3 font-display">
          <h1
            className={`text-2xl font-extrabold tracking-widest leading-none ${
              textInverse ? "text-white" : "text-slate-900"
            }`}
          >
            REPAIRO
          </h1>
          <p
            className={`text-[9px] font-mono tracking-widest uppercase mt-1.5 font-bold ${
              textInverse ? "text-orange-400" : "text-slate-500"
            }`}
          >
            EXPERT HOME SERVICE
          </p>
        </div>
      )}
    </div>
  );
}
