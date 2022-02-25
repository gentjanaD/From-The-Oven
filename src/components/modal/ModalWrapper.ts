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
    width: 20vw;
    height: 100vh;
    background: white;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 80vw;
    right: 0;
    /* padding: 0px; */
    opacity: 75%;
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
  .modal_item_content {
    display: flex;
    justify-content: space-around;
  }
  .price {
    border-top: solid 3px green;
  }
`;
export default ModalWrapper;
