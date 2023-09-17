import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Paralax from "./components/Paralax";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />

      <NavBar />
      <Home />
      <Paralax />
      <Skills />
      <Projects />
      <Paralax />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
