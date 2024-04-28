import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Background from "./components/Background";

import img5 from "/img/magical-cloudy-mountain.jpg";
import Load from "./components/Load";
import { useState } from "react";

function App() {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2250);

  return (
    <>
      <GlobalStyle load={load} />
      <Background img={img5} />

      <Load load={load} />

      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
