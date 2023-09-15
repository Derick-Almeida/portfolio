import * as S from "./style";

const NavBar = () => {
  return (
    <S.header>
      <S.ul>
        <S.li active={true}>home</S.li>
        <S.li active={false}>skills</S.li>
        <S.li active={false}>projects</S.li>
        <S.li active={false}>contacts</S.li>
      </S.ul>
    </S.header>
  );
};

export default NavBar;
