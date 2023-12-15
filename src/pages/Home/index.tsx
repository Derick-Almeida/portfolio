import * as S from "./style";

import ProfileImage from "../../components/ProfileImage";

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
      </S.div>

      <S.div>
        <ProfileImage />
      </S.div>
    </S.container>
  );
};

export default Home;
