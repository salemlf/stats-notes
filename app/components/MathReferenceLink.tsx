import Accordion from "./Accordion";

import Ch6Ex49 from "../../content/exercises/chapter-6-exercises/section-6-5-exercises/_exercise-6-49.mdx";
import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

const references: Record<string, string> = {
    "sec3Ex2": "/docs/exercises/section-3-2-exercises.mdx",
};

type Props = {
  referenceKey: string;
  linkText: string;
  title: string;
};

export function MathReferenceLink ({ referenceKey, linkText, title, ...props }: Props) {
    

  return (
    <Accordion title={title}>
      <p>PLACEHOLDER</p>
    </Accordion>
  );
}


export const SomeOtherComponent = () => {
  return <p>Boop</p>;
};

export const AnotherComponent = () => {
  return <p>Boop</p>;
};

export default MathReferenceLink;


{/* <MathReferenceLink referenceKey="sec3Ex2" linkText="My Cool Exercise">
</MathReferenceLink>

const references = {
  "sec3Ex2": "/docs/exercises/section-3-2-exercises",
};

// const fileContent = references[referenceKey]; */}
