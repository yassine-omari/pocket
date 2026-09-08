"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Logo from "./icons/ui/Logo";
import Button from "./Button";

const navLinks = [
  { nav: "Features", link: "/#features" },
  { nav: "Reviews", link: "/#reviews" },
  { nav: "Pricing", link: "/#pricing" },
  { nav: "FAQs", link: "/#faqs" },
];

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d={open ? "M17 7 7 17M7 7l10 10" : "M5 6h14M5 18h14M5 12h14"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover className="lg:hidden">
      <PopoverButton
        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900"
        aria-label="Toggle site navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-gray-900 shadow-xl ring-1 ring-gray-900/5 transition duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        {navLinks.map((item) => (
          <PopoverButton
            key={item.nav}
            as={Link}
            href={item.link}
            className="block w-full p-2"
          >
            {item.nav}
          </PopoverButton>
        ))}
        <hr className="m-2 border-gray-300/40" />
        <PopoverButton as={Link} href="/login" className="block w-full p-2">
          Log in
        </PopoverButton>
      </PopoverPanel>
    </Popover>
  );
}

const Header = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <header>
      <nav>
        <div className="relative z-50 mx-auto flex max-w-7xl justify-between px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link aria-label="Home" href="/">
              <Logo />
            </Link>
            <div
              onMouseLeave={() => setHovered(null)}
              className="hidden lg:flex lg:gap-10"
            >
              {navLinks.map((item, index) => (
                <Link
                  key={item.nav}
                  href={item.link}
                  onMouseEnter={() => setHovered(index)}
                  className="relative -mx-3 -my-2.5 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                >
                  {hovered === index && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-lg bg-gray-100"
                      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.nav}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <MobileNavigation />
            <div className="flex items-center gap-6 max-lg:hidden">
              <Button href="/login" variant="outline" color="gray">
                Log in
              </Button>
              <Button href="#" variant="solid" color="gray">
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
