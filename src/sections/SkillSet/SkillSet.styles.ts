import styled from "@emotion/styled";
import { SectionContainer } from "../../components/layout/SectionContainer";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const Section = styled(SectionContainer)`
  scroll-margin-top: 30px;
  background-color: ${colors.background.base};
  color: ${colors.text.primary};
`;

export const Title = styled.h2`
  ${typography.display.large};
  margin: 0 0 ${spacing.xxlarge};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 65px 1fr 1fr;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div<{
  borderStyle?: string;
  borderRadius?: string;
}>`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 420px;
  padding: ${spacing.xlarge};

  border-width: 1px 1px 3px 1px;
  border-style: ${(props) => props.borderStyle || "solid"};
  border-color: ${colors.border.default};
  border-radius: ${(props) => props.borderRadius || radius.lg};

  background-color: ${colors.state.hoverSurface};
`;

export const CardTitle = styled.h3`
  ${typography.body.large};
  font-weight: 700;
  margin: 0 0 ${spacing.xlarge};
  text-align: center;
`;

export const SkillContent = styled.div`
  width: 100%;
  margin-top: ${spacing.medium};
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.large} ${spacing.mediumLow};
  justify-items: center;
`;

export const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

export const SkillListItem = styled.li`
  ${typography.body.large};
  background: ${colors.background.muted};
  color: ${colors.text.secondary};
  border-radius: ${radius.md};
  padding: 0.7em 0;
  text-align: center;
  width: 100%;
`;