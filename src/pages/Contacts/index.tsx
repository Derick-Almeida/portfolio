import * as S from "./style";

import TitlePage from "../../components/TitlePage";

import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";
import usingComputer from "../../assets/studying.svg";

const Contacts = () => {
  return (
    <S.container>
      <TitlePage>contacts</TitlePage>

      <S.div>
        <S.ul>
          <S.li>
            <SiGmail /> d.a.s2000silva14@gmail.com
          </S.li>
          <S.li>
            <SiWhatsapp /> (48) 99921-7517
          </S.li>
          <S.li>
            <S.a href="https://www.linkedin.com/in/derick-almeida/" target="_blank">
              <SiLinkedin /> Linkedin
            </S.a>
          </S.li>
          <S.li>
            <S.a href="https://github.com/Derick-Almeida" target="_blank">
              <SiGithub /> Github
            </S.a>
          </S.li>
        </S.ul>
        <S.img src={usingComputer} alt="man using computer" />
      </S.div>
    </S.container>
  );
};

export default Contacts;
