import { useState } from "react";
import * as S from "./style";

import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineRadarChart,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <S.header>
      <S.ul>
        <S.li
          className={activeLink === "home" ? "active" : ""}
          onClick={() => setActiveLink("home")}
        >
          <S.a href="#home">
            <S.icon>
              <AiOutlineHome />
            </S.icon>
            <S.span>home</S.span>
          </S.a>
        </S.li>
        <S.li
          className={activeLink === "skills" ? "active" : ""}
          onClick={() => setActiveLink("skills")}
        >
          <S.a href="#skills">
            <S.icon>
              <AiOutlineRadarChart />
            </S.icon>
            <S.span>skills</S.span>
          </S.a>
        </S.li>
        <S.li
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => setActiveLink("projects")}
        >
          <S.a href="#projects">
            <S.icon>
              <AiOutlineGithub />
            </S.icon>
            <S.span>projects</S.span>
          </S.a>
        </S.li>
        <S.li
          className={activeLink === "contacts" ? "active" : ""}
          onClick={() => setActiveLink("contacts")}
        >
          <S.a href="#contacts">
            <S.icon>
              <AiOutlineWhatsApp />
            </S.icon>
            <S.span>contacts</S.span>
          </S.a>
        </S.li>
      </S.ul>
    </S.header>
  );
};

export default NavBar;
