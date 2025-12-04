"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative z-40 bg-[#2D2D2D] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-[#9E1B34] flex items-center justify-center">
              <Image
                src="/harvard-westlake-school-crest-logo-gold-lion.jpg"
                alt="Florescent Public School Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide">Florescent</p>
              <p className="text-xl font-bold tracking-wide">Public</p>
              <p className="text-sm tracking-[0.2em] text-gray-400">SCHOOL</p>
            </div>
          </div>

          {/* Top navigation */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm tracking-wider hover:text-[#D4A84B] transition-colors">
              PORTALS <span className="text-xs">∨</span>
            </Link>
            <Link href="#" className="text-sm tracking-wider hover:text-[#D4A84B] transition-colors">
              CALENDAR
            </Link>
            <button className="flex items-center gap-2 bg-[#9E1B34] px-4 py-2">
              <span className="text-sm font-bold tracking-wider">MENU</span>
              <div className="flex flex-col gap-0.5">
                <div className="w-5 h-0.5 bg-[#D4A84B]" />
                <div className="w-5 h-0.5 bg-[#D4A84B]" />
              </div>
            </button>
          </div>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Campus addresses */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#D4A84B] font-bold mb-3">Middle School Campus</h3>
              <p className="text-gray-300">700 North Faring Road</p>
              <p className="text-gray-300 mb-2">Los Angeles, CA 90077</p>
              <Link href="tel:310-274-7281" className="inline-flex items-center gap-2 text-white hover:text-[#D4A84B]">
                <Phone className="w-4 h-4" />
                <span className="underline">310-274-7281</span>
              </Link>
            </div>
            <div>
              <h3 className="text-[#D4A84B] font-bold mb-3">Upper School Campus</h3>
              <p className="text-gray-300">3700 Coldwater Canyon</p>
              <p className="text-gray-300 mb-2">Studio City, CA 91604</p>
              <Link href="tel:818-980-6692" className="inline-flex items-center gap-2 text-white hover:text-[#D4A84B]">
                <Phone className="w-4 h-4" />
                <span className="underline">818-980-6692</span>
              </Link>
            </div>
          </div>

          {/* Key Links */}
          <div>
            <h3 className="text-[#D4A84B] font-bold mb-3">Key Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Faculty/Staff Directory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Directions & Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and legal */}
          <div>
            <h3 className="text-[#D4A84B] font-bold mb-3">@HWSchool</h3>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="text-white hover:text-[#D4A84B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-[#D4A84B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-[#D4A84B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Non-discrimination policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Legal notices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Site Translation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Non-discrimination statement */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm leading-relaxed max-w-4xl mx-auto mb-6">
            Florescent Public School does not discriminate on the basis of race, color, national or ethnic origin,
            disability, gender, gender identity, gender expression, religion, or sexual orientation in the
            administration of its educational policies, financial aid programs, and athletic or other
            school-administered programs. This policy applies to all rights, privileges, programs, and activities,
            including applications and admissions, generally accorded or made available to students at the school.
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-[#D4A84B]">#SchoolWebsite Design</span> by{" "}
            <Link href="#" className="text-[#D4A84B] hover:underline">
              Interactive Schools
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center pb-8">
        <button
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <div className="flex flex-col items-center">
            <ChevronUp className="w-8 h-8" />
            <ChevronUp className="w-8 h-8 -mt-4 opacity-50" />
          </div>
        </button>
      </div>
    </footer>
  )
}
