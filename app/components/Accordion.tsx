"use client";

import {
  Accordion as FumaAccordion,
  Accordions as FumaAccordions,
} from "fumadocs-ui/components/accordion";

import styled from "@emotion/styled";

const Accordions = styled(FumaAccordions)`
  padding: 0 8px;
  background-color: rgba(139, 63, 245, 0.28);
  font-size: 24px;
  border-radius: 4px;
`;

const Divider = styled.hr`
  color: var(--primary-foreground);
  border-color: var(--primary-foreground);
  margin: 0;
`;

type Props = {
  children: React.ReactNode;
  title: string;
  type?: "single" | "multiple";
};

function Accordion({ children, type = "single", title }: Props) {
  return (
    <Accordions type={type}>
      <FumaAccordion title={title}>
        <Divider />
        {children}
      </FumaAccordion>
    </Accordions>
  );
}

export default Accordion;
