import NavBarWrapper from "./NavBarWrapper";
import { MdShoppingCart } from "react-icons/md";
export default function NavBar() {
  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <h2>From the oven</h2>
        <div className="nav-bar__right">
          <input placeholder="search"></input>
          <div className="nav_basket">
            <h4>Basket</h4>
            <MdShoppingCart size={30} />
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
}
