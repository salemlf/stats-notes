import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'

import Ch6Ex63 from "../../content/exercises/chapter-6-exercises/section-6-6-exercises/_exercise-6-63.mdx";
import { MDXComponents } from 'mdx/types';

const components = { Ch6Ex63 }
const data = { product: 'next' }

type Props = {
    // source: MDXRemoteProps<unknown, unknown>;
    components?: MDXComponents | null | undefined
}

export default function DynamicContent({ components }: Props) {
  return (
    <div className="wrapper">
      <MDXRemote components={components} />
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source =
    'Some **mdx** text, with a component <Test product={product} />'
  const mdxSource = await serialize(source, { scope: data })
  return { props: { source: mdxSource } }
}