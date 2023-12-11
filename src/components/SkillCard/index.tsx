import * as S from "./style";

import { ISkillProps } from "../../types";

const SkillCard = ({ name, icon: Icon }: ISkillProps) => {
  return (
    <S.li>
      <S.p>{name}</S.p>
      <Icon />
    </S.li>
  );
};

export default SkillCard;
