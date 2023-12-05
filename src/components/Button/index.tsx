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
        <>
          <a href={link} download={fileName}></a>
          {children}
        </>
      ) : link ? (
        <>
          <a href={link} target="_blank"></a>
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </S.button>
  );
};

export default Button;
