import styled from "@emotion/styled";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { radius } from "../theme/radius";

export const IntroSection = styled.section`
  min-height: 100vh;
  background-color: ${colors.background.base};
  color: ${colors.text.primary};
  padding-top: ${spacing.mediumLow};
  padding-bottom: ${spacing.huge};
`;

export const IntroContent = styled.div`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  align-items: center;
  justify-content: center;
  gap: ${spacing.xxlarge};
  max-width: 920px;
  margin: 0 auto;
  padding-top: ${spacing.xlarge};
  padding-bottom: ${spacing.xxlarge};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 680px;
    padding-top: ${spacing.xxlarge};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 320px;
  aspect-ratio: 3 / 4;
  border: 2px solid ${colors.border.default};
  background-color: ${colors.background.subtle};

  @media (max-width: 900px) {
    width: min(100%, 320px);
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.mediumLow};
`;

export const Name = styled.h1`
  margin: 0;
  color: ${colors.text.primary};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  text-transform: uppercase;

  span {
    ${typography.heading.large};
    letter-spacing: 0.01em;
  }
`;

export const AccentInitial = styled.span`
  color: ${colors.accent.primary};
`;

export const LastName = styled.span`
  ${typography.display.large};
  line-height: 1.05;
  font-style: italic;
`;

export const Role = styled.p`
  ${typography.body.large};
  margin: 0;
  color: ${colors.text.primary};
`;

export const Description = styled.p`
  ${typography.body.medium};
  margin: 0;
  color: ${colors.text.primary};
  max-width: 620px;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  flex-wrap: wrap;
`;

export const SecondaryAction = styled.a`
  ${typography.button.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${spacing.small} ${spacing.medium};
  border-radius: ${radius.full};
  background-color: ${colors.background.label};
  color: ${colors.text.primary};
  text-decoration: none;

  &:hover {
    background-color: ${colors.accent.soft};
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
  }
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.xlarge};
  flex-wrap: wrap;
`;

export const BottomNavButton = styled.a`
  ${typography.button.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: ${spacing.small} ${spacing.xlarge};
  border: 1px solid ${colors.border.default};
  border-radius: ${radius.xl};
  background-color: ${colors.background.base};
  color: ${colors.text.primary};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${colors.state.hoverSurface};
  }

  &:active {
    background-color: ${colors.state.pressedSurface};
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
  }
`;