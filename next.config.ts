import type { NextConfig } from 'next'
 
const nextConfig = {
  experimental: {
    cssChunking: true, // default
  },
} satisfies NextConfig
 
export default nextConfig