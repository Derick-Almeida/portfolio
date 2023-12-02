import { useEffect, useRef } from "react";

import * as S from "./style";

import Profile from "../../pages/Profile";
import WorkExperience from "../../pages/WorkExperience";
import Education from "../../pages/Education";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import LatestProject from "../../pages/LatestProject";
import Contacts from "../../pages/Contacts";
import ThanksForVisiting from "../../pages/ThanksForVisiting";

const Book = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (container.current) {
        container.current.style.display = "block";

        const pages = container.current.querySelectorAll(".page-right");

        [...pages].reverse().forEach((page, index) => {
          setTimeout(() => {
            page.classList.remove("turn");

            setTimeout(() => {
              const typingPage = page as HTMLElement;
              typingPage.style.zIndex = `${10 + index}`;
            }, 500);
          }, (index + 1) * 150);
        });
      }
    }, 2000);

    return () => {};
  }, []);

  return (
    <S.container ref={container}>
      <S.bookPage className="page-left">
        <Profile bookReference={container} />
      </S.bookPage>

      <S.bookPage className="page-right turn" id="turn-1">
        <S.page className="page-front">
          <WorkExperience />
        </S.page>

        <S.page className="page-back">
          <Education />
        </S.page>
      </S.bookPage>

      <S.bookPage className="page-right turn" id="turn-2">
        <S.page className="page-front">
          <Skills />
        </S.page>

        <S.page className="page-back">
          <LatestProject />
        </S.page>
      </S.bookPage>

      <S.bookPage className="page-right turn" id="turn-3">
        <S.page className="page-front">
          <Projects />
        </S.page>

        <S.page className="page-back">
          <Contacts />
        </S.page>
      </S.bookPage>

      <S.bookPage className="page-right turn">
        <S.page className="page-front">
          <ThanksForVisiting />
        </S.page>
      </S.bookPage>
    </S.container>
  );
};

export default Book;
