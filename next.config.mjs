/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export automatically
  images: {
    unoptimized: true, // Fixes issues with Next.js image optimization in static sites
  },
  trailingSlash: true, // Ensures proper routing
};

export default nextConfig;
