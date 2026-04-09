import styled from "@emotion/styled";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const SkillItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.small};
  min-width: 0;
`;

export const SkillItemImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  border-radius: ${radius.full};
  background-color: ${colors.background.muted};

  img,
  svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: ${radius.full};
    background-color: ${colors.border.subtle};
    display: block;
  }
`;

export const SkillItemLabel = styled.span`
  ${typography.caption.medium};
  color: ${colors.text.primary};
  text-align: center;
`;