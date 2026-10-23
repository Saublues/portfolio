"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransition";
import { WorkDrawerOverlay } from "@/components/WorkDrawerOverlay";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const pathname = usePathname();
  const { navigateTo, isTransitioning, targetPath } = usePageTransition();

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const navItems = [
    { label: "Hello!", href: "/" },
    { label: "Works", href: "#work", isWorkTrigger: true, mobileOnly: true },
    { label: "Me", href: "/story" },
    { label: "Contact", href: "/chat" },
  ];

  return (
    <>
      <header
        className="fixed top-[max(1rem,env(safe-area-inset-top))] sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1rem)]"
      >
        <nav
          aria-label="Main Navigation"
          className="relative flex items-center gap-1 sm:gap-1.5 rounded-full bg-black/95 dark:bg-zinc-950/95 text-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] border border-white/15 backdrop-blur-xl"
        >
          {/* Theme Sun / Moon Button */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full text-amber-400 hover:text-amber-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mounted && isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-400"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-200"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </motion.button>

          <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

          {/* Navigation Links */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const currentPath = targetPath || pathname;
              const isActive =
                !item.isWorkTrigger &&
                (item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href));

              if (item.isWorkTrigger) {
                return (
                  <button
                    key="mobile-work"
                    type="button"
                    onClick={() => setIsWorkOpen(true)}
                    className="relative px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full cursor-pointer transition-colors text-zinc-400 hover:text-white md:hidden"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (pathname === item.href || isTransitioning) return;
                    navigateTo(item.href);
                  }}
                  className={`relative px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full cursor-pointer transition-colors ${
                    item.mobileOnly ? "md:hidden" : ""
                  }`}
                >
                  {/* Gliding Active Capsule (Framer Motion layoutId) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-xs"
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Standalone Desktop Work Pill Button (Anton & Irene style - Fixed Top-Right) */}
      <div
        className="fixed top-5 right-6 sm:right-8 z-50 hidden md:block pointer-events-auto"
      >
        <button
          type="button"
          onClick={() => setIsWorkOpen((prev) => !prev)}
          className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl cursor-pointer ${
            isWorkOpen
              ? "bg-white text-black font-bold border border-white shadow-white/20 scale-105"
              : "bg-black/95 dark:bg-zinc-950/95 text-white hover:bg-white hover:text-black border border-white/15"
          }`}
        >
          <span>{isWorkOpen ? "✕ Close" : "Work"}</span>
        </button>
      </div>

      {/* Anton & Irene Full-Screen Work Drawer & Case Study Overlay */}
      <WorkDrawerOverlay
        isOpen={isWorkOpen}
        onClose={() => setIsWorkOpen(false)}
      />
    </>
  );
}
