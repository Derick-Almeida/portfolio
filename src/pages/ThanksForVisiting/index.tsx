import * as S from "./style";

import chopper from "../../assets/chopper.png";

const ThanksForVisiting = () => {
  return (
    <S.container>
      Thanks For Visiting
      <img src={chopper} alt="" />
      <div></div>
    </S.container>
  );
};

export default ThanksForVisiting;
