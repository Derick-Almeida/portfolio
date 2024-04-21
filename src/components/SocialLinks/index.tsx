import * as S from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <S.container>
      <S.link href="https://github.com/Derick-Almeida" target="_blank">
        <FaGithub /> github
      </S.link>
      <S.link href="https://www.linkedin.com/in/derick-almeida/" target="_blank">
        <FaLinkedin /> linkedin
      </S.link>
    </S.container>
  );
};

export default SocialLinks;
