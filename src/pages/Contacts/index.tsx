import { useRef } from "react";
import emailjs from "@emailjs/browser";

import * as S from "./style";

import Button from "../../components/Button";

import brook from "../../assets/brook.png";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_48s5vli", "template_msi9q4y", form.current, "s-9GhQY4lIEemJGR_");
    }
  };

  return (
    <S.container id="Contato">
      <S.div>
        <S.h2>Contate-me!</S.h2>

        <S.form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Nome Completo"
            name="from_name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Endereço de Email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            placeholder="Sua Menssagem"
            cols={20}
            rows={10}
            maxLength={10000}
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <Button variant="contained" type="submit">
            Enviar Menssagem
          </Button>
        </S.form>
      </S.div>
      <S.div>
        <S.img src={brook} alt="brook (One piece char)" />
        <S.shadow />
      </S.div>
    </S.container>
  );
};

export default Contacts;
