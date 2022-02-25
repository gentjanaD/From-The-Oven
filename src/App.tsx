import AppWrapper from "./AppWrapper";
import GlobalStyle from "./globasStyles";
import NavBar from "./components/navBar/NavBar";
import { Fragment } from "react";
import MenuCat from "./components/menuCat/MenuCat";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <div className="App">
          <NavBar />
          <div className="img_div">
            <MenuCat />
          </div>
        </div>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
