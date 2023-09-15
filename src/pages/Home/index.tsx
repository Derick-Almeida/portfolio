import * as S from "./style";
import coding from "../../assets/coding.svg";
import TitlePage from "../../components/TitlePage";

const Home = () => {
  return (
    <S.container>
      <TitlePage>home</TitlePage>

      <S.box>
        <S.img src={coding} alt="man coding" />

        <S.div>
          <S.p>
            I <b>love</b> creating and <b>developing</b> projects
          </S.p>
          <S.span>
            Discover here in this environment, created especially for you, all my projects and
            technologies
          </S.span>
        </S.div>
      </S.box>
    </S.container>
  );
};

export default Home;
