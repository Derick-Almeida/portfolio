import * as S from "./style";

import { IChildrenProps } from "../../types";

const Wrapper = ({ children }: IChildrenProps) => {
  return (
    <S.container>
      <S.cover className="cover-left"></S.cover>
      <S.cover className="cover-right turn"></S.cover>

      {children}
    </S.container>
  );
};

export default Wrapper;
