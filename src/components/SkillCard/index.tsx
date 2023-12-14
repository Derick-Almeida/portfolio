import * as S from "./style";

import { ISkillProps } from "../../types";

const SkillCard = ({ name, icon: Icon }: ISkillProps) => {
  return (
    <S.li>
      <Icon />
      <S.p>{name}</S.p>
    </S.li>
  );
};

export default SkillCard;
