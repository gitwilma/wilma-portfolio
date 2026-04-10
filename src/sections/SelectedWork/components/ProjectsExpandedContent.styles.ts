import styled from "@emotion/styled";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";
import { colors } from "../../../theme/colors";

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
`;

export const ProjectCardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #d9d9d9;
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