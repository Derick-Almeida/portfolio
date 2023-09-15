import GlobalStyle from "./style/global";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Home />
    </>
  );
}

export default App;
