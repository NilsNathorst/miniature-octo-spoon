import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/gyms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
