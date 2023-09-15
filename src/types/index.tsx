import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
