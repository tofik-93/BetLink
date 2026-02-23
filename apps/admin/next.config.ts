/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      // This tells Turbopack to look up two levels (the root of the repo)
      root: '../../', 
    },
  },
};

export default nextConfig;