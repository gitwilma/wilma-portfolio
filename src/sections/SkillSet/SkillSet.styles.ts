import styled from "@emotion/styled";
import { SectionContainer } from "../../components/layout/SectionContainer";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { radius } from "../../theme/radius";

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.xxlarge};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 420px;
  padding: ${spacing.xlarge};

  border-width: 1px 1px 3px 1px;
  border-style: solid;
  border-color: ${colors.border.default};
  border-radius: ${radius.lg};

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