"use client"

import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/public/UI/button"
import Image from "next/image"
import { FullMenu } from "./full-menu"
import AdmissionInquiry from "./admissionInquiry"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-gray-200 hover:bg-white/10 transition-colors p-2 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>

            <Image
              src="/UI/button.svg"
              alt="Harvard-Westlake School"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          {/* </CHANGE> */}

          <nav className="flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              className="text-white font-semibold text-xl tracking-wide flex items-center gap-1 hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              Inquiry
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="text-xl text-white font-semibold tracking-wide hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              Payment
            </Button>
          </nav>
        </div>
      </header>


      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}
