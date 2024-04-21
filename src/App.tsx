import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Background from "./components/Background";

import img5 from "/img/magical-cloudy-mountain.jpg";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background img={img5} />

      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
