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
  };

  const counts: any = {};
  basketList.forEach((x: Item) => {
    counts.name = x.name;
    counts.quantity = (counts.quantity || 0) + 1;
  });
  console.log("counts", counts);

  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <div className="App">
          <NavBar basketList={basketList} counts={counts} />
          <div className="img_div">
            <MenuCat basketList={basketList} addToBasket={addToBasket} />
          </div>
        </div>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
