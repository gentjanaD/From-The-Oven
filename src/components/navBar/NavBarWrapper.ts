import styled from "styled-components";

const NavBarWrapper = styled.div`
  .nav-bar {
    display: flex;
    justify-content: space-between;
    background-color: rgba(227, 187, 108, 100);
    /* height: 7vh; */
    /* width: 100vw; */
    padding: 5px;
    align-items: center;
    h2 {
      font-size: 30px;
      font-family: "Paprika", cursive;
      text-transform: capitalize;
      margin-left: 30px;
    }
    .nav-bar__right {
      display: flex;
      width: 25%;
      justify-content: space-between;
      height: 4vh;
      align-items: center;
    }
  }
`;
export default NavBarWrapper;
