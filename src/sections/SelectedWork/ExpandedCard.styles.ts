import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const ExpandedCardContainer = styled.article`
  width: 100%;
  color: ${colors.text.primary};
`;

export const SectionHeader = styled.div`
  padding-bottom: ${spacing.large};
`;

export const IntroTitle = styled.h3`
  ${typography.display.large};
  margin: 0;
  color: ${colors.text.primary};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.border.default};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 360px;
  column-gap: ${spacing.xxlarge};
  row-gap: ${spacing.medium};
  align-items: start;
  padding-top: ${spacing.mediumLow};
  padding-bottom: ${spacing.mediumLow};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TextHeading = styled.h4`
  ${typography.body.large};
  margin: 0;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const CloseButton = styled.button`
  ${typography.button.medium};

  appearance: none;
  justify-self: end;
  align-self: start;

  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: ${colors.text.primary};
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
  }

  @media (max-width: 1100px) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.mediumLow};
  min-width: 0;
`;

export const TextBlock = styled.p`
  ${typography.body.medium};
  margin: 0;
  color: ${colors.text.primary};
  max-width: 34ch;
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 370px;
  padding: ${spacing.large};
  background-color: ${colors.background.muted};
  color: ${colors.text.primary};
  font-weight: 700;
  text-align: center;

  @media (max-width: 1100px) {
    grid-column: 1 / -1;
    max-width: 420px;
  }

  @media (max-width: 768px) {
    min-height: 280px;
    width: 100%;
    max-width: none;
  }
`;