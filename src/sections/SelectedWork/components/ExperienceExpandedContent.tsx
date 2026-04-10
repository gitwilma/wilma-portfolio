import {
  CompanyLogoCircle,
  ExperienceEntryArticle,
  ExperienceEntryGrid,
  ExperienceEntryHeader,
  ExperienceEntrySummary,
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
        <ExperienceEntryArticle key={entry.id} aria-labelledby={`${entry.id}-title`}>
          <ExperienceEntryGrid>
            <ExperienceTextColumn>
              <ExperienceEntryHeader id={`${entry.id}-title`}>
                {entry.company}
              </ExperienceEntryHeader>
              <ExperienceEntrySummary>{entry.summary}</ExperienceEntrySummary>
              {entry.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </ExperienceTextColumn>

            <ExperienceTextColumn>
              <ExperienceEntryHeader>Role highlights</ExperienceEntryHeader>
              {entry.details.slice(0, 2).map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </ExperienceTextColumn>

            <ExperienceVisualColumn>
              <CompanyLogoCircle aria-hidden="true">
                COMPANY
                <br />
                LOGO
              </CompanyLogoCircle>

              <ExperienceSkills aria-label={`Technologies used at ${entry.company}`}>
                {entry.skills.map((skill) => (
                  <li key={skill.id}>
                    <ExperienceSkillTag>{skill.label}</ExperienceSkillTag>
                  </li>
                ))}
              </ExperienceSkills>
            </ExperienceVisualColumn>
          </ExperienceEntryGrid>
        </ExperienceEntryArticle>
      ))}
    </SectionStack>
  );
};