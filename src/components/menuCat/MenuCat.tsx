import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MenuCatWrapper from "./MenuCatWrapper";

export default function MenuCat() {
  return (
    <MenuCatWrapper>
      <Tabs>
        <div className="menuCat">
          <TabList>
            <Tab>
              <h3
                className="soft food"
                onClick={() => {
                  console.log("soft-Modal");
                }}
              >
                Soft Drink
              </h3>
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
        </div>
        <TabPanel>soft drinks list</TabPanel>
        <TabPanel>Alcohol content</TabPanel>
        <TabPanel>Starter content</TabPanel>
        <TabPanel>Main content</TabPanel>
        <TabPanel>desert content</TabPanel>
      </Tabs>
    </MenuCatWrapper>
  );
}
