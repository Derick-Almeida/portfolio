import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IProjectProps {
  id: string;
  title: string;
  image: string;
  github: string;
  site: string;
  hasFrontend: boolean;
}
