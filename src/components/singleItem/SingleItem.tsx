import React from "react";
import { Item } from "../../types/menuTypes";
import SingleItemWrapper from "./SIngleItemWrapper";
// import { menuData } from "../../assets/menuData";

interface SingleItemProps {
  item: Item;
}
export default function SingleItem({ item }: SingleItemProps) {
  console.log(item);

  return (
    <SingleItemWrapper>
      <div className="itemContent">
        <img src={item.image} width="100" height="auto" />
        <h3> {item.name}</h3>
        <h5>${item.price}</h5>
        <p></p>
      </div>
    </SingleItemWrapper>
  );
}
