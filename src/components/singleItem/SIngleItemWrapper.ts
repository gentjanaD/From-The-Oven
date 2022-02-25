import styled from "styled-components";
const SingleItemWrapper = styled.div`
  padding: 20px;
  border: solid 3px red;

  .itemContent {
    display: flex;
    justify-content: space-between;
  }
  img {
    border-radius: 5%;
  }
`;

export default SingleItemWrapper;
