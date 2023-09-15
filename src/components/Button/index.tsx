import { IButtonProps } from "../../types";
import * as S from "./style";

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <S.button {...props}>
      <S.p>{children}</S.p>
    </S.button>
  );
};

export default Button;
