import React from "react";
import { Item } from "../../types/menuTypes";
import MenuCatWrapper from "./MenuCatWrapper";
// interface MenuCatProps {
//   item: Item;
// }
export default function MenuCat() {
  return (
    <MenuCatWrapper>
      <div className="menuCat">
        <h3 className="soft food">Soft Drinks</h3>
        <h3 className="alcohol food">Alcohol</h3>
        <h3 className="starters food">Starters</h3>
        <h3 className="mains food">Mains</h3>
        <h3 className="desert food">Desert</h3>
      </div>
    </MenuCatWrapper>
  );
}
