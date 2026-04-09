import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const CardContainer = styled.button`
  appearance: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-height: 240px;
  width: 100%;

  padding: ${spacing.xlarge};

  background-color: ${colors.background.surface};
  color: ${colors.text.secondary};

  border-width: 1px 1px 3px 1px;
  border-style: solid;
  border-color: ${colors.border.default};
  border-radius: ${radius.lg};

  text-align: left;
  cursor: pointer;

  transition:
    transform 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;

  position: relative;

  &:hover .card-hint,
  &:focus-visible .card-hint {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    color: ${colors.text.primary};
    background-color: ${colors.state.hoverSurface};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${colors.state.pressedSurface};
    transform: translateY(0);
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

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.xxlarge};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
`;

export const CardCategory = styled.p`
  ${typography.heading.small};
  color: ${colors.text.secondary};
  margin: 0;
`;

export const CardHeading = styled.h3`
  ${typography.body.large};
  color: ${colors.text.primary};
  margin: 0;
  font-weight: 700;
`;

export const CardText = styled.p`
  ${typography.body.medium};
  color: ${colors.text.secondary};
  margin: 0;
  max-width: 32ch;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: ${spacing.large};
  position: relative;

  &:hover span,
  &:focus-within span {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const CardHint = styled.span`
  ${typography.caption.medium};
  color: ${colors.text.primary};
  font-style: italic;
  opacity: 0;
  pointer-events: none;
  transition: opacity 160ms ease;
  position: absolute;
  right: ${spacing.tiny};
  bottom: ${spacing.xsmall};
`;
