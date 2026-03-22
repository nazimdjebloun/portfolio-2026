/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'radix-ui', 'clsx', 'cva', '@radix-ui/react-dialog', '@radix-ui/react-scroll-area', '@radix-ui/react-separator', '@radix-ui/react-tabs', '@radix-ui/react-avatar', '@radix-ui/react-switch', '@radix-ui/react-slot'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
