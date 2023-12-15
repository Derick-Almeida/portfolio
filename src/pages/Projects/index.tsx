import * as S from "./style";

import ProjectCard from "../../components/ProjectCard";

import data from "../../database/data";

const Projects = () => {
  return (
    <S.container id="Projetos">
      <S.h2>Projetos</S.h2>

      <S.ul>
        {data.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </S.ul>
    </S.container>
  );
};

export default Projects;
