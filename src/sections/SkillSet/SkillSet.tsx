import { PageContainer } from "../../components/layout/PageContainer";
import { SkillItem } from "./SkillItem";
import {
  Section,
  Title,
  CardGrid,
  SkillCard,
  CardTitle,
  SkillContent,
  LogoGrid,
} from "./SkillSet.styles";

const PlaceholderLogo = () => <span />;

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Developer",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Emotion",
      "Styled Components",
      "Accessibility",
      "Responsive Design",
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
          {skillCategories.map((category) => (
            <SkillCard key={category.id}>
              <CardTitle>{category.title}</CardTitle>

              <SkillContent>
                <LogoGrid>
                  {category.skills.map((skill) => (
                    <SkillItem
                      key={skill}
                      label={skill}
                      image={<PlaceholderLogo />}
                    />
                  ))}
                </LogoGrid>
              </SkillContent>
            </SkillCard>
          ))}
        </CardGrid>
      </PageContainer>
    </Section>
  );
};