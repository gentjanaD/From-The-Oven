import styled from "styled-components";

const BasketWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .basket_content {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .basket_total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border-top: solid 2px rgba(68, 61, 78, 100); */
    /* border-top-style: outset; */
  }
`;
export default BasketWrapper;
