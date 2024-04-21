import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
