import NavBarWrapper from "./NavBarWrapper";
export default function NavBar() {
  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <h2>From the oven</h2>
        <div className="nav-bar__right">
          <input placeholder="search"></input>
          <h4>Basket</h4>
        </div>
      </div>
    </NavBarWrapper>
  );
}
