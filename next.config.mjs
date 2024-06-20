/** @type {import('next').NextConfig} */

const nextConfig = {};


const upload = {
  async rewrites() {
    return [
      {
        source: '/uploads/:doc*',
        destination: '/api/uploads/:doc*', // Proxy to Backend
      },
    ];
  },
};


export default nextConfig;
