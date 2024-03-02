import Accordion from "./Accordion";

import Ch6Ex49 from "../../content/exercises/chapter-6-exercises/section-6-5-exercises/_exercise-6-49.mdx";

const references: Record<string, string> = {
    "sec3Ex2": "/docs/exercises/section-3-2-exercises.mdx",
};

type Props = {
  referenceKey: string;
  linkText: string;
  title: string;
};

function MathReferenceLink({ referenceKey, linkText, title }: Props) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      console.log(evt.target?.result);
    };
    
    
    const filePath = references[referenceKey];

    // reader.readAsText(Ch6Ex49, "utf-8");

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
