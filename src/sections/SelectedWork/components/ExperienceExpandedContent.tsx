import type { ExperienceEntry } from "../types";
import {
  CompanyHeader,
  CompanyIdentity,
  ExperienceBodyGrid,
  ExperienceEntryArticle,
  ExperienceEntryRole,
  ExperienceEntrySummary,
  ExperienceList,
  ExperienceListItem,
  ExperienceSectionTitle,
  ExperienceTextColumn,
  SectionStack,
} from "./ExperienceExpandedContent.styles";

type Props = {
  entries: ExperienceEntry[];
};

export const ExperienceExpandedContent = ({ entries }: Props) => {
  return (
    <SectionStack>
      {entries.map((entry) => (
        <ExperienceEntryArticle
          key={entry.id}
          aria-labelledby={`${entry.id}-company`}
        >
          <CompanyHeader>
            <CompanyIdentity>
              <ExperienceEntryRole>{entry.role}</ExperienceEntryRole>
            </CompanyIdentity>
          </CompanyHeader>

          <ExperienceBodyGrid>
            {entry.imageSrc && (
              <div style={{ gridRow: "1 / span 2", display: "flex" }}>
                <img
                  src={entry.imageSrc}
                  alt={entry.imageAlt || ""}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            )}
            <ExperienceTextColumn>
              <ExperienceSectionTitle>About the role</ExperienceSectionTitle>
              <ExperienceEntrySummary>{entry.summary}</ExperienceEntrySummary>
            </ExperienceTextColumn>

            <ExperienceTextColumn>
              <ExperienceSectionTitle>
                Key responsibilities
              </ExperienceSectionTitle>
              <ExperienceList>
                {entry.details.slice(0, 5).map((detail) => (
                  <ExperienceListItem key={detail}>{detail}</ExperienceListItem>
                ))}
              </ExperienceList>
            </ExperienceTextColumn>
          </ExperienceBodyGrid>
        </ExperienceEntryArticle>
      ))}
    </SectionStack>
  );
};
