import * as S from "./style";

import Navigation from "../../components/Navigation";
import SkillCard from "../../components/SkillCard";
import data from "../../database/data";

const Skills = () => {
  return (
    <S.container>
      <S.h1>My Skills</S.h1>

      <S.ul>
        {data.skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </S.ul>

      <Navigation numberPage="3" direction="right" pageTurnId="turn-2" />
    </S.container>
  );
};

export default Skills;
