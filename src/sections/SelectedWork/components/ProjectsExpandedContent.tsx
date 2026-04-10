import type { ProjectEntry } from "../types";
import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardText,
  ProjectsGrid,
  ProjectsIntro,
  ProjectsSection,
  ProjectTitle,
} from "./ProjectsExpandedContent.styles";

type Props = {
  intro: string;
  entries: ProjectEntry[];
};

export const ProjectsExpandedContent = ({ intro, entries }: Props) => {
  return (
    <ProjectsSection>
      <ProjectsIntro>
        <h3>Projects</h3>
        <p>{intro}</p>
      </ProjectsIntro>

      <ProjectsGrid>
        {entries.map((entry) => (
          <ProjectCard key={entry.id} aria-labelledby={`${entry.id}-title`}>
            <ProjectCardImage aria-hidden="true" />
            <ProjectCardText>
              <ProjectTitle id={`${entry.id}-title`}>{entry.title}</ProjectTitle>
              <p>{entry.description}</p>
            </ProjectCardText>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};