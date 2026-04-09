import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const StyledLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xsmall};

  min-height: 44px;
  padding: ${spacing.small} ${spacing.medium};

  border: 1px solid ${colors.border.default};
  border-radius: ${radius.xl};

  background-color: ${colors.background.base};
  color: ${colors.text.primary};

  ${typography.button.medium};

  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  transition:
    background-color 160ms ease,
    color 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 80ms ease;

  &:hover {
    background-color: ${colors.state.hoverSurface};
  }

  &:active {
    background-color: ${colors.state.pressedSurface};
    transform: translateY(1px);
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