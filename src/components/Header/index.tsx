import * as S from "./style";
import { useState } from "react";

import Nav from "../Nav";

import { IoMenu } from "react-icons/io5";
import NavMobile from "../NavMobile";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const sections = ["home", "skills", "projects", "contact"];

  return (
    <S.header>
      <S.button onClick={() => setNav(true)}>
        <IoMenu />
      </S.button>

      <Nav sections={sections} />
      <NavMobile $nav={nav ? "open" : "close"} setNav={setNav} sections={sections} />
    </S.header>
  );
};

export default Header;
