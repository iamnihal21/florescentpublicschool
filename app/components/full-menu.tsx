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
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.01, duration: 0.5 }}
                    className="border border-primary/20 rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Floating Academia Icons */}
            <div className="absolute inset-0">
              {[
                "🎓", "📚", "⚡", "🔬", "🎨", "🏆", "🌍", "💡", 
                "🎭", "🏀", "🎵", "🔍", "🚀", "🌟", "📝", "🎯"
              ].map((icon, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50
                  }}
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute text-4xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                style={{ left: '10%', top: '20%' }}
              />
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-80 h-80 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full blur-3xl"
                style={{ right: '15%', bottom: '30%' }}
              />
              <motion.div
                animate={{
                  x: [0, 60, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-72 h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
                style={{ left: '40%', top: '60%' }}
              />
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
                </linearGradient>
              </defs>
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.line
                  key={i}
                  x1={Math.random() * 100 + '%'}
                  y1={Math.random() * 100 + '%'}
                  x2={Math.random() * 100 + '%'}
                  y2={Math.random() * 100 + '%'}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </svg>

            {/* Particle System */}
            <div className="absolute inset-0">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    delay: Math.random() * 5,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Subtle Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Top Bar - Fixed positioning with proper z-index */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="absolute top-0 right-0 left-0 flex justify-end items-center px-8 h-[72px] bg-background/80 backdrop-blur-sm border-b border-border z-50"
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="h-full flex pt-[72px] relative z-10">

            {/* MAIN MENU */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              <ScrollArea className="w-[420px] border-r border-border bg-background/80 backdrop-blur-sm">
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
                          className="w-full justify-between text-[15px] hover:bg-accent/50 transition-all duration-300"
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
                  <ScrollArea className="w-[480px] border-r border-border bg-background/80 backdrop-blur-sm">
                    <div className="px-14 py-10">
                      <Button
                        onClick={() => {
                          setActiveSubmenu(null)
                          setActiveTertiaryMenu(null)
                        }}
                        variant="ghost"
                        className="flex items-center gap-2 mb-10 hover:bg-accent/50"
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
                              className="w-full justify-between text-sm hover:bg-accent/50"
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
                    <div className="px-14 py-10 bg-background/80 backdrop-blur-sm">
                      <Button
                        onClick={() => setActiveTertiaryMenu(null)}
                        variant="outline"
                        className="flex items-center gap-2 mb-10 border-2 border-foreground hover:bg-accent/50"
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
                            <Button asChild variant="ghost" className="w-full justify-start text-sm hover:bg-accent/50">
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