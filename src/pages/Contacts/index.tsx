import { useRef } from "react";
import emailjs from "@emailjs/browser";

import * as S from "./style";

import Button from "../../components/Button";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_48s5vli", "template_msi9q4y", form.current, "s-9GhQY4lIEemJGR_");
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
    </S.container>
  );
};

export default Contacts;
