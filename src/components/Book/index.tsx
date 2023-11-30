import * as S from "./style";

import Profile from "../../pages/Profile";
import WorkExperience from "../../pages/WorkExperience";
import Education from "../../pages/Education";
// import Skills from "../../pages/Skills";
// import Projects from "../../pages/Projects";
// import LatestProject from "../../pages/LatestProject";
// import Contacts from "../../pages/Contacts";
// import ThanksForVisiting from "../../pages/ThanksForVisiting";

const Book = () => {
  return (
    <S.container>
      <S.bookPage className="page-left">
        <Profile />
      </S.bookPage>

      <S.bookPage className="page-right" id="turn-1">
        <S.page className="page-front">
          <WorkExperience />
        </S.page>

        <S.page className="page-back">
          <Education />
        </S.page>
      </S.bookPage>

      {/* <S.bookPage className="page-right" id="turn-2">
        <S.page className="page-front">
          <Skills />
        </S.page>

        <S.page className="page-back">
          <LatestProject />
        </S.page>
      </S.bookPage> */}

      {/* <S.bookPage className="page-right" id="turn-3">
        <S.page className="page-front">
          <Projects />
        </S.page>

        <S.page className="page-back">
          <Contacts />
        </S.page>
      </S.bookPage> */}

      {/* <S.bookPage className="page-right" id="turn-4">
        <ThanksForVisiting />
      </S.bookPage> */}
    </S.container>
  );
};

export default Book;
