import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Item } from "../../types/menuTypes";
interface ModalProps {
  basketList: Item[];
  onClick: boolean;
  closeModal: () => void;
  counts: { name: string; quantity: number };
}
export const Modal = ({
  basketList,
  onClick,
  closeModal,
  counts,
}: ModalProps) => {
  if (!onClick) return null;
  let priceArr: number[] = [];
  basketList.forEach((item: Item) => {
    priceArr.push(item.price);
  });
  console.log("bask", counts);
  return (
    <ModalWrapper>
      <div className="modal_backdrop" onClick={closeModal}>
        <div className="modal_content_wrapper">
          <div className="modal_content">
            <h3>Your Items</h3>
            {/* {basketList.map((item) => ( */}
            <div className="all_content">
              <div className="modal_item_content">
                <p>{counts.name}</p>
                <p>{counts.quantity}</p>
              </div>
            </div>
            {/* ))} */}
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
