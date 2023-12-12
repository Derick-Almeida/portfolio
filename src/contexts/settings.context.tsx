import { createContext, useEffect, useState } from "react";

import { IChildrenProps, ISettingsContextProps } from "../types";

export const SettingsContext = createContext<ISettingsContextProps>({} as ISettingsContextProps);

const SettingsProvider = ({ children }: IChildrenProps) => {
  const [theme, setTheme] = useState<string>(
    (localStorage.getItem("@portfolio:theme") as string) || "light"
  );
  const [themeColor, setThemeColor] = useState<string>(
    localStorage.getItem("@portfolio:themeColor") || "#00abf0"
  );
  const colors = [
    "#00abf0",
    "#0c00fc",
    "#00f080",
    "#007006",
    "#ff8000",
    "#c90000",
    "#ff009f",
    "#8700be",
  ];

  useEffect(() => {
    if (localStorage.getItem("@portfolio:theme") !== null) {
      setTheme(localStorage.getItem("@portfolio:theme") as string);
      document.querySelector("html")!.dataset["theme"] = localStorage.getItem(
        "@portfolio:theme"
      ) as string;
    }

    if (localStorage.getItem("@portfolio:themeColor") !== null) {
      setThemeColor(localStorage.getItem("@portfolio:themeColor") as string);
    }
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

  const selectThemeColor = (color: string) => {
    localStorage.setItem("@portfolio:themeColor", color);
    setThemeColor(color);
  };

  return (
    <SettingsContext.Provider value={{ theme, switchTheme, themeColor, selectThemeColor, colors }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
