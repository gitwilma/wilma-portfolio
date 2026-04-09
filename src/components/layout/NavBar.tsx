import styled from "@emotion/styled";
import { PageContainer } from "./PageContainer";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const NavBar = () => {
  return (
    <Header>
      <PageContainer>
        <NavBarInner>
          <Brand href="#intro" aria-label="Go to homepage">
            W
          </Brand>

          <Nav aria-label="Section navigation">
            <NavLink href="#selected-work">Selected work</NavLink>
            <NavLink href="#skill-set">Skill set</NavLink>
            <NavLink href="#about-me">About me</NavLink>
          </Nav>
        </NavBarInner>
      </PageContainer>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.background.base};
`;

const NavBarInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${spacing.large};
  padding-top: ${spacing.medium};
  padding-bottom: ${spacing.small};
`;

const Brand = styled.a`
  ${typography.display.xlarge};
  color: ${colors.accent.primary};
  text-decoration: none;
  line-height: 1;

  &:focus-visible {
    outline: 2px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.sm};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.xxlarge};
  padding-top: ${spacing.medium};

  @media (max-width: 900px) {
    gap: ${spacing.large};
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const NavLink = styled.a`
  ${typography.nav.large};
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