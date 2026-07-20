import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "https://drive.google.com/file/d/1zafc1bZCDi728F4_Z3Mv6JbymeJUGOiN/view?usp=sharing",
        permanent: false,
      },
      {
        source: "/resume.pdf",
        destination: "https://drive.google.com/file/d/1zafc1bZCDi728F4_Z3Mv6JbymeJUGOiN/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
