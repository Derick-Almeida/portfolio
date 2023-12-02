import { useEffect, useRef } from "react";

import * as S from "./style";

import { IChildrenProps } from "../../types";

const Wrapper = ({ children }: IChildrenProps) => {
  const cover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (cover.current) {
        cover.current.classList.add("turn");
      }
    }, 2000);

    setTimeout(() => {
      if (cover.current) {
        cover.current.style.zIndex = "-1";
      }
    }, 2800);

    return () => {};
  }, []);

  return (
    <S.container>
      <S.cover className="cover-left"></S.cover>
      <S.cover className="cover-right" ref={cover}></S.cover>

      {children}
    </S.container>
  );
};

export default Wrapper;
