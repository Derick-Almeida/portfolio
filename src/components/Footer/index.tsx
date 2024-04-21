import * as S from "./style";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <S.footer>&copy; {currentYear} Dérick Silva – Todos os direitos reservados.</S.footer>;
};

export default Footer;
