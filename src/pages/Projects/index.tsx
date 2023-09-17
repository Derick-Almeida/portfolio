import * as S from "./style";

import TitlePage from "../../components/TitlePage";
import ProjectCard from "../../components/ProjectCard";

import usingComputer from "../../assets/computer.svg";
import data from "../../database/data.json";

const Projects = () => {
  return (
    <S.container>
      <TitlePage>projects</TitlePage>

      <S.box>
        <S.div>
          <S.img src={usingComputer} alt="man using computer sitting on the floor" />
        </S.div>

        {data.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </S.box>
    </S.container>
  );
};

export default Projects;
