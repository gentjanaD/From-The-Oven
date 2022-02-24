import styled from "styled-components";
const SingleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .itemContent {
    /* display: flex; */
    justify-content: space-around;
  }
  img {
    border-radius: 5%;
  }
`;

export default SingleItemWrapper;
