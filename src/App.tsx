import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Paralax from "./components/Paralax";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Home />
      <Paralax />
    </>
  );
}

export default App;
