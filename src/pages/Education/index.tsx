import * as S from "./style";

import Navigation from "../../components/Navigation";
import DateCard from "../../components/DateCard";

const Education = () => {
  return (
    <S.container>
      <S.h1>Education</S.h1>

      <S.ul>
        <DateCard startYear="2023" endYear="2024" title="Web Developer - Company">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit incidunt
          facilis quae, excepturi recusandae at et error vitae sequi itaque voluptatem alias ratione
          non iste est vero distinctio officia?
        </DateCard>

        <DateCard startYear="2023" endYear="2024" title="Web Developer - Company">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit incidunt
          facilis quae, excepturi recusandae at et error vitae sequi itaque voluptatem alias ratione
          non iste est vero distinctio officia?
        </DateCard>
      </S.ul>
      <Navigation numberPage="2" direction="left" pageTurnId="turn-1" />
    </S.container>
  );
};

export default Education;
