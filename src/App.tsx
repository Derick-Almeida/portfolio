import GlobalStyle from "./style/global";

import Wrapper from "./components/Wrapper";
import Book from "./components/Book";

function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Book />
      </Wrapper>
    </>
  );
}

export default App;
