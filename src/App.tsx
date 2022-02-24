import AppWrapper from "./AppWrapper";
import GlobalStyle from "./globasStyles";
import { menuData } from "./assets/menuData";
// import SingleItem from "./components/singleItem/SingleItem";
import NavBar from "./components/navBar/NavBar";
import ovenImg from "./assets/oven.jpeg";
import { Fragment, useState } from "react";
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
            {/* <img src={ovenImg} alt="ovenImg" width="60%" /> */}
            {/* {menuData.map((item, index) => (
              <MenuCat key={index} item={item} />
            ))} */}
          </div>
          {console.log(menuData)}
        </div>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
