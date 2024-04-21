import SignBoard from "../../components/SignBoard";
import SocialLinks from "../../components/SocialLinks";
import * as S from "./style";

import dev from "/img/dev.svg";

const Home = () => {
  return (
    <S.main>
      <S.container>
        <S.content>
          <h2>Olá, eu sou</h2>
          <SignBoard />
          <SocialLinks />
        </S.content>
      </S.container>

      <S.container>
        <S.img src={dev} alt="web developer" />
      </S.container>
    </S.main>
  );
};

export default Home;
