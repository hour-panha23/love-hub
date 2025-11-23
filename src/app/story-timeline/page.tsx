"use client";

import StoryTimeline from "@/components/StoryTimeline";
import { useEffect, useState } from "react";

export default function StoryTimelinePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-opacity duration-450 ease-out bg-[#ffc4c4]  transform-gpu ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <StoryTimeline />
    </div>
  );
}
