import type { NextConfig } from "next";

const showDevTools = process.env.NEXT_PUBLIC_DEV_TOOLS === "true";

const nextConfig: NextConfig = {
  devIndicators: showDevTools ? {} : false,

  /* ── Keep server-only packages out of client bundles ───────── */
  serverExternalPackages: ["marked"],

  /* ── Compression — let Vercel/CDN handle brotli ────────────── */
  compress: true,

  images: {
    /* Next/Image optimisation — use modern formats */
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/icons/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
};

export default nextConfig;
