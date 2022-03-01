// import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import MenuCatWrapper from "./MenuCatWrapper";
import { menuData } from "../../assets/menuData";
import SingleItem from "../singleItem/SingleItem";
import { Item } from "../../types/menuTypes";
import ovenImg from "../../assets/oven.jpeg";
import Basket from "../basket/Basket";
interface MenuCatProps {
  basketList: Item[];
  addToBasket: (item: Item) => void;
}
export default function MenuCat({ basketList, addToBasket }: MenuCatProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const softDrinks: Item[] = [];
  const alcohol: Item[] = [];
  const starters: Item[] = [];
  const mains: Item[] = [];
  const deserts: Item[] = [];

  menuData.forEach((item: Item) => {
    switch (item.category) {
      case "alcohol":
        return alcohol.push(item);
      case "soft":
        return softDrinks.push(item);
      case "main":
        return mains.push(item);
      case "starter":
        return starters.push(item);
      case "desert":
        return deserts.push(item);
    }
  });
  console.log("basketlist", basketList);
  return (
    <MenuCatWrapper>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index: number) => setTabIndex(index)}
      >
        <div className="menuCat">
          <TabList className="list">
            <Tab></Tab>
            <Tab>
              <h3 className="soft food">Soft Drinks</h3>
            </Tab>
            <Tab>
              <h3 className="alcohol food">Alcohol</h3>
            </Tab>
            <Tab>
              <h3 className="starters food">Starters</h3>
            </Tab>
            <Tab>
              <h3 className="mains food">Mains</h3>
            </Tab>
            <Tab>
              <h3 className="desert food">Desert</h3>
            </Tab>
          </TabList>
          <div className="panels">
            <TabPanel>
              <img id="ovenImg" src={ovenImg} alt="ovenImg" width="100%" />
            </TabPanel>
            <TabPanel className="soft panel" style={{ background: "#717C98" }}>
              <h3>soft drinks</h3>
              {softDrinks.map((item, index) => (
                <div className="soft_content">
                  <SingleItem
                    key={index}
                    item={item}
                    addToBasket={addToBasket}
                  />
                </div>
              ))}
            </TabPanel>
            <TabPanel
              className="alcohol panel"
              style={{ background: "#717C98" }}
            >
              <div className="cat_item_content">
                <h3>alcohol</h3>
                {alcohol.map((item, index) => (
                  <div className="soft_content">
                    <SingleItem
                      key={index}
                      item={item}
                      addToBasket={addToBasket}
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel
              className="starter panel"
              style={{ background: "#C17630" }}
            >
              <h3>starters</h3>
              {starters.map((item, index) => (
                <div className="soft_content">
                  <SingleItem
                    key={index}
                    item={item}
                    addToBasket={addToBasket}
                  />
                </div>
              ))}
            </TabPanel>
            <TabPanel className="mains panel" style={{ background: "#C17630" }}>
              <h3>mains</h3>
              {mains.map((item, index) => (
                <div className="soft_content">
                  <SingleItem
                    key={index}
                    item={item}
                    addToBasket={addToBasket}
                  />
                </div>
              ))}
            </TabPanel>
            <TabPanel
              className="deserts panel"
              style={{ background: "#730B43" }}
            >
              <h3>desserts</h3>
              {deserts.map((item, index) => (
                <div className="soft_content">
                  <SingleItem
                    key={index}
                    item={item}
                    addToBasket={addToBasket}
                  />
                </div>
              ))}
            </TabPanel>
            <Basket basketList={basketList} />
          </div>
        </div>
      </Tabs>
    </MenuCatWrapper>
  );
}
