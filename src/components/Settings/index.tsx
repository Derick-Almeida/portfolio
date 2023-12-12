import { useContext, useState } from "react";
import { SettingsContext } from "../../contexts/settings.context";

import * as S from "./style";

import { LuSun, LuMoon, LuSettings } from "react-icons/lu";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const { theme, switchTheme, colors, selectThemeColor } = useContext(SettingsContext);

  return (
    <S.container className={openSettings ? "open" : ""}>
      <S.icons>
        <S.span onClick={() => setOpenSettings(!openSettings)} className="config">
          <LuSettings />
        </S.span>

        <S.span onClick={switchTheme}>{theme === "light" ? <LuMoon /> : <LuSun />}</S.span>
      </S.icons>

      <S.colors>
        <S.p>Theme Colors</S.p>
        <S.ul>
          {colors.map((color) => (
            <S.li
              key={color}
              style={{ background: color }}
              onClick={() => selectThemeColor(color)}
            ></S.li>
          ))}
        </S.ul>
      </S.colors>
    </S.container>
  );
};

export default Settings;
