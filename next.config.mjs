/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true, // Ensure app router is enabled
  },
  dynamic: "force-dynamic", // 👈 Ensures runtime rendering (fixes issue)
};

export default nextConfig;
