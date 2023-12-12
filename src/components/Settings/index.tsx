import { useEffect, useState } from "react";
import * as S from "./style";

import { LuSun, LuMoon, LuSettings } from "react-icons/lu";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    (localStorage.getItem("@portfolio:theme") as string) || "light"
  );

  useEffect(() => {
    if (localStorage.getItem("@portfolio:theme") !== null) {
      document.querySelector("html")!.dataset["theme"] = theme;
      setTheme(localStorage.getItem("@portfolio:theme") as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchTheme = () => {
    if (document.querySelector("html") !== null) {
      if (document.querySelector("html")!.dataset["theme"] === "dark") {
        document.querySelector("html")!.dataset["theme"] = "light";
        localStorage.setItem("@portfolio:theme", "light");
        setTheme("light");
      } else {
        document.querySelector("html")!.dataset["theme"] = "dark";
        localStorage.setItem("@portfolio:theme", "dark");
        setTheme("dark");
      }
    }
  };

  return (
    <S.container className={openSettings ? "open" : ""}>
      <S.icons>
        <S.span onClick={() => setOpenSettings(!openSettings)}>
          <LuSettings />
        </S.span>

        <S.span onClick={switchTheme}>{theme === "light" ? <LuMoon /> : <LuSun />}</S.span>
      </S.icons>

      <S.colors>
        <S.p>Theme Colors</S.p>
        <S.ul>
          <S.li></S.li>
          <S.li></S.li>
          <S.li></S.li>
          <S.li></S.li>
        </S.ul>
      </S.colors>
    </S.container>
  );
};

export default Settings;
