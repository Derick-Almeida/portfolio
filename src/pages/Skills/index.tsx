import * as S from "./style";

import TitlePage from "../../components/TitlePage";

import data from "../../database/data.json";
import usingComputer from "../../assets/techs.svg";
import SkillButton from "../../components/SkillButton";

const Skills = () => {
  return (
    <S.container>
      <TitlePage>skills</TitlePage>

      <S.box>
        <S.img src={usingComputer} alt="man using computer sitting on the floor" />
        {data.skills!.map((skill) => (
          <SkillButton key={skill}>{skill}</SkillButton>
        ))}
      </S.box>
    </S.container>
  );
};

export default Skills;
