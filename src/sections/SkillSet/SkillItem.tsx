import type { ReactNode } from "react";
import { SkillItemCard, SkillItemImageWrapper, SkillItemLabel } from "./SkillItem.styles";


type SkillItemProps = {
  label: string;
  image: ReactNode;
};

export const SkillItem = ({ label, image }: SkillItemProps) => {
  return (
    <SkillItemCard>
      <SkillItemImageWrapper aria-hidden="true">
        {image}
      </SkillItemImageWrapper>

      <SkillItemLabel>{label}</SkillItemLabel>
    </SkillItemCard>
  );
};