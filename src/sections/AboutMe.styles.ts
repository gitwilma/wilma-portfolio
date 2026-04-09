import styled from "@emotion/styled";
import { SectionContainer } from "../components/layout/SectionContainer";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";
import { spacing } from "../theme/spacing";

export const Section = styled(SectionContainer)`
  scroll-margin-top: 30px;
  background-color: ${colors.background.base};
  color: ${colors.text.primary};
`;

export const Title = styled.h2`
  ${typography.display.large};
  margin: 0 0 ${spacing.xxlarge};
  color: ${colors.text.primary};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 430px;
  gap: ${spacing.huge};
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xxlarge};
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xlarge};
  max-width: 560px;
`;

export const Description = styled.p`
  ${typography.body.medium};
  margin: 0;
  color: ${colors.text.primary};
`;

export const ImageColumn = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;

export const PortraitImage = styled.img`
  width: 100%;
  max-width: 430px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;

  @media (max-width: 1100px) {
    max-width: 420px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;