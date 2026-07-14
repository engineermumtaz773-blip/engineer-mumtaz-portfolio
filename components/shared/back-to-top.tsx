"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { m, AnimatePresence } from "motion/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <m.button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-2xl transition hover:bg-brand sm:bottom-8 sm:right-8"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
