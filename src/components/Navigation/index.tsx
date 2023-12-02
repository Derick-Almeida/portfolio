import * as S from "./style";

import { INavigationProps } from "../../types";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Navigation = ({ numberPage, direction, pageTurnId }: INavigationProps) => {
  const nav = () => {
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn) {
      if (pageTurn.classList.contains("turn")) {
        pageTurn.classList.remove("turn");

        setTimeout(() => {
          pageTurn.style.zIndex = `${20 - +numberPage}`;
        }, 500);
      } else {
        pageTurn.classList.add("turn");

        setTimeout(() => {
          pageTurn.style.zIndex = `${20 + +numberPage}`;
        }, 500);
      }
    }
  };

  return (
    <S.di>
      <S.span className="left" onClick={nav}>
        {direction === "left" && <BiChevronLeft />}
      </S.span>

      {numberPage}

      <S.span className="right" onClick={nav}>
        {direction === "right" && <BiChevronRight />}
      </S.span>
    </S.di>
  );
};

export default Navigation;
