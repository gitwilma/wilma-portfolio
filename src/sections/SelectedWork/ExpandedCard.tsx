import type { WorkItem } from "./workItems";
import {
  CloseButton,
  ContentGrid,
  Divider,
  ExpandedCardContainer,
  ImageArea,
  IntroTitle,
  SectionHeader,
  TextBlock,
  TextColumn,
  TextHeading,
} from "./ExpandedCard.styles";

type ExpandedCardProps = {
  item: WorkItem;
  onClose: () => void;
};

export const ExpandedCard = ({ item, onClose }: ExpandedCardProps) => {
  return (
    <ExpandedCardContainer aria-labelledby={`expanded-title-${item.id}`}>
      <SectionHeader>
        <IntroTitle id={`expanded-title-${item.id}`}>{item.introTitle}</IntroTitle>
      </SectionHeader>

      <Divider />

      <ContentGrid>
        <TextHeading>{item.title}</TextHeading>
        <TextHeading>{item.category}</TextHeading>

        <CloseButton
          type="button"
          onClick={onClose}
          aria-label={`Close details for ${item.title}`}
        >
          × Close
        </CloseButton>

        <TextColumn>
          {item.leftColumn.map((paragraph) => (
            <TextBlock key={paragraph}>{paragraph}</TextBlock>
          ))}
        </TextColumn>

        <TextColumn>
          {item.middleColumn.map((paragraph) => (
            <TextBlock key={paragraph}>{paragraph}</TextBlock>
          ))}
        </TextColumn>

        <ImageArea aria-label={item.imageAlt}>IMAGE AREA</ImageArea>
      </ContentGrid>

      <Divider />
    </ExpandedCardContainer>
  );
};