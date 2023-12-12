import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <GlobalStyle />

      <NavBar />
      <Settings />
      <Home />
      <Footer />
    </>
  );
}

export default App;
