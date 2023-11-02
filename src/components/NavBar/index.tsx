import { useState, useEffect, useRef } from "react";
import * as S from "./style";

import {
  AiOutlineHome,
  AiOutlineRadarChart,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const secElements = [
  { name: "home", icon: <AiOutlineHome /> },
  { name: "skills", icon: <AiOutlineRadarChart /> },
  { name: "projects", icon: <AiOutlineGithub /> },
  { name: "contacts", icon: <AiOutlineWhatsApp /> },
];

interface INavBarProps {
  sections: HTMLElement[];
}

const NavBar = ({ sections }: INavBarProps) => {
  const [listItems, setListItems] = useState<HTMLElement[]>([]);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (list.current) {
      setListItems([...list.current.children] as HTMLElement[]);
      [...list.current.children][0].classList.add("active");
    }

    return () => {};
  }, []);

  window.onscroll = () => {
    sections.forEach((section, index) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 60;
      const height = section.offsetHeight;

      if (top >= offset && top < offset + height) {
        [...listItems].forEach((item) => {
          item.classList.remove("active");
        });

        listItems[index].classList.add("active");
      }
    });
  };

  return (
    <S.header>
      <S.ul ref={list}>
        {secElements.map((sec) => (
          <S.li key={sec.name}>
            <S.a href={`#${sec.name}`}>
              <S.icon>{sec.icon}</S.icon>
              <S.span>{sec.name}</S.span>
            </S.a>
          </S.li>
        ))}
      </S.ul>
    </S.header>
  );
};

export default NavBar;
