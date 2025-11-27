"use client";

import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "../../public/UI/button";
import Image from "next/image";
import { FullMenu } from "./full-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/hw-logo.svg"
              alt="Harvard-Westlake School"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          <nav className="flex items-center gap-8">
            <Button
              variant="ghost"
              className="text-white font-semibold text-sm tracking-wide flex items-center gap-1 hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              PORTALS
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="text-white font-semibold text-sm tracking-wide hover:text-gray-200 hover:bg-transparent transition-colors h-auto p-0"
            >
              CALENDAR
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="text-white font-semibold text-sm tracking-wide hover:text-gray-200 hover:bg-transparent transition-colors flex items-center gap-2 h-auto p-0"
            >
              MENU
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      </header>

      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
