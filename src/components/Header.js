import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT US</Link>
          </li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
