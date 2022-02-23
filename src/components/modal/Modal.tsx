import React from "react";
import ReactDom from "react-dom";

export default function Modal({ children }) {
  return ReactDom.createPortal(
    <>
      <div></div>
    </>,
    document.getElementById("portal")
  );
}
