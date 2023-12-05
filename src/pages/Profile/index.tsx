import * as S from "./style";

import Button from "../../components/Button";

import cv from "../../assets/C.V._Full-Stack.pdf";
import ProfileImage from "../../components/ProfileImage";

interface IProfileProps {
  bookReference: React.RefObject<HTMLDivElement>;
}

const Profile = ({ bookReference }: IProfileProps) => {
  const contactMe = () => {
    if (bookReference.current) {
      const pages = [...bookReference.current.querySelectorAll(".page-right")];
      pages.pop();

      pages.forEach((page, index) => {
        setTimeout(() => {
          page.classList.add("turn");

          setTimeout(() => {
            const typingPage = page as HTMLElement;
            typingPage.style.zIndex = `${20 + index}`;
          }, 500);
        }, (index + 1) * 100);
      });
    }
  };

  return (
    <S.container>
      <ProfileImage />
      <S.h1>Dérick Silva</S.h1>
      <S.h3>Web Developer</S.h3>

      <S.p>
        Hi, i'am Dérick Silva, a Web Developer, I <i>love</i> creating and <i>developing</i>{" "}
        projects.
        <br />
        Discover here in this environment, created especially for you, all my projects and
        technologies
      </S.p>

      <S.buttonsContainer>
        <Button variant="contained" link={cv} download fileName="C.V._Dérick_Silva.pdf">
          Dowload CV
        </Button>
        <Button variant="outlined" onClick={contactMe}>
          Contact Me
        </Button>
      </S.buttonsContainer>
    </S.container>
  );
};

export default Profile;
