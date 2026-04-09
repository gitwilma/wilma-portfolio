import { PageContainer } from "../../components/layout/PageContainer";
import type { WorkItem } from "./workItems";
import {
  CloseButton,
  ContentGrid,
  ExpandedCardContainer,
  ImageArea,
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
      <PageContainer>
        <ContentGrid>
          <TextHeading>{item.title}</TextHeading>
          <TextHeading>{item.category}</TextHeading>

          <CloseButton
            type="button"
            onClick={onClose}
            aria-label={`Close details for ${item.title}`}
          >
            X Close
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

          <ImageArea>IMAGE AREA</ImageArea>
        </ContentGrid>
      </PageContainer>
    </ExpandedCardContainer>
  );
};