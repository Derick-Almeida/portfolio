import { useContext, useRef } from "react";
import { SettingsContext } from "./contexts/settings.context";

import GlobalStyle from "./style/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  const { theme, themeColor } = useContext(SettingsContext);

  const container = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle themeColor={themeColor} />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={theme as "light" | "dark"}
      />

      <NavBar container={container} />
      <Settings />
      <div ref={container}>
        <Home />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
