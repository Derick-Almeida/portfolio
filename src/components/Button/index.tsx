import * as S from "./style";

import { IButtonProps } from "../../types";

const Button = ({
  children,
  link,
  fileName,
  download = false,
  variant = "default",
  ...props
}: IButtonProps) => {
  return (
    <S.button {...props} variant={variant}>
      {link && download ? (
        <a href={link} download={fileName}>
          {children}
        </a>
      ) : link ? (
        <a href={link} target="_blank">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </S.button>
  );
};

export default Button;
