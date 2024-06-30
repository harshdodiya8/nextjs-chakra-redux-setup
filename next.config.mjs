/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["add domain here"],
  },
  async redirects() {
    return [
      {
        source: "/add source",
        destination: "add destination url",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
