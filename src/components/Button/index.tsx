import * as S from "./style";

import { IButtonProps } from "../../types";

const Button = ({ children, link, fileName, variant = "default", ...props }: IButtonProps) => {
  return (
    <S.button {...props} variant={variant}>
      {link ? (
        <a href={link} download={fileName}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </S.button>
  );
};

export default Button;
