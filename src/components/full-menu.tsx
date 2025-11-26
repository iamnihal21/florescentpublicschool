"use client";

import { useState } from "react";
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
// import Image from "next/image";

interface MenuItem {
  label: string;
  href?: string;
  submenu?: MenuItem[];
}

const menuData: MenuItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
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
          {
            label: "Diversity, Equity, and Inclusion in Action",
            href: "/about/dei/action",
          },
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
      { label: "Why Harvard-Westlake", href: "/admission/why" },
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
];

interface FullMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullMenu({ isOpen, onClose }: FullMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null);
  const [activeTertiaryMenu, setActiveTertiaryMenu] = useState<MenuItem | null>(
    null,
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#e8e6e1] overflow-hidden">
      <div className="absolute top-0 right-0 flex items-center gap-6 px-8 h-[72px] bg-[#a51c30] text-white z-10">
        <Button
          variant="ghost"
          className="font-bold text-sm tracking-wider flex items-center gap-1 hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          PORTALS
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24" 
          >
            <title>Prtals</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-sm tracking-wider hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          CALENDAR
        </Button>
        <Button
          onClick={onClose}
          variant="ghost"
          className="font-bold text-sm tracking-wider flex items-center gap-2 hover:bg-transparent hover:opacity-90 transition-opacity text-white h-auto p-0"
        >
          CLOSE
          <X className="h-5 w-5 stroke-[2.5]" />
        </Button>
      </div>

      <div className="h-full flex pt-[72px]">
        <ScrollArea className="w-[420px] border-r border-gray-300">
          <div className="px-14 py-10">
            <div className="mb-14 relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 border-b border-gray-400 rounded-none bg-transparent pl-9 pr-9 pb-3 text-base placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-600"
              />
              <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>

            <nav className="space-y-2">
              {menuData.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(item);
                      setActiveTertiaryMenu(null);
                    }
                  }}
                  variant="ghost"
                  className={cn(
                    "w-full justify-between h-auto py-2.5 px-0 font-bold text-[32px] leading-tight tracking-tight hover:bg-transparent",
                    activeSubmenu?.label === item.label
                      ? "text-[#a51c30] hover:text-[#a51c30]"
                      : "text-[#2c2c2c] hover:text-[#555]",
                  )}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronRight
                      className={cn(
                        "h-7 w-7 transition-colors",
                        activeSubmenu?.label === item.label
                          ? "text-[#a51c30]"
                          : "text-gray-500",
                      )}
                    />
                  )}
                </Button>
              ))}
            </nav>
          </div>
        </ScrollArea>

        {activeSubmenu && (
          <ScrollArea className="w-[480px] border-r border-gray-300">
            <div className="px-14 py-10">
              <Button
                onClick={() => {
                  setActiveSubmenu(null);
                  setActiveTertiaryMenu(null);
                }}
                variant="ghost"
                className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-10 hover:text-[#a51c30] hover:bg-transparent transition-colors tracking-wide h-auto p-0"
              >
                <ChevronLeft className="h-4 w-4" />
                BACK
              </Button>

              <nav className="space-y-1.5">
                {activeSubmenu.submenu?.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => {
                      if (item.submenu) {
                        setActiveTertiaryMenu(item);
                      }
                    }}
                    variant="ghost"
                    className={cn(
                      "w-full justify-between h-auto py-2.5 px-0 text-lg font-normal hover:bg-transparent",
                      item.submenu
                        ? "text-[#a51c30] font-medium hover:text-[#a51c30]"
                        : "text-[#2c2c2c] hover:text-[#555]",
                    )}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronRight className="h-5 w-5 text-[#a51c30] transition-colors" />
                    )}
                  </Button>
                ))}
              </nav>
            </div>
          </ScrollArea>
        )}

        {activeTertiaryMenu && (
          <ScrollArea className="flex-1">
            <div className="px-14 py-10">
              <Button
                onClick={() => setActiveTertiaryMenu(null)}
                variant="outline"
                className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-10 hover:text-[#a51c30] hover:bg-transparent transition-colors border-2 border-gray-800 tracking-wide h-auto px-4 py-1.5 rounded-none"
              >
                <ChevronLeft className="h-4 w-4" />
                BACK
              </Button>

              <nav className="space-y-1.5">
                {activeTertiaryMenu.submenu?.map((item) => (
                  <Button
                    key={item.label}
                    asChild
                    variant="ghost"
                    className="w-full justify-start h-auto py-2.5 px-0 text-lg text-[#2c2c2c] hover:text-[#555] hover:bg-transparent transition-colors font-normal"
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
              </nav>
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}
