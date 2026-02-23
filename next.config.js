/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/roadsafe365",
  assetPrefix: "/roadsafe365/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
