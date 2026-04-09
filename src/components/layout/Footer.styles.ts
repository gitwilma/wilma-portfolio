import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${colors.border.default};
  background-color: ${colors.background.base};
  margin-top: ${spacing.huge};
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${spacing.large} 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.medium};
  }
`;

export const FooterLeft = styled.div``;

export const FooterRight = styled.div`
  display: flex;
  gap: ${spacing.medium};
`;

export const FooterText = styled.p`
  ${typography.body.small};
  margin: 0;
  color: ${colors.text.secondary};
`;

export const FooterLink = styled.a`
  ${typography.body.small};
  color: ${colors.text.primary};
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
  }
`;