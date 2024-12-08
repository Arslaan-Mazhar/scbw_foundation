/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://admin.scbwfoundation.com/login",
      },
    ];
  },
    eslint: {
        ignoreDuringBuilds: true,
      },    
};

export default nextConfig;
