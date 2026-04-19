import { Label } from "../../../components/ui/Label";
import type { ProjectEntry } from "../types";
import {
  ProjectCard,
  ProjectCardImage,

  ProjectCardText,
  ProjectLinksRow,
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
            <ProjectCardImage src={entry.imageSrc} alt={entry.imageAlt} />
            <ProjectCardText>
              <ProjectTitle id={`${entry.id}-title`}>
                {entry.title}
              </ProjectTitle>
              <p>{entry.description}</p>
            </ProjectCardText>
            {entry.links && (
              <ProjectLinksRow>
                {entry.links.map((link) => (
                  <Label
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ border: "1px solid", padding: "0.25rem 0.5rem", borderRadius: "4px" }}
                  >
                    {link.label}
                  </Label>
                ))}
              </ProjectLinksRow>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};
