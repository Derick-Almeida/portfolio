import * as S from "./style";

import Navigation from "../../components/Navigation";

const Projects = () => {
  return (
    <S.container>
      Projects
      <Navigation numberPage="5" direction="right" pageTurnId="turn-3" />
    </S.container>
  );
};

export default Projects;
