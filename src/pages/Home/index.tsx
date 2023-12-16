import * as S from "./style";

import Button from "../../components/Button";

import ProfileImage from "../../components/ProfileImage";
import cv from "../../assets/C.V._Full-Stack.pdf";

import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <S.container id="Início">
      <S.div>
        <S.p>
          Olá, sou Dérick Silva, Desenvolvedor Web, <S.span>adoro</S.span> criar e{" "}
          <S.span>desenvolver</S.span> projetos.
        </S.p>
        <S.p className="sub">
          Conheça aqui neste ambiente, criado especialmente para você, todos os meus projetos e
          tecnologias
        </S.p>
        <S.buttonsContainer>
          <Button variant="contained" link={cv} download fileName="Derick-Silva_C.V.pdf">
            Download CV
          </Button>
          <Button variant="outlined" link="https://github.com/Derick-Almeida">
            <FaGithub /> Github
          </Button>
        </S.buttonsContainer>
      </S.div>

      <S.div>
        <ProfileImage />
      </S.div>
    </S.container>
  );
};

export default Home;
