import styled from "@emotion/styled";
import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";
import { radius } from "../../../theme/radius";

export const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.huge};
  padding-bottom: ${spacing.huge};
`;

export const ExperienceEntryArticle = styled.article`
  display: block;
`;

export const ExperienceEntryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 300px;
  gap: ${spacing.xlarge};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};

  p {
    margin: 0;
    ${typography.body.medium};
    color: ${colors.text.secondary};
  }
`;

export const ExperienceEntryHeader = styled.h3`
  margin: 0;
  ${typography.body.large};
  font-weight: 600;
`;

export const ExperienceEntrySummary = styled.p`
  margin: 0;
  ${typography.body.medium};
`;

export const ExperienceVisualColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.medium};
`;

export const CompanyLogoCircle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${typography.body.medium};
`;

export const ExperienceSkills = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${spacing.small};
`;

export const ExperienceSkillTag = styled.span`
  padding: 6px 10px;
  border-radius: ${radius.full};
  background: ${colors.background.subtle};
  ${typography.body.small};
`;