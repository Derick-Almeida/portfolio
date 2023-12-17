import { RefObject, createContext, useState } from "react";

import { IChildrenProps, INavigationContextProps } from "../types";

export const NavigationContext = createContext<INavigationContextProps>(
  {} as INavigationContextProps
);

const NavigationProvider = ({ children }: IChildrenProps) => {
  const [clickLink, setClickLink] = useState<boolean>(false);

  const navIndicator = (container: RefObject<HTMLDivElement>, nav: RefObject<HTMLElement>) => {
    if (container.current && nav.current) {
      const secs: HTMLElement[] = [...container.current.children] as HTMLElement[];
      const links = [...nav.current.children];

      const scroll = () => {
        secs.forEach((section) => {
          const top = window.scrollY;
          const height = section.offsetHeight;
          const offset = section.offsetTop - height / 4;
          const id = section.getAttribute("id");

          if (top >= offset && top < offset + height) {
            links.forEach((link) => {
              link.classList.remove("current");

              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("current");
                window.location.hash = `#${id}`;
              }
            });
          }

          if (clickLink) setClickLink(false);
        });
      };

      if (clickLink) {
        window.onscrollend = scroll;
        window.onscroll = () => {};
      } else {
        window.onscroll = scroll;
        window.onscrollend = () => {};
      }
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        clickLink,
        setClickLink,
        navIndicator,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
