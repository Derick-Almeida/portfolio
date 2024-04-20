import * as S from "./style";
import { useState } from "react";

import Nav from "../Nav";

import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <S.header>
      <S.button onClick={() => setNav(true)}>
        <IoMenu />
      </S.button>
      <Nav nav={nav} setNav={setNav} />
    </S.header>
  );
};

export default Header;
