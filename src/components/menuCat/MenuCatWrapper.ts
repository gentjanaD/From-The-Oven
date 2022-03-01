import styled from "styled-components";
const MenuCatWrapper = styled.div`
  .menuCat {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    .list {
      list-style-type: none;
      width: 30vw;
      .food {
        min-height: 80px;
        margin-bottom: 20px;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        color: white;
        border-radius: 5px;

        > h3 {
          align-self: center;
          /* margin: auto; */
        }
      }
      .soft {
        background-color: rgba(113, 124, 152, 100);
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
    .panels {
      overflow-y: scroll;
      width: 40vw;
      border-radius: 5px;
      height: 50vh;
      border: solid 3px #e3bb6c;
      #ovenImg {
        height: 50vh;
        border-radius: 5px;
      }
      .panel {
        margin-top: -20px;
        /* margin-bottom: 20px; */
        /* padding-bottom: 20px; */
        h3 {
          padding-top: 10px;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export default MenuCatWrapper;
