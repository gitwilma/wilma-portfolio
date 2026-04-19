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
  display: flex;
  flex-direction: column;
  gap: ${spacing.xlarge};
`;

export const CompanyHeader = styled.header`
  display: flex;
  align-items: flex-start;
`;

export const CompanyIdentity = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.medium};
`;

export const CompanyLogoMark = styled.div`
  width: 60px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background.muted};

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

export const CompanyName = styled.h3`
  ${typography.display.large};
  margin: 0;
  color: ${colors.text.primary};
  line-height: 1;
`;

export const ExperienceEntryRole = styled.p`
  ${typography.body.large};
  margin: 0;
  color: ${colors.text.secondary};
`;

export const ExperienceBodyGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 320px;
  gap: ${spacing.xxlarge};
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xlarge};
  }
`;

export const ExperienceTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  min-width: 0;
`;

export const ExperienceSectionTitle = styled.h4`
  ${typography.body.large};
  margin: 0;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const ExperienceEntryHeader = styled.h3`
  margin: 0;
  ${typography.body.large};
  font-weight: 600;
`;

export const ExperienceEntrySummary = styled.p`
  ${typography.body.medium};
  margin: 0;
  color: ${colors.text.primary};
  max-width: 34ch;
`;

export const ExperienceList = styled.ul`
  ${typography.body.medium};
  color: ${colors.text.primary};
  margin: 0;
  padding-left: 1.2em;
`;

export const ExperienceListItem = styled.li`
  margin-bottom: 0.2em;
`;

export const ExperienceVisualColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;

export const ExperienceSkills = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 56px);
  gap: ${spacing.medium};
  justify-content: center;

  @media (max-width: 1100px) {
    justify-content: start;
  }
`;

export const ExperienceSkillTag = styled.span`
  ${typography.body.small};
  width: 56px;
  height: 56px;
  border-radius: ${radius.full};
  background: ${colors.background.muted};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.text.primary};
  font-weight: 600;
`;