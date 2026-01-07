'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../../../../public/UI/button'
import { FullMenu } from './full-menu'
import AdmissionInquiry from '../home/admissionInquiry'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---------- STYLE LOGIC ---------- */

  const headerBg = scrolled
    ? 'bg-gray-700/70 backdrop-blur-md '
    : isHomePage
      ? 'bg-transparent'
      : 'bg-white shadow-sm'

  const textColor = scrolled ? 'text-white' : isHomePage ? 'text-white' : 'text-yellow-400'

  /* ---------- RENDER ---------- */

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          px-4 py-1.5 md:px-6 md:py-2
          ${headerBg}
        `}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* LEFT — Logo */}
          <div className="flex items-center">
            <Image
              src="/UI/button.svg"
              alt="School Logo"
              width={160}
              height={40}
              priority
              className="h-8 w-auto md:h-12 transition-all duration-300"
            />
          </div>

          {/* RIGHT — Actions */}
          <nav className="flex items-center gap-2 md:gap-8">
            {/* Inquiry */}
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              className={`
    p-2 font-semibold text-sm md:text-lg tracking-wide h-auto
    ${textColor}
    hover:bg-yellow-100 hover:text-black
  `}
            >
              Inquiry
              <ChevronDown className="w-3 h-3 ml-1 text-yellow-600" />
            </Button>

            {/* Payment */}
            {/* <Button
              variant="ghost"
              className={`
    p-2 font-semibold text-sm md:text-lg tracking-wide h-auto
    ${textColor}
     hover:bg-yellow-100 hover:text-black
  `}
            >
              Payment
            </Button> */}

            {/* Menu */}
            <Button variant="ghost" onClick={() => setIsMenuOpen(true)} className={`${textColor}  hover:bg-yellow-100 hover:text-black`}>
              <Menu className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Modals */}
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}
