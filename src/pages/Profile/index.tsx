import * as S from "./style";

import Button from "../../components/Button";
import cv from "../../assets/C.V._Full-Stack.pdf";

const Profile = () => {
  return (
    <S.container>
      <Button variant="contained" link={cv} fileName="C.V._Dérick_Silva.pdf">
        Dowload CV
      </Button>
      <Button variant="outlined">Contact Me</Button>
    </S.container>
  );
};

export default Profile;
