"use client"

import { useState } from "react"
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react"
import { Button } from "@/public/UI/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/app/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
  label: string
  href?: string
  submenu?: MenuItem[]
}

const menuData: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Addmission", href: "/" },
  { label: "Campus life", href: "/" },
  { label: "Carrer", href: "/" },
  { label: "Gallery", href: "/" },
  {
    label: "About Us",
    submenu: [
      { label: "Welcome to Harvard-Westlake", href: "/about/welcome" },
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
          { label: "DEI in Action", href: "/about/dei/action" },
        ],
      },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Career Opportunities", href: "/about/careers" },
      { label: "Faculty/Staff Directory", href: "/about/directory" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
  
  {
    label: "Contact Us",
    submenu: [
      { label: "Why Harvard-Westlake", href: "/admission/why" },
      { label: "Apply", href: "/admission/apply" },
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background overflow-hidden"
        >
          {/* Top Bar */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="absolute top-0 right-0 flex items-center gap-6 px-8 h-[72px] bg-white text-primary-background z-10"
          >
            <Button
              onClick={onClose}
              variant="ghost"
              className="flex items-center gap-2 text-sm"
            >
              <X className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="h-full flex pt-[72px]">

            {/* MAIN MENU */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              <ScrollArea className="w-[420px] border-r border-border">
                <div className="px-14 py-10">
                  {/* Search Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="mb-14 relative">
                      <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-0 border-b border-input rounded-none bg-transparent pl-9 pr-9 pb-3 text-base"
                      />
                      <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </motion.div>

                  {/* Main Menu Items */}
                  <nav className="space-y-2">
                    {menuData.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Button
                          onClick={() => {
                            if (item.submenu) {
                              setActiveSubmenu(item)
                              setActiveTertiaryMenu(null)
                            }
                          }}
                          variant="ghost"
                          className="w-full justify-between text-[15px]"
                        >
                          {item.label}
                          {item.submenu && <ChevronRight className="h-7 w-7" />}
                        </Button>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </ScrollArea>
            </motion.div>

            {/* SUBMENU (2nd panel) */}
            <AnimatePresence>
              {activeSubmenu && (
                <motion.div
                  key="submenu"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 60 }}
                >
                  <ScrollArea className="w-[480px] border-r border-border">
                    <div className="px-14 py-10">
                      <Button
                        onClick={() => {
                          setActiveSubmenu(null)
                          setActiveTertiaryMenu(null)
                        }}
                        variant="ghost"
                        className="flex items-center gap-2 mb-10"
                      >
                        <ChevronLeft className="h-4 w-4" /> BACK
                      </Button>

                      <nav className="space-y-1.5">
                        {activeSubmenu.submenu?.map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Button
                              onClick={() => {
                                if (item.submenu) {
                                  setActiveTertiaryMenu(item)
                                }
                              }}
                              variant="ghost"
                              className="w-full justify-between text-lg"
                            >
                              {item.label}
                              {item.submenu && <ChevronRight className="h-5 w-5" />}
                            </Button>
                          </motion.div>
                        ))}
                      </nav>
                    </div>
                  </ScrollArea>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TERTIARY MENU (3rd panel) */}
            <AnimatePresence>
              {activeTertiaryMenu && (
                <motion.div
                  key="tertiary"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 60 }}
                  className="flex-1"
                >
                  <ScrollArea>
                    <div className="px-14 py-10">
                      <Button
                        onClick={() => setActiveTertiaryMenu(null)}
                        variant="outline"
                        className="flex items-center gap-2 mb-10 border-2 border-foreground"
                      >
                        <ChevronLeft className="h-4 w-4" /> BACK
                      </Button>

                      <nav className="space-y-1.5">
                        {activeTertiaryMenu.submenu?.map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Button asChild variant="ghost" className="w-full justify-start text-lg">
                              <a href={item.href}>{item.label}</a>
                            </Button>
                          </motion.div>
                        ))}
                      </nav>
                    </div>
                  </ScrollArea>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
