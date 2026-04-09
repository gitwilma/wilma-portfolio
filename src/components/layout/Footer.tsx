import { PageContainer } from "../layout/PageContainer";
import {
  FooterWrapper,
  FooterInner,
  FooterLeft,
  FooterRight,
  FooterLink,
  FooterText,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <PageContainer>
        <FooterInner>
          <FooterLeft>
            <FooterText>© {new Date().getFullYear()} Wilma Håkansson</FooterText>
          </FooterLeft>

          <FooterRight>
            <FooterLink href="mailto:your@email.com">
              Email
            </FooterLink>

            <FooterLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </FooterLink>

            <FooterLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </FooterLink>
            <FooterLink href="#intro">Back to top</FooterLink>
          </FooterRight>
        </FooterInner>
      </PageContainer>
    </FooterWrapper>
  );
};