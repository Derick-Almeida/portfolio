import * as S from "./style";

import Navigation from "../../components/Navigation";
import Button from "../../components/Button";

import data from "../../database/data";

import { HiOutlineExternalLink } from "react-icons/hi";

const LatestProject = () => {
  const project = data.latestProject;

  return (
    <S.container>
      <S.h1>Latest Project</S.h1>

      <S.img src={project.image} alt={project.title} />

      <S.h2>
        {project.title}

        <S.a href={project.site} target="_blank">
          Live Preview <HiOutlineExternalLink />
        </S.a>
      </S.h2>

      <S.p>{project.description}</S.p>

      <S.buttonsContainer>
        <Button variant="contained" link={project.github}>
          Source Code
        </Button>
        <Button variant="outlined" link="https://github.com/Derick-Almeida">
          More Projects
        </Button>
      </S.buttonsContainer>
      <Navigation numberPage="4" direction="left" pageTurnId="turn-2" />
    </S.container>
  );
};

export default LatestProject;
