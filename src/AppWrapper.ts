import styled from "styled-components";

const AppWrapper = styled.div`
  .App {
    text-align: center;
    height: 100vh;
    border: solid 3px red;
    overflow-y: hidden;
    .img_div {
      display: flex;
      justify-content: space-around;
      height: 90%;
      /* margin-left: 60px; */
      align-items: center;
    }
  }
`;

export default AppWrapper;
