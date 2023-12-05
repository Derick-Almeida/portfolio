import * as S from "./style";

import Navigation from "../../components/Navigation";
import Button from "../../components/Button";

import emailjs from "@emailjs/browser";

import { FaUser } from "react-icons/fa6";
import { useRef } from "react";

interface IContactProps {
  bookReference: React.RefObject<HTMLDivElement>;
}

const Contacts = ({ bookReference }: IContactProps) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_48s5vli", "template_msi9q4y", form.current, "s-9GhQY4lIEemJGR_");
    }
  };

  const backProfile = () => {
    if (bookReference.current) {
      const pages = [...bookReference.current.querySelectorAll(".page-right")];
      pages.pop();

      pages.reverse().forEach((page, index) => {
        setTimeout(() => {
          page.classList.remove("turn");

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
      <S.h1>Contacts</S.h1>

      <S.form ref={form} onSubmit={sendEmail}>
        <S.input type="text" placeholder="Full Name" name="from_name" required />
        <S.input type="email" placeholder="Email Address" name="email" required />
        <S.textarea
          placeholder="Your Message"
          cols={30}
          rows={10}
          name="message"
          required
        ></S.textarea>

        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </S.form>

      <S.span onClick={backProfile}>
        <S.p>profile</S.p>
        <FaUser />
      </S.span>

      <Navigation numberPage="6" direction="left" pageTurnId="turn-3" />
    </S.container>
  );
};

export default Contacts;
