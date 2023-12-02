import * as S from "./style";

import DateCard from "../../components/DateCard";
import Navigation from "../../components/Navigation";

const WorkExperience = () => {
  return (
    <S.container>
      <S.h1>Work Experience</S.h1>

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

      <Navigation numberPage="1" direction="right" pageTurnId="turn-1" />
    </S.container>
  );
};

export default WorkExperience;
