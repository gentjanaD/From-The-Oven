import BasketWrapper from "./BasketWrapper";
import { Item } from "../../types/menuTypes";
interface BasketProps {
  basketList: Item[];
}
export default function Basket({ basketList }: BasketProps) {
  let priceArr: number[] = [];
  basketList.forEach((item: Item) => {
    priceArr.push(item.price);
  });

  return (
    <BasketWrapper>
      {basketList.map((item) => (
        <div className="basket_content">
          <h4>{item.name}</h4>
          <h4>${item.price}</h4>
        </div>
      ))}
      <div className="basket_total">
        {basketList.length > 0 && <h4>{basketList.length} items in basket</h4>}
        {priceArr.length > 0 && (
          <p>Total ${priceArr?.reduce((a, b) => a + b, 0)}</p>
        )}
      </div>
    </BasketWrapper>
  );
}
