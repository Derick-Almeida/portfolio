import * as S from "./style";

import Navigation from "../../components/Navigation";

const LatestProject = () => {
  return (
    <S.container>
      Latest Project
      <Navigation numberPage="4" direction="left" pageTurnId="turn-2" />
    </S.container>
  );
};

export default LatestProject;
