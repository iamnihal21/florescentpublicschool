"use client"

import { useState } from "react"
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MenuItem {
  label: string
  href?: string
  submenu?: MenuItem[]
}

const menuData: MenuItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    submenu: [
      { label: "Welcome to Florescent Public School", href: "/about/welcome" },
      { label: "HW at a Glance", href: "/about/glance" },
      { label: "History", href: "/about/history" },
      {
        label: "Diversity, Equity & Inclusion",
        submenu: [
          { label: "Diversity, Equity & Inclusion", href: "/about/dei" },
          { label: "Affinity Groups", href: "/about/dei/affinity" },
          { label: "Brochure", href: "/about/dei/brochure" },
          { label: "Commitments", href: "/about/dei/commitments" },
          { label: "Initiatives", href: "/about/dei/initiatives" },
          { label: "Team", href: "/about/dei/team" },
          { label: "Diversity, Equity, and Inclusion in Action", href: "/about/dei/action" },
        ],
      },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Career Opportunities", href: "/about/careers" },
      { label: "Faculty/Staff Directory", href: "/about/directory" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
  {
    label: "ADMISSION",
    submenu: [
      { label: "Why Florescent Public School", href: "/admission/why" },
      { label: "Apply", href: "/admission/apply" },
    ],
  },
  {
    label: "ACADEMICS",
    submenu: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Academic Support", href: "/academics/support" },
    ],
  },
  {
    label: "ARTS",
    submenu: [
      { label: "Visual Arts", href: "/arts/visual" },
      { label: "Performing Arts", href: "/arts/performing" },
    ],
  },
  {
    label: "ATHLETICS",
    submenu: [
      { label: "Teams", href: "/athletics/teams" },
      { label: "Facilities", href: "/athletics/facilities" },
    ],
  },
  {
    label: "LIFE @ HW",
    submenu: [
      { label: "Student Life", href: "/life/student" },
      { label: "Campus", href: "/life/campus" },
    ],
  },
  {
    label: "SUMMER",
    submenu: [{ label: "Summer Programs", href: "/summer/programs" }],
  },
  {
    label: "GIVING",
    submenu: [
      { label: "Ways to Give", href: "/giving/ways" },
      { label: "Impact", href: "/giving/impact" },
    ],
  },
]

interface FullMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function FullMenu({ isOpen, onClose }: FullMenuProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null)
  const [activeTertiaryMenu, setActiveTertiaryMenu] = useState<MenuItem | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#e8e6e1] overflow-hidden">
      <div className="absolute top-0 right-0 flex items-center gap-4 px-6 h-14 bg-[#a51c30] text-white z-10">
        <Button
          variant="ghost"
          className="font-semibold text-sm tracking-wider flex items-center gap-1 hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          PORTALS
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
        <Button
          variant="ghost"
          className="font-semibold text-sm tracking-wider hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          CALENDAR
        </Button>
        <Button
          onClick={onClose}
          variant="ghost"
          className="font-semibold text-sm tracking-wider flex items-center gap-1.5 hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          CLOSE
          <X className="h-4 w-4 stroke-[2]" />
        </Button>
      </div>

      <div className="h-full flex pt-14">
        {/* Left Column - Menu */}
        <div className="w-[40%] h-full overflow-y-auto border-r border-[#c5c0b8] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="px-10 py-8">
            <div className="mb-12 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-lg bg-white/60 shadow-sm pl-10 pr-10 py-2.5 h-11 text-base placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-400"
              />
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            <nav className="space-y-4">
              {menuData.map((item) => (
                <div key={item.label} className="relative">
                  <Button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveSubmenu(item)
                        setActiveTertiaryMenu(null)
                      }
                    }}
                    variant="ghost"
                    className={cn(
                      "w-full justify-between h-auto py-2 px-0 font-extrabold text-[28px] leading-tight tracking-tight hover:bg-transparent",
                      activeSubmenu?.label === item.label
                        ? "text-[#a51c30] hover:text-[#a51c30]"
                        : "text-[#2c2c2c] hover:text-[#555]",
                    )}
                  >
                    <span className="relative inline-block">
                      {item.label}
                      {item.label === "HOME" && (
                        <span className="absolute -bottom-1 -left-2 -right-2 h-[3px] bg-[#d4a600]" />
                      )}
                    </span>
                    {item.submenu ? (
                      <ChevronRight
                        className={cn(
                          "h-6 w-6 stroke-[2.5] transition-colors",
                          activeSubmenu?.label === item.label ? "text-[#a51c30]" : "text-gray-500",
                        )}
                      />
                    ) : (
                      <span className="w-6 h-6" />
                    )}
                  </Button>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="w-[60%] h-full flex border-l border-gray-300">
          {/* Right content area */}
          <div className="flex-1 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {activeSubmenu ? (
              <div className="flex h-full">
                {/* Secondary menu */}
                <div className="w-1/2 px-10 py-8 border-r border-gray-300">
                  <Button
                    onClick={() => {
                      setActiveSubmenu(null)
                      setActiveTertiaryMenu(null)
                    }}
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-8 hover:text-[#a51c30] hover:bg-transparent transition-colors tracking-wide h-auto p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    BACK
                  </Button>

                  <nav className="space-y-4">
                    {activeSubmenu.submenu?.map((item) => (
                      <Button
                        key={item.label}
                        onClick={() => {
                          if (item.submenu) {
                            setActiveTertiaryMenu(item)
                          }
                        }}
                        variant="ghost"
                        className={cn(
                          "w-full justify-between h-auto py-2 px-0 text-lg font-normal hover:bg-transparent transition-colors",
                          activeTertiaryMenu?.label === item.label || item.submenu
                            ? "text-[#a51c30] font-medium hover:text-[#a51c30]"
                            : "text-[#2c2c2c] hover:text-[#555]",
                        )}
                      >
                        {item.label}
                        {item.submenu && <ChevronRight className="h-5 w-5 text-[#a51c30] stroke-[2]" />}
                      </Button>
                    ))}
                  </nav>
                </div>

                {/* Tertiary menu */}
                {activeTertiaryMenu && (
                  <div className="w-1/2 px-10 py-8">
                    <Button
                      onClick={() => setActiveTertiaryMenu(null)}
                      variant="outline"
                      className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-8 hover:text-[#a51c30] hover:bg-transparent transition-colors border-2 border-gray-800 tracking-wide h-auto px-3 py-1 rounded-none"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      BACK
                    </Button>

                    <nav className="space-y-4">
                      {activeTertiaryMenu.submenu?.map((item) => (
                        <Button
                          key={item.label}
                          asChild
                          variant="ghost"
                          className="w-full justify-start h-auto py-2 px-0 text-lg text-[#2c2c2c] hover:text-[#555] hover:bg-transparent transition-colors font-normal"
                        >
                          <a href={item.href}>{item.label}</a>
                        </Button>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Promotional cards when submenu is open but no tertiary */}
                {!activeTertiaryMenu && (
                  <div className="w-1/2 p-6 space-y-4">
                    {/* HW MEDIA+ Card */}
                    <a href="#" className="block relative overflow-hidden rounded-lg aspect-[16/9] group">
                      <Image
                        src="/images/hw-media.jpg"
                        alt="HW Media+"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-2xl tracking-wide">HW MEDIA+</h3>
                      </div>
                    </a>

                    {/* Wolverine Store Card */}
                    <a href="#" className="block relative overflow-hidden rounded-lg aspect-[16/9] group">
                      <Image
                        src="/images/wolverine-store.jpg"
                        alt="Wolverine Store"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-2xl tracking-wide">WOLVERINE STORE</h3>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              /* Promotional cards when no submenu is active */
              <div className="p-6 space-y-4">
                {/* HW MEDIA+ Card */}
                <a href="#" className="block relative overflow-hidden rounded-lg aspect-[16/9] group">
                  <Image
                    src="/images/hw-media.jpg"
                    alt="HW Media+"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl tracking-wide">HW MEDIA+</h3>
                  </div>
                </a>

                {/* Wolverine Store Card */}
                <a href="#" className="block relative overflow-hidden rounded-lg aspect-[16/9] group">
                  <Image
                    src="/images/wolverine-store.jpg"
                    alt="Wolverine Store"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl tracking-wide">WOLVERINE STORE</h3>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
