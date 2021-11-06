/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_URI: process.env.REACT_APP_URI,
  },
  images: {
    domains: ["i.imgur.com", "imgur.com"],
  },
};

module.exports = nextConfig;
