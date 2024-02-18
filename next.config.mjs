import createMDX from "fumadocs-mdx/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkImage } from "fumadocs-core/mdx-plugins";

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkImage],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withMDX(config);
