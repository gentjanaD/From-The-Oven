import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MenuCatWrapper from "./MenuCatWrapper";
import { menuData } from "../../assets/menuData";
import SingleItem from "../singleItem/SingleItem";
import { Item } from "../../types/menuTypes";
import ovenImg from "../../assets/oven.jpeg";

interface MenuCatProps {
  item: Item;
}
export default function MenuCat() {
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
  console.log("alc", alcohol);
  // const [onClick, setOnclick] = useState(false);
  return (
    <MenuCatWrapper>
      <Tabs>
        <div className="menuCat">
          <TabList className="list">
            <Tab></Tab>
            <Tab>
              <h3 className="soft food">Soft Drinks</h3>
            </Tab>
            <Tab>
              <h3
                className="alcohol food"
                onClick={() => {
                  console.log("alcohol-Modal");
                }}
              >
                Alcohol
              </h3>
            </Tab>
            <Tab>
              <h3
                className="starters food"
                onClick={() => {
                  console.log("starters-Modal");
                }}
              >
                Starters
              </h3>
            </Tab>
            <Tab>
              <h3
                className="mains food"
                onClick={() => {
                  console.log("mains-Modal");
                }}
              >
                Mains
              </h3>
            </Tab>
            <Tab>
              <h3
                className="desert food"
                onClick={() => {
                  console.log("desert-Modal");
                }}
              >
                Desert
              </h3>
            </Tab>
          </TabList>
          <div className="panels">
            <TabPanel>
              <img src={ovenImg} alt="ovenImg" width="100%" />
            </TabPanel>
            <TabPanel className="soft panel">
              {softDrinks.map((item, index) => (
                <div className="soft_content">
                  <SingleItem key={index} item={item} />
                </div>
              ))}
            </TabPanel>
            <TabPanel className="alcohol panel">
              {alcohol.map((item, index) => (
                <div className="soft_content">
                  <SingleItem key={index} item={item} />
                </div>
              ))}
            </TabPanel>
            <TabPanel className="starter panel">
              {starters.map((item, index) => (
                <div className="soft_content">
                  <SingleItem key={index} item={item} />
                </div>
              ))}
            </TabPanel>
            <TabPanel className="mains panel">
              {mains.map((item, index) => (
                <div className="soft_content">
                  <SingleItem key={index} item={item} />
                </div>
              ))}
            </TabPanel>
            <TabPanel className="deserts panel">
              {deserts.map((item, index) => (
                <div className="soft_content">
                  <SingleItem key={index} item={item} />
                </div>
              ))}
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </MenuCatWrapper>
  );
}
