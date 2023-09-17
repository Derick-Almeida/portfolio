import { IChildrenProps } from "../../types";
import * as S from "./style";

const SkillButton = ({ children }: IChildrenProps) => {
  return <S.span>{children}</S.span>;
};

export default SkillButton;
