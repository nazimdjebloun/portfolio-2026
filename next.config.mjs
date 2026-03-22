/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'radix-ui', 'clsx', 'cva', '@radix-ui/react-dialog', '@radix-ui/react-scroll-area', '@radix-ui/react-separator', '@radix-ui/react-tabs', '@radix-ui/react-avatar', '@radix-ui/react-switch', '@radix-ui/react-slot'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
