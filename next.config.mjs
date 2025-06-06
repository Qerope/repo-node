/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/repo-node',
  assetPrefix: '/repo-node/',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
