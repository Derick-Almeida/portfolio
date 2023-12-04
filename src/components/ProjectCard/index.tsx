import { IProjectProps } from "../../types";
import * as S from "./styled";

import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({ image, title, github }: IProjectProps) => {
  return (
    <S.card>
      <S.div>
        <S.a href={github} target="_blank">
          <S.p>{title}</S.p>
          <S.span>
            Source Code <HiOutlineExternalLink />
          </S.span>
        </S.a>
      </S.div>
      <S.img src={image} alt="project image" />
    </S.card>
  );
};

export default ProjectCard;
