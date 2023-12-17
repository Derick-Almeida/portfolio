import { RefObject, useEffect, useRef, useState } from "react";

import * as S from "./style";

import NavBarMobile from "../NavBarMobile";

import { TfiMenu } from "react-icons/tfi";

interface INavBarProps {
  container: RefObject<HTMLDivElement>;
}

const NavBar = ({ container }: INavBarProps) => {
  const sections = ["Início", "Habilidades", "Projetos", "Contato"];

  const [currentLink, setCurrentLink] = useState<string>("Início");
  const [windowSize, setWindowSize] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [clickLink, setClickLink] = useState<boolean>(false);

  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    setWindowSize(window.outerWidth);
    setCurrentLink(decodeURIComponent(window.location.hash.slice(1)) || "Início");

    const noteTheSize = () => {
      setWindowSize(window.outerWidth);
    };

    window.addEventListener("resize", noteTheSize);

    return () => {};
  }, []);

  const scroll = () => {
    if (container.current && nav.current) {
      const secs: HTMLElement[] = [...container.current.children] as HTMLElement[];
      const links = [...nav.current.children];

      secs.forEach((section) => {
        const top = window.scrollY;
        const height = section.offsetHeight;
        const offset = section.offsetTop - height / 4;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setCurrentLink(id!);

          links.forEach((link) => {
            link.classList.remove("current");

            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("current");
              window.location.hash = `#${id}`;
            }
          });
        }

        if (clickLink) setClickLink(false);
      });
    }
  };

  if (clickLink) {
    window.onscrollend = scroll;
    window.onscroll = () => {};
  } else {
    window.onscroll = scroll;
    window.onscrollend = () => {};
  }

  if (menuOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <S.header>
      <S.h1>
        <i>&lt;</i> dérick silva <i>/&gt;</i>
      </S.h1>

      <S.nav ref={nav}>
        {windowSize > 700 ? (
          sections.map((sec, index) => (
            <S.a
              key={index}
              className={currentLink == sec ? "current" : ""}
              href={`#${sec}`}
              onClick={() => setClickLink(true)}
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
