import type { ContentEntry } from "../types";
import {
  ContentEntryArticle,
  ContentEntryGrid,
  ContentImagesGrid,
  ContentIntro,
  ContentPlaceholder,
  ContentSectionStack,
  ContentTextColumn,
  ContentTitle,
  HighlightsList,
} from "./ContentExpandedContent.styles";

type Props = {
  entries: ContentEntry[];
};

export const ContentExpandedContent = ({ entries }: Props) => {
  return (
    <ContentSectionStack>
      {entries.map((entry) => (
        <ContentEntryArticle key={entry.id} aria-labelledby={`${entry.id}-title`}>
          <ContentIntro>
            <ContentTitle id={`${entry.id}-title`}>{entry.title}</ContentTitle>
            <p>{entry.summary}</p>
          </ContentIntro>

          <ContentEntryGrid>
            <ContentImagesGrid aria-label={`${entry.title} examples`}>
              {entry.images.map((image) => (
                <ContentPlaceholder key={image.id} aria-hidden="true" />
              ))}
            </ContentImagesGrid>

            <ContentTextColumn>
              <ContentTitle>Highlights</ContentTitle>

              <HighlightsList>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </HighlightsList>
            </ContentTextColumn>
          </ContentEntryGrid>
        </ContentEntryArticle>
      ))}
    </ContentSectionStack>
  );
};