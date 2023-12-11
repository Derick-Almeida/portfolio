import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

export interface IChildrenProps {
  children: ReactNode;
}

type ButtonTypes = "default" | "outlined" | "contained";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  fileName?: string;
  variant?: ButtonTypes;
  download?: boolean;
}

export interface IProjectProps {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface ISkillProps {
  name: string;
  icon: IconType;
}
