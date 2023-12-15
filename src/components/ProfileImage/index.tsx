import * as S from "./style";

import luffy from "../../assets/luffy-chibi.png";

const ProfileImage = () => {
  return (
    <S.container>
      <S.img src={luffy} alt="Profile image" />
    </S.container>
  );
};

export default ProfileImage;
