// import type { NextConfig } from "next";
// import os from "os";

// // collect local IPv4 addresses (non-internal) and include localhost
// function getLocalDevOrigins(): string[] {
//   const ifaces = os.networkInterfaces();
//   const origins = new Set<string>(["localhost", "127.0.0.1", "::1"]);

//   Object.values(ifaces).forEach((addressList) => {
//     addressList?.forEach((addr) => {
//       // Only add IPv4 non-internal addresses (typical local network IPs)
//       if (addr.family === "IPv4" && !addr.internal) origins.add(addr.address);
//     });
//   });

//   return Array.from(origins);
// }

// const autoOrigins = getLocalDevOrigins();
// if (process.env.NODE_ENV !== "production") {
//   // helpful when starting the dev server to see what will be accepted
//   // eslint-disable-next-line no-console
//   console.log("next.config: allowedDevOrigins ->", autoOrigins);
// }

// const nextConfig: NextConfig = {
//   pageExtensions: ["ts", "tsx", "md", "mdx"],
//   reactStrictMode: false,
//   // allow local machine addresses during development; if you want to add
//   // other hosts, set process.env.ALLOWED_DEV_ORIGINS (comma-separated)
//   allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
//     ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((s) => s.trim())
//     : autoOrigins,
// };

// export default nextConfig;

import type { NextConfig } from "next";
import os from "os";

// collect local IPv4 addresses (non-internal) and include localhost
function getLocalDevOrigins(): string[] {
  const ifaces = os.networkInterfaces();
  const origins = new Set<string>(["localhost", "127.0.0.1", "::1"]);

  Object.values(ifaces).forEach((addressList) => {
    addressList?.forEach((addr) => {
      if (addr.family === "IPv4" && !addr.internal) origins.add(addr.address);
    });
  });

  return Array.from(origins);
}

const autoOrigins = getLocalDevOrigins();
if (process.env.NODE_ENV !== "production") {
  console.log("next.config: allowedDevOrigins ->", autoOrigins);
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: false,

  // GitHub Pages settings
  output: "export", // enable static export
  basePath: "/love-hub", // matches your repo name
  assetPrefix: "/love-hub/", // ensures static assets load correctly
  images: {
    unoptimized: true, // GH Pages does not support Next.js Image Optimization
  },

  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((s) => s.trim())
    : autoOrigins,
};

export default nextConfig;
