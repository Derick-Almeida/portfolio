import * as S from "./style";
import { IButtonProps } from "./types";

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <S.button {...props}>
      <S.p>{children}</S.p>
    </S.button>
  );
};

export default Button;
