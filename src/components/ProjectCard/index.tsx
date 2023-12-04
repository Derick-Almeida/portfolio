import { IProjectProps } from "../../types";
import * as S from "./styled";

const ProjectCard = ({ image, title, github }: IProjectProps) => {
  return (
    <S.card>
      <S.div>
        <p>{title}</p>
      </S.div>
      <a href={github} target="_blank">
        <img src={image} alt="project image" />
      </a>
    </S.card>
  );
};

export default ProjectCard;
