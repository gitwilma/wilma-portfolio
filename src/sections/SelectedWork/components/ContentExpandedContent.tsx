import type { ContentEntry } from "../types";
import {
  ContentEntryArticle,
  ContentEntryGrid,
  ContentImage,
  ContentImagesGrid,
  ContentIntro,
  ContentSectionStack,
  ContentTitle,
} from "./ContentExpandedContent.styles";

type Props = {
  entries: ContentEntry[];
};

export const ContentExpandedContent = ({ entries }: Props) => {
  return (
    <ContentSectionStack>
      {entries.map((entry) => (
        <ContentEntryArticle
          key={entry.id}
          aria-labelledby={`${entry.id}-title`}
        >
          <ContentIntro>
            <ContentTitle id={`${entry.id}-title`}>{entry.title}</ContentTitle>
            <p>{entry.summary}</p>
          </ContentIntro>

          <ContentEntryGrid>
            <ContentImagesGrid aria-label={`${entry.title} examples`}>
              {entry.images.map((image) =>
                image.url ? (
                  <a
                    key={image.id}
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContentImage src={image.src} alt={image.alt} />
                  </a>
                ) : (
                  <ContentImage
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                  />
                ),
              )}
            </ContentImagesGrid>
          </ContentEntryGrid>
        </ContentEntryArticle>
      ))}
    </ContentSectionStack>
  );
};
