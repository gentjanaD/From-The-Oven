import styled from "styled-components";

const AppWrapper = styled.div`
  .App {
    text-align: center;
    height: 100vh;
    border: solid 3px red;
    overflow-y: hidden;
    .img_div {
      display: flex;
      justify-content: space-between;
      height: 90%;
      margin-left: 30px;
      align-items: center;
    }
  }
`;

export default AppWrapper;
