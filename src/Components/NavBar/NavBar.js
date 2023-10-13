import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <h2 className="titulo">Tu Tienda de Nutrición Sana</h2>
      </Link>

      <div className="Categories">
        <NavLink
          to={`/category/Creatina`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Creatina
        </NavLink>

        <NavLink
          to={`/category/Proteinas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Proteinas
        </NavLink>

        <NavLink
          to={`/category/Quemadores`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Quemadores
        </NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
