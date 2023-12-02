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

export interface IDateCardProps {
  startYear: string;
  endYear: string;
  title: string;
  children: ReactNode;
}

type DirectionTypes = "left" | "right";

export interface INavigationProps {
  numberPage: string;
  direction: DirectionTypes;
  pageTurnId: string;
}
