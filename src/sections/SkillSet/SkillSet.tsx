import { PageContainer } from "../../components/layout/PageContainer";
import { SkillItem } from "./SkillItem";
import {
  CardGrid,
  CardTitle,
  LogoGrid,
  Section,
  SkillCard,
  SkillContent,
  SkillList,
  SkillListItem,
  Title,
} from "./SkillSet.styles";

const PlaceholderLogo = () => <span />;

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Developer",
    skills: [
      { label: "React", logo: "/logotypes/react.png" },
      { label: "TypeScript", logo: "/logotypes/typescript.png" },
      { label: "JavaScript", logo: "/logotypes/js.png" },
      { label: "HTML", logo: "/logotypes/html.webp" },
      { label: "CSS", logo: "/logotypes/css.png" },
      { label: "Emotion", logo: "/logotypes/emotion.png" },
      { label: "Styled Components", logo: "/logotypes/styled-components.png" },
      { label: "Accessibility", logo: "/logotypes/accessibility.png" },
      { label: "Responsive Design", logo: "/logotypes/responsive.webp" },
    ],
  },
  {
    id: "content",
    title: "Content",
    skills: [
      "Copywriting",
      "Social Media",
      "Brand Tone",
      "Visual Content",
      "Campaigns",
      "Editing",
    ],
  },
  {
    id: "professional",
    title: "Professional",
    skills: [
      "Collaboration",
      "Communication",
      "Planning",
      "Structure",
      "Problem Solving",
      "Ownership",
    ],
  },
];

export const SkillSet = () => {
  return (
    <Section id="skill-set" aria-labelledby="skill-set-title">
      <PageContainer>
        <Title id="skill-set-title">Skill set</Title>

        <CardGrid>
          <SkillCard key={skillCategories[0].id}>
            <CardTitle>{skillCategories[0].title}</CardTitle>
            <SkillContent>
              <LogoGrid>
                {skillCategories[0].skills.map((skill) =>
                  typeof skill === "string" ? (
                    <SkillItem
                      key={skill}
                      label={skill}
                      image={<PlaceholderLogo />}
                    />
                  ) : (
                    <SkillItem
                      key={skill.label}
                      label={skill.label}
                      image={<img src={skill.logo} alt="" />}
                    />
                  ),
                )}
              </LogoGrid>
            </SkillContent>
          </SkillCard>
          <div /> 
          <SkillCard
            key={skillCategories[1].id}
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <CardTitle>{skillCategories[1].title}</CardTitle>
            <SkillContent>
              <SkillList>
                {skillCategories[1].skills.map((skill) => (
                  <SkillListItem key={typeof skill === "string" ? skill : skill.label}>
                    {typeof skill === "string" ? skill : skill.label}
                  </SkillListItem>
                ))}
              </SkillList>
            </SkillContent>
          </SkillCard>
          <SkillCard
            key={skillCategories[2].id}
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeft: 0,
            }}
          >
            <CardTitle>{skillCategories[2].title}</CardTitle>
            <SkillContent>
              <SkillList>
                {skillCategories[2].skills.map((skill) => (
                  <SkillListItem key={typeof skill === "string" ? skill : skill.label}>
                    {typeof skill === "string" ? skill : skill.label}
                  </SkillListItem>
                ))}
              </SkillList>
            </SkillContent>
          </SkillCard>
        </CardGrid>
      </PageContainer>
    </Section>
  );
};
