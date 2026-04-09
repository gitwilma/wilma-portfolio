import {
  Section,
  Inner,
  Title,
  CardGrid,
  WorkCard,
  CardTop,
  CardCategory,
  CardHeading,
  CardText,
  CardFooter,
  CardHint,
} from "./SelectedWork.styles";

const workItems = [
  {
    id: "frontend",
    category: "Frontend Developer",
    title: "Stena Metall",
    description:
      "Worked on a Learning Hub feature from concept to production, with a focus on responsive views, clear structure and collaboration with UX and developers.",
    hint: "Click to read more",
  },
  {
    id: "content",
    category: "Content Creator",
    title: "Freelance",
    description:
      "Created visual and digital content for social media with a focus on clarity, communication and consistent brand tone across formats.",
  },
  {
    id: "projects",
    category: "Projects",
    title: "Selected work",
    description:
      "A collection of frontend and design-focused work that highlights usability, maintainability and thoughtful interface structure.",
  },
];

export const SelectedWork = () => {
  const handleOpenCase = (id: string) => {
    console.log(`Open case: ${id}`);
  };

  return (
    <Section id="selected-work" aria-labelledby="selected-work-title">
      <Inner>
        <Title id="selected-work-title">Selected work</Title>

        <CardGrid>
          {workItems.map((item) => (
            <WorkCard
              key={item.id}
              type="button"
              onClick={() => handleOpenCase(item.id)}
              aria-label={`Open details for ${item.title}`}
            >
              <CardTop>
                <CardCategory>{item.category}</CardCategory>
                <CardHeading>{item.title}</CardHeading>
                <CardText>{item.description}</CardText>
              </CardTop>

              <CardFooter>
                {item.hint ? <CardHint>{item.hint}</CardHint> : null}
              </CardFooter>
            </WorkCard>
          ))}
        </CardGrid>
      </Inner>
    </Section>
  );
};