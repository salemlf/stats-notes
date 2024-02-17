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
};

export default withMDX(config);
