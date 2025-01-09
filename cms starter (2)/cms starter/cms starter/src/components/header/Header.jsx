import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/app.context";

const Header = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="header-container container">
      <h1 className="logo">
        #<span>KURSY</span>_online
      </h1>
      <ul className="menu">
        <li>
          <a href="#boxes">Oferta</a>
        </li>
        <li>
          <a href="#courses">Kursy</a>
        </li>
        {logged && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
