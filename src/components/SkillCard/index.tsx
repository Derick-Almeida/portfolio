import { ISkillProps } from "../../types";
import * as S from "./style";

const SkillCard = ({ name, icon: Icon }: ISkillProps) => {
  return (
    <S.li>
      <Icon />
      <S.p>{name}</S.p>
    </S.li>
  );
};

export default SkillCard;
