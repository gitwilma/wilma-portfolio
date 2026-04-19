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
  ExperienceSkills,
  ExperienceSkillTag,
  ExperienceTextColumn,
  ExperienceVisualColumn,
  SectionStack,
} from "./ExperienceExpandedContent.styles";
import type { ExperienceEntry } from "../types";

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
            <ExperienceTextColumn>
              <ExperienceSectionTitle>About the role</ExperienceSectionTitle>
              <ExperienceEntrySummary>{entry.summary}</ExperienceEntrySummary>
            </ExperienceTextColumn>

            <ExperienceTextColumn>
              <ExperienceSectionTitle>Key responsibilities</ExperienceSectionTitle>
              <ExperienceList>
                {entry.details.slice(0, 5).map((detail) => (
                  <ExperienceListItem key={detail}>{detail}</ExperienceListItem>
                ))}
              </ExperienceList>
            </ExperienceTextColumn>

            <ExperienceVisualColumn>
              <ExperienceSkills
                aria-label={`Technologies used at ${entry.company}`}
              >
                {entry.skills.map((skill) => (
                  <li key={skill.id}>
                    <ExperienceSkillTag>{skill.label}</ExperienceSkillTag>
                  </li>
                ))}
              </ExperienceSkills>
            </ExperienceVisualColumn>
          </ExperienceBodyGrid>
        </ExperienceEntryArticle>
      ))}
    </SectionStack>
  );
};