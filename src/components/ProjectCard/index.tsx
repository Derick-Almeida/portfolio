import * as S from "./style";
import banner from "../../assets/shop_now.png";
import Button from "../Button";

import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export const ProjectCard = () => {
  return (
    <S.li img={banner}>
      <S.div>
        <S.h2>Titulo</S.h2>

        <S.buttons>
          <Button>
            <BiLinkExternal /> See app
          </Button>
          <Button>
            <BiLogoGithub /> See github
          </Button>
        </S.buttons>
      </S.div>
    </S.li>
  );
};

export default ProjectCard;
