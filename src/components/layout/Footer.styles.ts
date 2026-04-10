import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${colors.border.default};
  background-color: ${colors.background.base};
  margin-top: ${spacing.huge};
`;

export const FooterTop = styled.div`
  padding-top: ${spacing.xxlarge};
  padding-bottom: ${spacing.xxlarge};
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${spacing.huge};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xxlarge};
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.h2`
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

export const FooterDescription = styled.p`
  ${typography.body.small};
  margin: ${spacing.small} 0 ${spacing.medium};
  max-width: 28ch;
  color: ${colors.text.secondary};
`;

export const FooterCopyright = styled.p`
  ${typography.body.small};
  margin: 0;
  color: ${colors.text.primary};
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  align-items: flex-start;

  @media (min-width: 901px) {
    align-items: flex-start;
  }
`;

export const BackToTop = styled.a`
  ${typography.nav.xlarge};
  font-style: italic;
  color: ${colors.text.primary};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${colors.accent.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.sm};
  }
`;

export const FooterActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: ${spacing.small};
  justify-content: start;
  margin: ${spacing.medium} 0 ${spacing.medium} 0;

  & > *:nth-of-type(3) {
    grid-column: 1 / 2;
  }

  @media (min-width: 901px) {
    justify-content: end;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    & > *:nth-of-type(3) {
      grid-column: auto;
    }
  }
`;

export const FooterEmailLink = styled.a`
  ${typography.body.xsmall};
  color: ${colors.text.primary};
  text-decoration: none;
  margin-top: ${spacing.medium};

  &:hover {
    color: ${colors.accent.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.sm};
  }
`;

export const EmailBlock = styled.address`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.xsmall};
  font-style: normal;

  @media (min-width: 901px) {
    align-items: flex-start;
  }
`;


export const CopyEmailButton = styled.button`
  ${typography.body.small};
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xsmall};
  padding: 0;
  border: none;
  background: none;
  color: ${colors.text.secondary};
  cursor: pointer;
  text-align: left;

  &:hover {
    color: ${colors.accent.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.sm};
  }
`;

export const CopyEmailFeedback = styled.p`
  ${typography.body.xsmall};
  margin: 0;
  min-height: 1.2em;
  color: ${colors.accent.primary};
  align-self: flex-end;
`;


export const FooterBottom = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${colors.background.surface};

  @media (max-width: 768px) {
    min-height: 120px;
  }
`;