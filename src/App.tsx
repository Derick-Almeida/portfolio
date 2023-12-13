import { useContext } from "react";
import { SettingsContext } from "./contexts/settings.context";
import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import Contacts from "./pages/Contacts";

function App() {
  const { themeColor } = useContext(SettingsContext);

  return (
    <>
      <GlobalStyle themeColor={themeColor} />

      <NavBar />
      <Settings />

      <Home />

      <Contacts />
      <Footer />
    </>
  );
}

export default App;
