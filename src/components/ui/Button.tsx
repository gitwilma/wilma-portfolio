import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};