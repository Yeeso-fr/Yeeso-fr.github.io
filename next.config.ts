import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath: basePath,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
