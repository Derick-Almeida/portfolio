import * as S from "./style";

interface Props {
  load: boolean;
}

const Load = ({ load }: Props) => {
  return (
    <S.container style={{ display: load ? "flex" : "none" }}>
      <img src="/img/loading.gif" alt="loading" />
    </S.container>
  );
};

export default Load;
