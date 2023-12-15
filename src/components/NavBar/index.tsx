import { useEffect, useState } from "react";

import * as S from "./style";

import NavBarMobile from "../NavBarMobile";

import { TfiMenu } from "react-icons/tfi";

const NavBar = () => {
  const sections = ["Início", "Habilidades", "Projetos", "Contato"];

  const [currentLink, setCurrentLink] = useState<string>("Início");
  const [windowSize, setWindowSize] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setWindowSize(window.outerWidth);

    const noteTheSize = () => {
      setWindowSize(window.outerWidth);
    };

    window.addEventListener("resize", noteTheSize);

    return () => {};
  }, []);

  return (
    <S.header>
      <S.h1>
        <i>&lt;</i> dérick silva <i>/&gt;</i>
      </S.h1>

      <S.nav>
        {windowSize > 700 ? (
          sections.map((sec, index) => (
            <S.a
              key={index}
              className={currentLink == sec ? "current" : ""}
              href={`#${sec}`}
              onClick={() => setCurrentLink(sec)}
            >
              {sec}
            </S.a>
          ))
        ) : (
          <>
            <S.span onClick={() => setMenuOpen(true)}>
              <TfiMenu />
            </S.span>

            <NavBarMobile
              sections={sections}
              currentLink={currentLink}
              setCurrentLink={setCurrentLink}
              meuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </>
        )}
      </S.nav>
    </S.header>
  );
};

export default NavBar;
