import { useState } from "react";
import { Item } from "./types/menuTypes";
import AppWrapper from "./AppWrapper";
import GlobalStyle from "./globasStyles";
import NavBar from "./components/navBar/NavBar";
import { Fragment } from "react";
import MenuCat from "./components/menuCat/MenuCat";
function App() {
  const [basketList, setBasketList] = useState<Item[]>([]);

  const addToBasket = (item: Item) => {
    setBasketList((prev) => [...prev, item]);
    item.quantity++;
  };

  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <div className="App">
          <NavBar basketList={basketList} />
          <div className="img_div">
            <MenuCat basketList={basketList} addToBasket={addToBasket} />
          </div>
        </div>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
