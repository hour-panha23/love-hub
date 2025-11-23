"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "../ui/icon";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/") return setActiveTab("home");
    if (pathname.startsWith("/story")) return setActiveTab("story");
    if (pathname.startsWith("/gallery")) return setActiveTab("gallery");
    if (pathname.startsWith("/test-screen")) return setActiveTab("fun");
    if (pathname.startsWith("/events")) return setActiveTab("event");
    if (pathname.startsWith("/settings")) return setActiveTab("setting");
  }, [pathname]);

  const tabs = [
    { id: "home", label: "Home", icon: "home", href: "/" },
    { id: "story", label: "Story", icon: "story", href: "/story-timeline" },
    { id: "gallery", label: "Gallery", icon: "gallery", href: "/gallery" },
    { id: "fun", label: "Fun", icon: "fun", href: "/test-screen" },
    { id: "event", label: "Events", icon: "event", href: "/events" },
    { id: "setting", label: "More", icon: "setting", href: "/settings" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-pink-100 w-full h-16 flex items-center justify-around px-2 z-10 shadow-[0_-4px_12px_rgba(255,107,107,0.08)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          aria-label={tab.label}
          onClick={() => {
            setActiveTab(tab.id);
            if (tab.href && pathname !== tab.href) router.push(tab.href);
          }}
          aria-current={activeTab === tab.id ? "page" : undefined}
          className={`flex flex-col items-center justify-center p-2 w-12 h-12 rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-pink-300 ${
            activeTab === tab.id
              ? "scale-105 text-pink-500"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Icon
            name={tab.icon}
            size={22}
            color={activeTab === tab.id ? "#ec4899" : "#64748b"}
            aria-label={tab.label}
          />
          {/* {activeTab === tab.id && (
            <span className="mt-1 block h-1 w-8 bg-pink-400 rounded-full animate-pulse" />
          )} */}
        </button>
      ))}
    </footer>
  );
}
