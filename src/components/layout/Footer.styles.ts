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

  @media (max-width: 768px) {
    align-self: center;

    span {
      ${typography.heading.medium};
    }
  }
`;

export const AccentInitial = styled.span`
  color: ${colors.accent.primary};
`;

export const LastName = styled.span`
  ${typography.display.large};
  line-height: 1.05;
  font-style: italic;

  @media (max-width: 768px) {
    ${typography.heading.large};
    font-style: italic;
  }
`;

export const FooterDescription = styled.p`
  ${typography.body.small};
  margin: ${spacing.small} 0 ${spacing.medium};
  max-width: 28ch;
  color: ${colors.text.secondary};

  @media (max-width: 768px) {
    ${typography.body.small};
    align-self: center;
    text-align: left;
    max-width: 24ch;
    margin: ${spacing.xsmall} 0 ${spacing.xsmall};
  }
`;

export const FooterCopyright = styled.p`
  ${typography.body.xsmall};
  margin: 0;
  color: ${colors.text.secondary};

  @media (max-width: 768px) {
    align-self: center;
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

  @media (max-width: 768px) {
    ${typography.nav.large};
    font-style: italic;
  }
`;

export const FooterTop = styled.div`
  padding-top: ${spacing.xxlarge};
  padding-bottom: ${spacing.xxlarge};

  @media (max-width: 768px) {
    padding-top: ${spacing.medium};
    padding-bottom: 0;
  }
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${spacing.huge};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-bottom: 0;
    background: linear-gradient(
      to bottom,
      ${colors.background.base} 0%,
      ${colors.background.base} 70%,
      ${colors.background.surface} 70%,
      ${colors.background.surface} 100%
    );
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }
`;

export const FooterMobileImage = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: min(100%, 220px);
    aspect-ratio: 3 / 4;
    object-fit: cover;
    margin: ${spacing.small} auto 0;
    filter: grayscale(100%);
    position: relative;
    z-index: 1;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  align-items: flex-start;

  @media (min-width: 901px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: ${spacing.mediumLow} ${spacing.medium} ${spacing.large};
    background-color: ${colors.background.surface};
    align-items: center;
    text-align: center;
  }
`;

export const FooterActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: ${spacing.small};
  justify-content: start;
  margin: ${spacing.medium} 0;

  & > *:nth-of-type(3) {
    grid-column: 1 / 2;
  }

  @media (min-width: 901px) {
    justify-content: end;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${spacing.small} 0;

    & > * {
      background-color: ${colors.accent.primary};
      color: ${colors.text.inverse};
      padding: ${spacing.xsmall} ${spacing.small};
    }

    & > *:hover {
      background-color: ${colors.accent.hover};
      color: ${colors.text.inverse};
    }
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

  @media (max-width: 768px) {
    align-items: center;
    margin-top: ${spacing.small};
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

  @media (max-width: 768px) {
    font-style: italic;
    text-align: center;
  }
`;

export const CopyEmailFeedback = styled.p`
  ${typography.body.xsmall};
  margin: 0;
  min-height: 1.2em;
  color: ${colors.accent.primary};
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${colors.background.surface};

  @media (max-width: 768px) {
    display: none;
  }
`;