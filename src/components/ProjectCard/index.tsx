import * as S from "./style";

import { IProjectProps } from "../../types";

import { HiExternalLink } from "react-icons/hi";

const ProjectCard = ({ image, link, title, description }: IProjectProps) => {
  return (
    <S.li>
      <S.img src={image} alt="Project image" />

      <S.div>
        <S.h3>{title}</S.h3>
        <S.p>{description}</S.p>
        <S.a href={link} target="_blank">
          <HiExternalLink />
        </S.a>
      </S.div>
    </S.li>
  );
};

export default ProjectCard;
