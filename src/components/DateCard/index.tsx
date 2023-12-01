import * as S from "./style";

import { IDateCardProps } from "../../types";

import { FaCalendarAlt } from "react-icons/fa";

const DateCard = ({ startYear, endYear, title, children }: IDateCardProps) => {
  return (
    <S.card>
      <S.span>
        <FaCalendarAlt /> {startYear} - {endYear}
      </S.span>

      <S.h3>{title}</S.h3>

      <S.p>{children}</S.p>
    </S.card>
  );
};

export default DateCard;
