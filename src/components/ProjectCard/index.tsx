import * as S from "./style";

import Button from "../Button";

import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { IProjectProps } from "../../types";

export const ProjectCard = ({ title, image, hasFrontend, github, site }: IProjectProps) => {
  return (
    <S.li img={image}>
      <S.div>
        <S.h2>{title}</S.h2>

        <S.buttons>
          {hasFrontend && (
            <a href={site} target="_blank">
              <Button>
                <BiLinkExternal /> See app
              </Button>
            </a>
          )}
          <a href={github} target="_blank">
            <Button>
              <BiLogoGithub /> See github
            </Button>
          </a>
        </S.buttons>
      </S.div>
    </S.li>
  );
};

export default ProjectCard;
