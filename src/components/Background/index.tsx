import * as S from "./style";

export interface Props {
  img: string;
}

const Background = ({ img }: Props) => {
  return <S.container img={img}></S.container>;
};

export default Background;
