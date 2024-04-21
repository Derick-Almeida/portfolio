import * as S from "./style";

interface Props {
  sections: string[];
}

const Nav = ({ sections }: Props) => {
  return (
    <S.nav>
      <S.ul>
        {sections.map((section) => (
          <S.link key={section} href="#">
            {section}
          </S.link>
        ))}
      </S.ul>
    </S.nav>
  );
};

export default Nav;
