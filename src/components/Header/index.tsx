import * as S from "./style";
import { useState } from "react";

import Nav from "../Nav";

import { IoMenu } from "react-icons/io5";
import NavMobile from "../NavMobile";
import Logo from "../Logo";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const sections = ["home"];

  return (
    <>
      <S.header>
        <Logo />

        <S.button onClick={() => setNav(true)}>
          <IoMenu />
        </S.button>

        <Nav sections={sections} />
      </S.header>

      <NavMobile $nav={nav ? "open" : "close"} setNav={setNav} sections={sections} />
    </>
  );
};

export default Header;
