'use client'

import { useState, useEffect } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../../../../public/UI/button'
import { FullMenu } from './full-menu'
import AdmissionInquiry from '../home/admissionInquiry'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          px-4 py-1.5 md:px-6 md:py-2
          ${scrolled ? 'backdrop-blur-md shadow-lg bg-black/20' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* LEFT — Logo */}
          <div className="flex items-center">
            <Image
              src="/UI/button.svg"
              alt="School Logo"
              width={160} // Slightly reduced width
              height={40}
              priority
              /* REDUCED LOGO HEIGHT: changed h-16 to h-10/12 */
              className="h-8 w-auto md:h-12 transition-all duration-300"
            />
          </div>

          {/* RIGHT — Actions */}
          <nav className="flex items-center gap-2 md:gap-8">
            {/* Inquiry */}
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              /* REMOVED EXTRA HEIGHT: Ensure font size doesn't push height too far */
              className={`
                p-0 font-semibold text-sm md:text-lg tracking-wide h-auto
                transition-all
                ${
                  scrolled
                    ? 'text-white bg-clip-text '
                    : 'text-white'
                }
              `}
            >
              Inquiry
              <ChevronDown
                className={`w-3 h-3 ml-1 ${scrolled ? 'text-yellow-400' : 'text-white'}`}
              />
            </Button>

            {/* Payment */}
            <Button
              variant="ghost"
              className={`
                p-0 font-semibold text-sm md:text-lg tracking-wide h-auto
                transition-all
                ${
                  scrolled
                    ? 'text-white bg-clip-text '
                    : 'text-white'
                }
              `}
            >
              Payment
            </Button>

            {/* Menu */}
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              /* COMPACT PADDING: changed p-2 to p-1 */
              className={` 
                ${
                  scrolled
                    ? 'text-white bg-clip-text '
                    : 'text-gray-200'
                }
              `}
            >
              <Menu className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Modals stay the same */}
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}
