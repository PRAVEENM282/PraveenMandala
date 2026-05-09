const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"]
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
