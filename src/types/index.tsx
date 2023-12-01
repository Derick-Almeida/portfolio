import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

type ButtonTypes = "default" | "outlined" | "contained";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  fileName?: string;
  variant?: ButtonTypes;
}

export interface IProjectProps {
  id: string;
  title: string;
  image: string;
  github: string;
  site: string;
  hasFrontend: boolean;
}
