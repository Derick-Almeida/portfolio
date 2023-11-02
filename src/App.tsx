import GlobalStyle from "./style/global";
import { useEffect, useRef, useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.current) {
      setSections([...list.current.children] as HTMLElement[]);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />

      <NavBar sections={sections} />

      <div ref={list}>
        <Home />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </>
  );
}

export default App;
