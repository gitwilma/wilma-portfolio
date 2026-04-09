import type { AnchorHTMLAttributes, ReactNode } from "react";
import { StyledLinkButton } from "./LinkButton.styles";

type LinkButtonProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return <StyledLinkButton {...props}>{children}</StyledLinkButton>;
};