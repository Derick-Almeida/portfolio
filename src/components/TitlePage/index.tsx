import * as S from "./style";
import { IChildrenProps } from "../../types";

const TitlePage = ({ children }: IChildrenProps) => {
  return <S.h2 id={`${children}`}>{children}</S.h2>;
};

export default TitlePage;
