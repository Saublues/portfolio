"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-fast, immediate tracking (mass: 0.1, high stiffness) for zero-lag instant responsiveness
  const cursorX = useSpring(mouseX, { stiffness: 1600, damping: 60, mass: 0.1 });
  const cursorY = useSpring(mouseY, { stiffness: 1600, damping: 60, mass: 0.1 });

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerType = () => setIsDesktop(mediaQuery.matches);
    updatePointerType();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePointerType);
    } else if ("addListener" in mediaQuery) {
      // iOS Safari fallback
      (mediaQuery as any).addListener(updatePointerType);
    }

    const checkElementAtPoint = (target: HTMLElement | null) => {
      if (!target) return;

      // Detect if cursor is over the navigation bar or header
      const isNav = Boolean(target.closest("header, nav, [data-nav]"));
      setIsNavHovered(isNav);

      // Detect interactive elements outside the navbar
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor], .cursor-pointer'
      );

      if (interactive && !isNav) {
        setIsHovered(true);
        const label = interactive.getAttribute("data-cursor");
        setCursorLabel(label || "");
      } else {
        setIsHovered(false);
        setCursorLabel("");
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      checkElementAtPoint(e.target as HTMLElement | null);
    };

    const handleMouseOver = (e: MouseEvent) => {
      checkElementAtPoint(e.target as HTMLElement | null);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updatePointerType);
      } else if ("removeListener" in mediaQuery) {
        (mediaQuery as any).removeListener(updatePointerType);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
    >
      {/* Single Ring Cursor:
          - Warna: Light mode = Hitam (border-black), Dark mode = Putih (dark:border-white)
          - Pada Navbar hitam: Otomatis Putih (border-white) agar selalu terlihat jelas
          - Kecepatan: Instan / Snappy tanpa jeda lag
          - Center: Transparan sehingga teks di bawahnya selalu terlihat 100% jelas */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.8 : isHovered ? (cursorLabel ? 2.1 : 1.35) : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 600, damping: 30 },
          opacity: { duration: 0.1 },
        }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-100 bg-transparent ${
          isNavHovered
            ? "border-2 border-white"
            : "border-2 border-black dark:border-white"
        }`}
      >
        {/* Contextual Micro-Label (only if data-cursor is provided) */}
        {cursorLabel && !isNavHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest font-bold uppercase select-none px-1 text-center text-black dark:text-white"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
