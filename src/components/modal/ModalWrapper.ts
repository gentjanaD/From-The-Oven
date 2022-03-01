import styled from "styled-components";
const ModalWrapper = styled.div`
  .modal_backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .modal_content_wrapper {
    position: fixed;
    width: 25vw;
    height: 100vh;
    background: white;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 75vw;
    right: 0;
    opacity: 75%;
    animation: slideIn 0.8s linear;
  }
  .modal_content {
    h3 {
      border-bottom: solid 3px green;
    }
  }
  .all_content {
    display: flex;
    flex-direction: column;
  }
  .modal_items {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    align-items: stretch;
    /* align-content: space-between; */
  }
  p {
    text-transform: capitalize;
  }
  .price {
    border-top: solid 3px green;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(400px);
      animation-timing-function: ease-out;
    }
    80% {
      transform: translateX(10px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateX(0px);
      animation-timing-function: ease-in;
    }
  }
`;
export default ModalWrapper;
