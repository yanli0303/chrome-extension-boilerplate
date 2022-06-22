/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { loader: 'custom' },
  generateBuildId: () => process.env.GIT_COMMIT_HASH || null,
  reactStrictMode: true,
};

module.exports = nextConfig;
