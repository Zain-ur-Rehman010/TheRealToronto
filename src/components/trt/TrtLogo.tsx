import type { SVGProps } from "react";

export function TrtLogo({ className = "h-12 w-auto", ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer rounded outline frame (interrupted in the middle for TORONTO) */}
      {/* Top frame */}
      <path
        d="M 90,120 V 90 C 90,82 96,75 104,75 H 196 C 204,75 210,82 210,90 V 120"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Bottom frame */}
      <path
        d="M 90,150 V 180 C 90,188 96,195 104,195 H 196 C 204,195 210,188 210,180 V 150"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Basketball silhouette at the top center */}
      <g>
        {/* White circle base */}
        <circle cx="150" cy="78" r="32" fill="white" />
        
        {/* Basketball seams (black lines) */}
        {/* Horizontal seam */}
        <path
          d="M 118,78 Q 150,86 182,78"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Left seam */}
        <path
          d="M 126,56 Q 144,78 126,100"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Right seam */}
        <path
          d="M 174,56 Q 156,78 174,100"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Vertical seam */}
        <path
          d="M 150,46 V 110"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Red CN Tower in the center */}
        {/* Spire needle */}
        <path
          d="M 149.5,35 H 150.5 V 60 H 149.5 Z"
          fill="#D6001C"
        />
        {/* Main tower body & legs */}
        <path
          d="M 148,60 H 152 L 153.5,110 H 146.5 Z"
          fill="#D6001C"
        />
        {/* Observation Pod */}
        <ellipse cx="150" cy="62" rx="7" ry="3.5" fill="#D6001C" stroke="white" strokeWidth="1" />
        <ellipse cx="150" cy="60" rx="4" ry="1.5" fill="white" />
      </g>

      {/* "THE REAL" text */}
      <text
        x="150"
        y="128"
        fill="white"
        fontSize="13"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        THE REAL
      </text>

      {/* "TORONTO" text (large, bold italic serif) */}
      <text
        x="150"
        y="164"
        fill="white"
        fontSize="38"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Georgia', serif"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        TORONTO
      </text>

      {/* "BASKETBALL LEAGUE" text */}
      <text
        x="150"
        y="184"
        fill="white"
        fontSize="9"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        BASKETBALL LEAGUE
      </text>
    </svg>
  );
}
