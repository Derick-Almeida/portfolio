import * as S from "./style";

import { IoClose } from "react-icons/io5";

interface Props {
  $nav: string;
  setNav: (e: boolean) => void;
  sections: string[];
}

const NavMobile = ({ $nav, setNav, sections }: Props) => {
  return (
    <S.nav $nav={$nav}>
      <S.ul>
        <S.button onClick={() => setNav(false)}>
          <IoClose />
        </S.button>

        {sections.map((section) => (
          <S.link key={section} href="#">
            {section}
          </S.link>
        ))}
      </S.ul>
    </S.nav>
  );
};

export default NavMobile;
