import React from "react";
import { Item } from "../../types/menuTypes";
// import { menuData } from "../../assets/menuData";

interface SingleItemProps {
  item: Item;
}
export default function SingleItem({ item }: SingleItemProps) {
  console.log(item);

  return <div>singleItem {item.name}</div>;
}
