"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StoryTimeline() {
  const data = [
    {
      id: 1,
      date: "2025-02-14",
      media: [
        { type: "image", src: "/img/val1.jpg" },
        { type: "video", src: "/video/kiss.mp4" },
        { type: "image", src: "/img/val2.jpg" },
      ],
      caption: "Our Valentine’s Day together 💖✨",
    },
    {
      id: 2,
      date: "2025-01-09",
      media: [
        { type: "image", src: "/img/cafe.jpg" },
        { type: "image", src: "/img/laugh.jpg" },
      ],
      caption: "Coffee date + lots of laughs ☕😂",
    },
  ];

  return (
    <div className="px-4 pt-6 relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-pink-300"></div>

      <div className="flex flex-col gap-8">
        {data.map((item) => (
          <Link key={item.id} href={`/story/${item.id}`}>
            <div className="flex items-start gap-4">
              {/* Dot */}
              <div className="mt-2 w-4 h-4 bg-pink-500 rounded-full"></div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl shadow-md p-3">
                {/* Date */}
                <p className="text-xs text-gray-400 mb-2">
                  {new Date(item.date).toDateString()}
                </p>

                {/* Slideshow */}
                <Swiper
                  spaceBetween={10}
                  className="rounded-xl overflow-hidden"
                >
                  {item.media.map((m, index) => (
                    <SwiperSlide key={index}>
                      {m.type === "image" ? (
                        <img src={m.src} className="w-full h-48 object-cover" />
                      ) : (
                        <video
                          src={m.src}
                          className="w-full h-48 object-cover"
                          muted
                          autoPlay
                          loop
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Caption */}
                <p className="text-sm text-gray-700 mt-3 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
