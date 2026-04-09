import styled from "@emotion/styled";
import type { JSX, ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const SectionContainer = ({
  children,
  id,
  className,
  as = "section",
}: SectionContainerProps) => {
  return (
    <Section as={as} id={id} className={className}>
      {children}
    </Section>
  );
};

const Section = styled.section`
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 72px 0;
  }
`;