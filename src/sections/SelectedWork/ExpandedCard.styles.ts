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
  justify-content: space-between;
  align-items: flex-start;
  gap: ${spacing.large};
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.xsmall};

  @media (max-width: 900px) {
    padding-bottom: ${spacing.medium};
  }
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

export const Heading = styled.h2`
  ${typography.heading.large};
  color: ${colors.text.primary};
  margin: 0;
`;