import { useMemo, useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  CardCategory,
  CardContainer,
  CardFooter,
  CardGrid,
  CardHeading,
  CardHint,
  CardText,
  CardTop,
} from "../../components/layout/CardContainer";
import { ExpandedCard } from "./ExpandedCard";
import { ExpandedWrapper, Section, Title } from "./SelectedWork.styles";
import { workItems } from "./workItems";

export const SelectedWork = () => {
  const [activeWorkId, setActiveWorkId] = useState<string | null>(null);

  const activeWork = useMemo(
    () => workItems.find((item) => item.id === activeWorkId) ?? null,
    [activeWorkId]
  );

  const handleOpenCase = (id: string) => {
    setActiveWorkId(id);
  };

  const handleCloseCase = () => {
    setActiveWorkId(null);
  };

  return (
    <Section id="selected-work" aria-labelledby="selected-work-title">
      {activeWork ? (
        <>
          <PageContainer>
            <Title id="selected-work-title">Selected work</Title>
          </PageContainer>

          <ExpandedWrapper>
            <ExpandedCard item={activeWork} onClose={handleCloseCase} />
          </ExpandedWrapper>
        </>
      ) : (
        <PageContainer>
          <Title id="selected-work-title">Selected work</Title>

          <CardGrid>
            {workItems.map((item) => (
              <CardContainer
                key={item.id}
                type="button"
                onClick={() => handleOpenCase(item.id)}
                aria-label={`Open details for ${item.title}`}
              >
                <CardTop>
                  <CardCategory>{item.category}</CardCategory>
                  <CardHeading>{item.title}</CardHeading>
                  <CardText>{item.description}</CardText>
                </CardTop>

                <CardFooter>
                  {item.hint ? (
                    <CardHint className="card-hint">{item.hint}</CardHint>
                  ) : null}
                </CardFooter>
              </CardContainer>
            ))}
          </CardGrid>
        </PageContainer>
      )}
    </Section>
  );
};