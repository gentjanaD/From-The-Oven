import { Item } from "../../types/menuTypes";
import SingleItemWrapper from "./SIngleItemWrapper";

interface SingleItemProps {
  item: Item;
  addToBasket: (item: Item) => void;
}
export default function SingleItem({ item, addToBasket }: SingleItemProps) {
  return (
    <SingleItemWrapper>
      <div className="itemContent">
        <img src={item.image} width="100" height="auto" />
        <h3> {item.name}</h3>
        <h4>${item.price}</h4>
        <button
          type="button"
          onClick={() => {
            addToBasket(item);
          }}
        >
          Add
        </button>
      </div>
    </SingleItemWrapper>
  );
}
