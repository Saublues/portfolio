"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

interface TransitionContextType {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
  targetPath: string | null;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
  targetPath: null,
});

export const usePageTransition = () => useContext(TransitionContext);

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);

  const controlsMain = useAnimation();
  const controlsAccent = useAnimation();

  useEffect(() => {
    // Ensure curtains start fully off-screen to the left
    controlsMain.set({ x: "-100%" });
    controlsAccent.set({ x: "-100%" });
  }, [controlsMain, controlsAccent]);

  const navigateTo = async (href: string) => {
    // Jangan transisi jika sedang transisi atau ke link halaman saat ini
    if (isTransitioning || href === pathname) return;

    setIsTransitioning(true);
    setTargetPath(href);

    // 1. TAHAP 1: Transisi MASUK dari KIRI ke KANAN menutup seluruh layar
    // Tidak langsung hitam tiba-tiba, melainkan tirai meluncur menutup layar
    await Promise.all([
      controlsAccent.start({
        x: "0%",
        transition: {
          duration: 0.55,
          ease: [0.76, 0, 0.24, 1],
        },
      }),
      controlsMain.start({
        x: "0%",
        transition: {
          duration: 0.6,
          delay: 0.03,
          ease: [0.76, 0, 0.24, 1],
        },
      }),
    ]);

    // 2. TAHAP 2: Jeda waktu saat layar tertutup hitam penuh (tidak terburu-buru)
    await new Promise((resolve) => setTimeout(resolve, 200));

    // 3. TAHAP 3: Navigasi rute Next.js saat layar masih tertutup
    router.push(href);

    // Beri jeda sedikit agar DOM halaman baru selesai dimuat di balik tirai
    await new Promise((resolve) => setTimeout(resolve, 180));

    // 4. TAHAP 4: Tirai DITARIK KEMBALI KE KIRI membuka layar
    await Promise.all([
      controlsMain.start({
        x: "-100%",
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        },
      }),
      controlsAccent.start({
        x: "-100%",
        transition: {
          duration: 0.55,
          delay: 0.04,
          ease: [0.76, 0, 0.24, 1],
        },
      }),
    ]);

    // Selesai transisi
    setIsTransitioning(false);
    setTargetPath(null);
  };

  return (
    <TransitionContext.Provider
      value={{ navigateTo, isTransitioning, targetPath }}
    >
      {/* Tirai 1: Aksen Sky Blue Lip */}
      <motion.div
        animate={controlsAccent}
        initial={{ x: "-100%" }}
        className="fixed inset-0 z-[998] bg-sky-500 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Tirai 2: Tirai Utama Kontras Hitam Studio */}
      <motion.div
        animate={controlsMain}
        initial={{ x: "-100%" }}
        className="fixed inset-0 z-[999] bg-[#090b0e] border-r border-white/10 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {children}
    </TransitionContext.Provider>
  );
}
