import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Enforce www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ibrahimweb.co.uk",
          },
        ],
        destination: "https://www.ibrahimweb.co.uk/:path*",
        permanent: true,
      },
      // Catch all other routes (already pointing to this project)
      {
        source: "/:path*",
        destination: "https://www.ibrahimweb.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
