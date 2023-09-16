import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Paralax from "./components/Paralax";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Home />
      <Paralax />
      <Skills />

      <Paralax />
    </>
  );
}

export default App;
