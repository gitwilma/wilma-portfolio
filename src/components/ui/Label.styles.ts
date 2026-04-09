import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const StyledLabel = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${spacing.xsmall} ${spacing.small};
  border-radius: ${radius.sm};

  background-color: ${colors.background.label};
  color: ${colors.text.primary};

  ${typography.caption.medium};

  text-decoration: none;
  white-space: nowrap;

  transition:
    background-color 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    background-color: ${colors.accent.softHover};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${colors.focus.ring};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;