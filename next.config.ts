// import path from "path";
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    // add domains you host images on (CDNs)
    domains: ['images.example-cdn.com', 'assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
        ],
      },
    ];
  },
  alternates: {
    canonical: 'https://www.example.com/page-url',
    languages: {
      'en-US': '/en-US/page',
      'hi-IN': '/hi-IN/page'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
    prependData: `
      @use 'variables' as *;
      @use 'mixins' as *;
    `,
  }
};

module.exports = nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
