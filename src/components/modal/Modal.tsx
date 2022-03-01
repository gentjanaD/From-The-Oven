import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Item } from "../../types/menuTypes";
import { blob } from "stream/consumers";
interface ModalProps {
  basketList: Item[];
  onClick: boolean;
  closeModal: () => void;
}
export const Modal = ({ basketList, onClick, closeModal }: ModalProps) => {
  if (!onClick) return null;
  let priceArr: number[] = [];
  const uniqueBasket = basketList.filter(
    (item, index) => basketList.indexOf(item) == index
  );
  uniqueBasket.forEach((item: Item) => {
    priceArr.push(item.price * item.quantity);
  });

  return (
    <ModalWrapper>
      <div className="modal_backdrop" onClick={closeModal}>
        <div className="modal_content_wrapper">
          <div className="modal_content">
            <h3 style={{ fontWeight: "700", paddingBottom: "10px" }}>
              Your Items
            </h3>
            {uniqueBasket.map((item) => (
              <div className="modal_items">
                <p>{item.quantity}</p>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
            <div className="price">
              {priceArr.length > 0 && (
                <p>Total ${priceArr?.reduce((a, b) => a + b, 0)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
