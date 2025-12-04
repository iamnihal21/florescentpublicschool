"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FullMenu } from "./full-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 pl-8 pr-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 -ml-1">
            <Image
              src="/images/hw-logo.svg"
              alt=" Florescent Public School"
              width={180}
              height={72}
              className="h-14 w-auto"
            />
          </div>
          <nav className="flex items-center gap-10">
            <Button
              variant="ghost"
              className="text-white font-medium text-sm tracking-wider flex items-center gap-1 hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              PORTALS
              <ChevronDown className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="ghost"
              className="text-white font-medium text-sm tracking-wider hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              CALENDAR
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="text-white font-medium text-sm tracking-wider hover:text-gray-200 hover:bg-transparent transition-colors flex items-center gap-2 h-auto p-0"
            >
              MENU
              <div className="flex flex-col gap-1">
                <span className="w-6 h-0.5 bg-[#F4A000]" />
                <span className="w-6 h-0.5 bg-[#F4A000]" />
              </div>
            </Button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed top-4 right-6 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => setIsMenuOpen(true)}
          className="bg-[#8B1538] hover:bg-[#7A1230] text-white font-semibold text-sm tracking-wider flex items-center gap-3 h-auto py-3 px-5 rounded-none"
        >
          MENU
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[3px] bg-[#F4A000]" />
            <span className="w-6 h-[3px] bg-[#F4A000]" />
          </div>
        </Button>
      </div>

      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
