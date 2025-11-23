"use client";

import LandingPage from "@/components/Landing";
import { useEffect, useState } from "react";

export default function HomePage() {
  // simple mount fade-in for the whole page
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // delay slightly to allow CSS transitions to run
    const t = setTimeout(() => setMounted(true), 5);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-opacity duration-150 ease-out transform-gpu ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <LandingPage />
    </div>
  );
}
