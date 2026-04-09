import styled from "@emotion/styled";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";
import { colors } from "../../theme/colors";

export const CardContainer = styled.article`
  background-color: ${colors.background.surface};
  color: ${colors.text.primary};
  border-width: 1px 1px 3px 1px;
  border-style: solid;
  border-color: ${colors.border.default};
  border-radius: ${radius.lg};
  padding: ${spacing.large};
`;