import styled from "@emotion/styled";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";

export const ContentSectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.huge};
  padding-bottom: ${spacing.huge};
`;

export const ContentEntryArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};

    @media (max-width: 900px) {
      gap: ${spacing.large};
    }
`;

export const ContentIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  width: 60%;

  p {
    margin: 0;
    ${typography.body.medium};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.h3`
  margin: 0;
  ${typography.body.large};
  font-weight: 600;
`;

export const ContentEntryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xlarge};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: ${spacing.large};
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const ContentImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.mediumHigh};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    gap: ${spacing.small};
    grid-template-columns: none;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 160ms ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
    opacity: 1;
    transition: none;
    &:hover {
      opacity: 1;
    }
  }
`;

export const ContentTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

export const HighlightsList = styled.ul`
  margin: 0;
  padding-left: 18px;
  ${typography.body.medium};

  li {
    margin-bottom: 4px;
  }
`;