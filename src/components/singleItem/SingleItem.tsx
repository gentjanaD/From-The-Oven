import React from "react";
import { Item } from "../../types/menuTypes";
interface SingleItemProps {
  item: Item;
}
export default function SingleItem({ item }: SingleItemProps) {
  return <div>{item.name}</div>;
}
