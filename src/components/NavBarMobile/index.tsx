import * as S from "./style";

import { INavBarMobileProps } from "../../types";

import { IoClose } from "react-icons/io5";

import chopperChibi from "../../assets/Chopper-chibi.png";

const NavBarMobile = ({
  sections,
  currentLink,
  setCurrentLink,
  meuOpen,
  setMenuOpen,
}: INavBarMobileProps) => {
  return (
    <S.box className={meuOpen ? "open" : ""}>
      <S.div>
        <S.span>
          <IoClose onClick={() => setMenuOpen(false)} />
        </S.span>

        <S.nav>
          {sections.map((sec, index) => (
            <S.a
              key={index}
              className={currentLink == sec ? "current" : ""}
              href={`#${sec}`}
              onClick={() => setCurrentLink(sec)}
            >
              {sec}
            </S.a>
          ))}
        </S.nav>

        <img src={chopperChibi} alt="chopper chibi" />
      </S.div>
    </S.box>
  );
};

export default NavBarMobile;
