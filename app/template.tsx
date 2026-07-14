"use client";

import { m } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>{children}</m.div>;
}
