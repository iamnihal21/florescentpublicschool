"use client"

import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@"
import Image from "next/image"
import { FullMenu } from "./full-menu"
import AdmissionInquiry from "./admissionInquiry"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between w-full">

          {/* LEFT — Menu + Logo, always left aligned */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-gray-200 hover:bg-white/10 transition p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </Button>

            <Image
              src="/UI/button.svg"
              alt="School Logo"
              width={200}
              height={80}
              className="h-12 w-auto md:h-16"
            />
          </div>

          {/* RIGHT — Inquiry + Payment (visible even on mobile) */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              className="text-white font-semibold text-base md:text-xl tracking-wide flex items-center gap-1 hover:text-gray-200 hover:bg-transparent p-0"
            >
              Inquiry
              <ChevronDown className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              className="text-white font-semibold text-base md:text-xl tracking-wide hover:text-gray-200 hover:bg-transparent p-0"
            >
              Payment
            </Button>
          </nav>
        </div>
      </header>

      {/* Popups */}
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}