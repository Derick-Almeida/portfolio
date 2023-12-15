import * as S from "./style";

import SkillCard from "../../components/SkillCard";

import data from "../../database/data";

import zoro from "../../assets/zoro.png";

const Skills = () => {
  return (
    <S.container id="Habilidades">
      <S.h2>Habilidades</S.h2>

      <S.ul>
        <S.img src={zoro} alt="zoro (One piece char)" />

        {data.skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </S.ul>
    </S.container>
  );
};

export default Skills;
