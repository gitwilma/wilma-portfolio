import { PageContainer } from "../../components/layout/PageContainer";
import type { WorkItem } from "./types";
import {
  CloseButton,
  ExpandedCardContainer,
  ExpandedCardHeader,
  Heading,
} from "./ExpandedCard.styles";
import { ExperienceExpandedContent } from "./components/ExperienceExpandedContent";
import { ContentExpandedContent } from "./components/ContentExpandedContent";
import { ProjectsExpandedContent } from "./components/ProjectsExpandedContent";

type ExpandedCardProps = {
  item: WorkItem;
  onClose: () => void;
};

export const ExpandedCard = ({ item, onClose }: ExpandedCardProps) => {
  return (
    <ExpandedCardContainer aria-labelledby={`selected-work-expanded-${item.id}`}>
      <PageContainer>
        <ExpandedCardHeader>
            <Heading id={`selected-work-expanded-${item.id}`}>
                {item.type === "experience" && item.entries[0]?.company
                ? item.entries[0].company
                : item.title}
            </Heading>
          <CloseButton
            type="button"
            onClick={onClose}
            aria-label={`Close details for ${item.title}`}
          >
            X Close
          </CloseButton>
        </ExpandedCardHeader>

        {item.type === "experience" && (
          <ExperienceExpandedContent entries={item.entries} />
        )}

        {item.type === "content" && (
          <ContentExpandedContent entries={item.entries} />
        )}

        {item.type === "projects" && (
          <ProjectsExpandedContent intro={item.intro} entries={item.entries} />
        )}
      </PageContainer>
    </ExpandedCardContainer>
  );
};