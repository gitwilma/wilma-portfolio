import type { AnchorHTMLAttributes, ReactNode } from "react";
import { StyledLabel } from "./Label.styles";

type LabelProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};