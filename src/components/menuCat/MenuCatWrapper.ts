import styled from "styled-components";
const MenuCatWrapper = styled.div`
  .menuCat {
    display: flex;
    flex-direction: column;
    border: solid 3px purple;
    min-width: 300px;
    /* margin-right: 30px; */
    justify-content: space-around;
    .food {
      min-height: 80px;
      margin-bottom: 20px;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      color: white;

      > h3 {
        align-self: center;
        margin: auto;
      }
    }
    .soft {
      /* border: solid 3px yellow; */
      background-color: rgba(113, 124, 152, 100);
      /* padding: 10px; */
    }
    .alcohol {
      background-color: rgba(113, 124, 152, 100);
    }
    .starters {
      background-color: rgba(193, 118, 48, 100);
    }
    .mains {
      background-color: rgba(193, 118, 48, 100);
    }
    .desert {
      background-color: rgba(115, 11, 67, 100);
    }
  }
`;

export default MenuCatWrapper;
