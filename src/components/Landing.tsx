"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../ui/icon";

export default function LandingPage() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [yearsTogether, setYearsTogether] = useState(0);
  const [monthsTogether, setMonthsTogether] = useState(0);
  const [daysOnly, setDaysOnly] = useState(0);
  const [activeTab, setActiveTab] = useState("home");
  const [pulse, setPulse] = useState(false);
  const prevDaysRef = useRef(daysTogether);
  const sampleHighlights = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Highlight #${i + 1}`,
    subtitle: `This is a short description of highlight ${i + 1}`,
    icon: i % 3 === 0 ? "gallery" : i % 3 === 1 ? "story" : "heart",
  }));
  const router = useRouter();
  const pathname = usePathname();

  // keep activeTab in sync with current pathname
  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/") return setActiveTab("home");
    if (pathname.startsWith("/story")) return setActiveTab("story");
    if (pathname.startsWith("/gallery")) return setActiveTab("gallery");
    if (pathname.startsWith("/test-screen")) return setActiveTab("fun");
    if (pathname.startsWith("/events")) return setActiveTab("event");
    if (pathname.startsWith("/settings")) return setActiveTab("setting");
  }, [pathname]);

  useEffect(() => {
    const startDate = new Date(2025, 10, 2); // 02 Nov 2025

    const updateDays = () => {
      const now = new Date();
      if (now < startDate) {
        // not started yet
        setDaysTogether(0);
        setYearsTogether(0);
        setMonthsTogether(0);
        setDaysOnly(0);
        return;
      }

      // total days
      const diffMs = now.getTime() - startDate.getTime();
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setDaysTogether(totalDays);

      // compute years, months, days as calendar difference
      let y = now.getFullYear() - startDate.getFullYear();
      let m = now.getMonth() - startDate.getMonth();
      let d = now.getDate() - startDate.getDate();

      if (d < 0) {
        // borrow days from previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // last day of previous month
        d += prevMonth.getDate();
        m -= 1;
      }
      if (m < 0) {
        m += 12;
        y -= 1;
      }

      setYearsTogether(y >= 0 ? y : 0);
      setMonthsTogether(m >= 0 ? m : 0);
      setDaysOnly(d >= 0 ? d : 0);

      if (prevDaysRef.current !== totalDays) {
        // if days increased, show pulse briefly
        setPulse(true);
        setTimeout(() => setPulse(false), 700);
        prevDaysRef.current = totalDays;
      }
    };

    updateDays();
    const timer = setInterval(updateDays, 60 * 1000); // update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen bg-[#ffc4c4] flex flex-col overflow-hidden overscroll-none">
      {/* Main Content */}
      <main className="h-full flex flex-col min-h-0 overflow-hidden bg-[#ffc4c4] px-4 pt-4 pb-20">
        {/* 🔥 Sticky Day Counter */}
        <div className="sticky top-0 z-30 bg-[#ffc4c4] pb-2">
          <div className="bg-linear-to-br from-pink-400 to-red-400 text-white px-5 py-3 rounded-2xl shadow-md max-w-xl mx-auto flex items-center justify-between gap-3 w-full">
            <div className="bg-white rounded-full border-2 border-pink-200 p-0.5">
              <Image
                src={"/pic/you.png"}
                width={58}
                height={58}
                alt="Partner avatar"
              />
            </div>

            <div className="flex-1 h-full flex flex-col gap-4 items-center justify-center text-white">
              <p className="text-xs font-semibold opacity-90">Been Together</p>

              <p
                className={`text-3xl font-extrabold tracking-tight leading-none transition-transform ${
                  pulse ? "scale-105" : ""
                }`}
              >
                {(() => {
                  const weeks = Math.floor(daysTogether / 7);
                  const daysRemainder = daysTogether % 7;
                  const parts = [];
                  if (weeks > 0) parts.push(`${weeks}W`);
                  if (daysRemainder > 0) parts.push(`${daysRemainder}D`);
                  if (parts.length === 0) parts.push("0D");
                  return parts.join(" ");
                })()}
              </p>

              <p className="text-[12px] opacity-80">02 Nov 2025</p>
            </div>

            <div className="bg-white rounded-full border-2 border-pink-200 p-0.5">
              <Image
                src={"/pic/me.png"}
                width={58}
                height={58}
                alt="My avatar"
              />
            </div>
          </div>
        </div>

        {/* 🔥 Sticky Quick Actions */}
        <div className="sticky top-[105px] z-20 bg-[#ffc4c4] pb-2">
          <div className="mt-4 grid grid-cols-4 gap-4 max-w-xl mx-auto w-full">
            {[
              { label: "Gallery", icon: "gallery" },
              { label: "Diary", icon: "story" },
              { label: "Messages", icon: "heart" },
              { label: "Event", icon: "event" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm items-center justify-center p-4 rounded-xl flex flex-col gap-1 shadow-sm border border-pink-100"
              >
                <Icon
                  name={item.icon}
                  size={24}
                  aria-label={item.label}
                  color={"#ec4899"}
                />
                <span className="text-[11px] font-semibold text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Sticky Highlights Title */}
        <div className="sticky top-[195px] z-10 bg-[#ffc4c4] pb-2 pt-5">
          <h1 className="font-bold text-xl text-gray-800 max-w-xl mx-auto">
            Today Highlights
          </h1>
        </div>

        {/* 🔥 Scrollable Highlight List */}
        <div className="flex-1 overflow-y-auto max-w-xl mx-auto w-full mt-1 pr-1 pb-16 custom-scrollbar overscroll-contain touch-pan-y">
          {sampleHighlights.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex gap-3 items-center shadow-sm border border-pink-100 mb-3 last:mb-0"
            >
              <div className="bg-pink-50 p-2 rounded-md flex items-center justify-center h-10 w-10 shrink-0">
                <Icon
                  name={item.icon}
                  size={18}
                  aria-label={item.title}
                  color="#ec4899"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {item.subtitle}
                </p>
              </div>

              <div className="text-[11px] text-gray-400 whitespace-nowrap">
                Now
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer moved to app layout (persistent) */}
    </div>
  );
}
