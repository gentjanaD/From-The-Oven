import styled from "styled-components";
const SingleItemWrapper = styled.div`
  padding: 20px;

  .itemContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 5vw;
      height: 3vh;
      border-radius: 5px;
      background-color: rgba(227, 187, 108, 100);
    }
  }
  img {
    border-radius: 5%;
  }
`;

export default SingleItemWrapper;
