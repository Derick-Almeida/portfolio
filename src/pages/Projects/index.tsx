import * as S from "./style";

import Navigation from "../../components/Navigation";
import data from "../../database/data";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const projects = data.projects;

  return (
    <S.container>
      <S.h1>Projects</S.h1>

      <S.ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </S.ul>

      <Navigation numberPage="5" direction="right" pageTurnId="turn-3" />
    </S.container>
  );
};

export default Projects;
