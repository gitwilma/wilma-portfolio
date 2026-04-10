import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const ExpandedCardContainer = styled.section`
  width: 100%;
  background-color: ${colors.background.surface};

  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const ExpandedCardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${spacing.large};
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.large};
`;


export const CloseButton = styled.button`
  ${typography.nav.large};
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: ${colors.text.primary};

  &:hover {
    color: ${colors.accent.primary};
  }
`;