import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
