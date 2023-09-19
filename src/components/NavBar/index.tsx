import { useState } from "react";
import * as S from "./style";

const NavBar = () => {
  const [page, setPage] = useState("#");

  return (
    <S.header>
      <S.ul>
        <a href="#" onClick={() => setPage("#")}>
          <S.li $active={page === "#" ? true : false}>home</S.li>
        </a>
        <a href="#skills" onClick={() => setPage("#skills")}>
          <S.li $active={page === "#skills" ? true : false}>skills</S.li>
        </a>
        <a href="#projects" onClick={() => setPage("#projects")}>
          <S.li $active={page === "#projects" ? true : false}>projects</S.li>
        </a>
        <a href="#contacts" onClick={() => setPage("#contacts")}>
          <S.li $active={page === "#contacts" ? true : false}>contacts</S.li>
        </a>
      </S.ul>
    </S.header>
  );
};

export default NavBar;
