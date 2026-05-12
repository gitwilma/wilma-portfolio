import { useEffect, useState } from "react";
import meImage from "../../assets/me-img4.jpg";
import { PageContainer } from "../layout/PageContainer";
import { Label } from "../ui/Label";
import {
  AccentInitial,
  BackToTop,
  CopyEmailButton,
  CopyEmailFeedback,
  EmailBlock,
  FooterActions,
  FooterBottom,
  FooterCopyright,
  FooterDescription,
  FooterInner,
  FooterLeft,
  FooterMobileImage,
  FooterRight,
  FooterTop,
  FooterWrapper,
  LastName,
  Name,
} from "./Footer.styles";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "wilma.haakansson@gmail.com";

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <FooterWrapper>
      <FooterTop>
        <PageContainer>
          <FooterInner>
            <FooterLeft>
              <Name>
                <span>
                  <AccentInitial>W</AccentInitial>ILMA
                </span>
                <LastName>HÅKANSSON</LastName>
              </Name>

              <FooterDescription>
                Frontend developer focused on clear, user-friendly and
                maintainable interfaces.
              </FooterDescription>

              <FooterCopyright>
                © {new Date().getFullYear()}, Wilma Håkansson
              </FooterCopyright>

              <FooterMobileImage
                src={meImage}
                alt="Portrait of Wilma Håkansson"
              />
            </FooterLeft>

            <FooterRight>
              <BackToTop href="#intro">Back to top</BackToTop>

              <FooterActions>
                <Label
                  href="https://www.linkedin.com/in/wilma-håkansson-7374a3234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Label>

                <Label
                  href="https://github.com/gitwilma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Label>

                <Label href="/cv.pdf" download>
                  Download CV
                </Label>
              </FooterActions>

              <EmailBlock>
                <CopyEmailButton
                  type="button"
                  onClick={handleCopy}
                  aria-label={`Copy email address ${email}`}
                >
                  <span>{email}</span>
                </CopyEmailButton>

                <CopyEmailFeedback
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {copied ? "Copied!" : ""}
                </CopyEmailFeedback>
              </EmailBlock>
            </FooterRight>
          </FooterInner>
        </PageContainer>
      </FooterTop>

      <FooterBottom aria-hidden="true" />
    </FooterWrapper>
  );
};