import { PageContainer } from "../components/layout/PageContainer";
import { Label } from "../components/ui/Label";
import { LinkButton } from "../components/ui/LinkButton";
import meImage from "../assets/me-img4.jpg";
import {
  IntroSection,
  IntroContent,
  ImageWrapper,
  TextContent,
  Name,
  AccentInitial,
  LastName,
  Description,
  BottomNav,
  LabelRow,
  ProfileImage,
} from "./Intro.styles";

export const Intro = () => {
  return (
    <IntroSection id="intro">
      <PageContainer>
        <IntroContent>
          <ImageWrapper>
            <ProfileImage
                src={meImage}
                alt="Portrait of Wilma Håkansson"
            />
          </ImageWrapper>

          <TextContent>
            <Name>
              <span>
                <AccentInitial>W</AccentInitial>ILMA
              </span>
              <LastName>HÅKANSSON</LastName>
            </Name>

            <Description>
              Frontend developer working with both development and content, focused on creating clear, user-friendly and maintainable digital experiences.
            </Description>

            <LabelRow>
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
            </LabelRow>
          </TextContent>
        </IntroContent>

        <BottomNav aria-label="Intro quick links">
          <LinkButton href="#selected-work">Selected work</LinkButton>
          {/* <LinkButton href="#about-me">About me</LinkButton> */}
          <LinkButton href="#skill-set">Skill set</LinkButton>
        </BottomNav>
      </PageContainer>
    </IntroSection>
  );
};