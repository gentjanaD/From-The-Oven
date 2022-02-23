import React from "react";
import { Item } from "../../types/menuTypes";
import Modal from "../modal/Modal";
import MenuCatWrapper from "./MenuCatWrapper";
// interface MenuCatProps {
//   item: Item;
// }
export default function MenuCat() {
  return (
    <MenuCatWrapper>
      <div className="menuCat">
        <h3
          className="soft food"
          onClick={() => {
            console.log("soft-Modal");
          }}
        >
          Soft Drinks
        </h3>
        <h3
          className="alcohol food"
          onClick={() => {
            console.log("alcohol-Modal");
          }}
        >
          Alcohol
        </h3>
        <h3
          className="starters food"
          onClick={() => {
            console.log("starters-Modal");
          }}
        >
          Starters
        </h3>
        <h3
          className="mains food"
          onClick={() => {
            console.log("mains-Modal");
          }}
        >
          Mains
        </h3>
        <h3
          className="desert food"
          onClick={() => {
            console.log("desert-Modal");
          }}
        >
          Desert
        </h3>
      </div>
    </MenuCatWrapper>
  );
}
