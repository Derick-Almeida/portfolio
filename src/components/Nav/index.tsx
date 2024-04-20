import * as S from "./style";

import { IoClose } from "react-icons/io5";

interface Props {
  nav: boolean;
  setNav: (e: boolean) => void;
}

const Nav = ({ nav, setNav }: Props) => {
  return (
    <S.nav nav={nav}>
      <S.ul>
        <S.button onClick={() => setNav(false)}>
          <IoClose />
        </S.button>

        <S.link href="#">home</S.link>
        <S.link href="#">skills</S.link>
        <S.link href="#">projects</S.link>
        <S.link href="#">contact</S.link>
      </S.ul>
    </S.nav>
  );
};

export default Nav;
