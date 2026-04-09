import styled from "@emotion/styled";

type SectionContainerProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => {
  return (
    <Section id={id} className={className}>
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