/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { loader: 'custom' },
  generateBuildId: () => process.env.GIT_COMMIT_HASH || null,
  reactStrictMode: true,
};
