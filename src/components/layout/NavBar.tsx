import styled from "@emotion/styled";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";

export const NavBar = () => {
  return (
    <Wrapper>
      <Brand href="#intro" aria-label="Go to homepage">
        W
      </Brand>

      <Nav aria-label="Section navigation">
        <NavLink href="#selected-work">Selected work</NavLink>
        <NavLink href="#skill-set">Skill set</NavLink>
        <NavLink href="#about-me">About me</NavLink>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${spacing.large};

  margin: 0 ${spacing.xxlarge} 0 ${spacing.large};
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