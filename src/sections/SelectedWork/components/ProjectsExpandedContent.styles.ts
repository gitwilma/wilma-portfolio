import styled from "@emotion/styled";
import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing.large};
  padding-bottom: ${spacing.huge};
`;

export const ProjectsIntro = styled.div`
  max-width: 700px;

  h3 {
    margin: 0 0 ${spacing.xsmall};
    ${typography.body.large};
    font-weight: 600;
  }

  p {
    margin: 0;
    ${typography.body.medium};
    color: ${colors.text.secondary};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.xlarge};

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  position: relative;
  width: 100%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(240, 239, 224, 0.28);
    pointer-events: none;
    transition: opacity 160ms ease;
  }

  &:hover::after {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

export const ProjectCardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 8;
`;

export const ProjectCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};

  p {
    margin: 0;
    ${typography.body.medium};
    color: ${colors.text.secondary};
  }
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  ${typography.body.large};
  font-weight: 600;
`;

export const ProjectLinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.small};
  margin-top: ${spacing.small};
`;