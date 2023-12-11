import * as S from "./style";

const Footer = () => {
  return (
    <S.footer>
      <S.p>&copy; {new Date().getFullYear()} Dérick Silva – Todos os direitos reservados.</S.p>
    </S.footer>
  );
};

export default Footer;
