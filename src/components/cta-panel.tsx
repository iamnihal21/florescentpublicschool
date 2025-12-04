"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function CTAPanel() {
  return (
    <div className="relative h-[50vh]">
      {/* Sticky red panel */}
      <div className="sticky top-0 z-30 h-[50vh] bg-[#9E1B34] overflow-hidden">
        {/* Wolverine watermark */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 600" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.5">
            <g className="text-[#FFD700]" stroke="currentColor">
              {/* Simplified wolverine outline */}
              <path d="M200,50 Q250,80 280,120 Q320,180 300,250 Q280,320 320,380 Q360,440 340,500 Q320,560 280,580 Q240,600 200,590 Q160,600 120,580 Q80,560 60,500 Q40,440 80,380 Q120,320 100,250 Q80,180 120,120 Q150,80 200,50" />
              <path d="M150,150 Q180,200 200,180 Q220,200 250,150" />
              <path d="M140,280 Q170,320 200,300 Q230,320 260,280" />
              <path d="M160,400 Q180,450 200,430 Q220,450 240,400" />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8 text-center">
          <p className="text-white text-lg md:text-xl tracking-[0.3em] uppercase mb-2">Discover</p>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Florescent Public School
          </h2>

          {/* Hashtag with underline */}
          <div className="mb-6">
            <p className="text-[#D4A84B] text-base md:text-lg tracking-wider">
              #HW<span className="italic">DISCOVER</span>
            </p>
            <div className="h-0.5 w-full bg-[#D4A84B] mt-1" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            {["CONTACT", "VISIT", "APPLY"].map((label) => (
              <Link
                key={label}
                href="#"
                className="group relative flex items-center bg-[#D4A84B] text-[#333] font-bold text-base tracking-wider px-10 py-3 hover:bg-[#C49A3D] transition-colors"
              >
                <span className="pr-6">{label}</span>
                {/* Chevron accent */}
                <div className="absolute right-0 top-0 h-full flex items-center">
                  <div className="w-7 h-full bg-[#B8923A] flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-[#D4A84B]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
