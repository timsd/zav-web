import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "node-pre-gyp": false,
      "bcrypt": false
    }
    return config
  },
}

export default nextConfig
