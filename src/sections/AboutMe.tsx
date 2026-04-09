
import { PageContainer } from "../components/layout/PageContainer";
import { Content, Description, ImageColumn, PortraitImage, Section, TextColumn, Title } from "./AboutMe.styles";
import meImage from "../assets/me.jpeg";


export const AboutMe = () => {
  return (
    <Section id="about-me" aria-labelledby="about-me-title">
      <PageContainer>
        <Title id="about-me-title">About</Title>

        <Content>
          <TextColumn>
            <Description>
              I’m a frontend developer with a strong interest in building clear,
              thoughtful and user-friendly digital experiences. I enjoy working
              at the intersection of structure, design and implementation, where
              details matter and decisions need to hold up over time.
            </Description>

            <Description>
              My focus is not only on making interfaces look good, but on making
              them feel intuitive and reliable in practice. I care about
              accessibility, maintainability and responsive behaviour, and I
              like turning complexity into something more usable and easier to
              understand.
            </Description>

            <Description>
              I also value collaboration highly and enjoy working closely with
              designers, developers and product teams. For me, good frontend is
              rarely just about code. It is about communication, consistency and
              building solutions that create real value for both users and the
              team maintaining them.
            </Description>
          </TextColumn>

          <ImageColumn>
            <PortraitImage
                src={meImage}
                alt="Portrait of Wilma Håkansson"
                />
          </ImageColumn>
        </Content>
      </PageContainer>
    </Section>
  );
};