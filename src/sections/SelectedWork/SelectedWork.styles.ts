import styled from "@emotion/styled";
import { SectionContainer } from "../../components/layout/SectionContainer";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const Section = styled(SectionContainer)`
  scroll-margin-top: 50px;
  background-color: ${colors.background.base};
  color: ${colors.text.primary};
`;

export const Title = styled.h2`
  ${typography.display.large};
  color: ${colors.text.primary};
  margin: 0 0 ${spacing.xxlarge};
`;