import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <h1>Book Store</h1>
      </Link>

      <div className="Categories">
        <NavLink
          to={`/category/Creatina`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Creatina
        </NavLink>
        ,
        <NavLink
          to={`/category/Proteinas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Proteinas
        </NavLink>
        ,
        <NavLink
          to={`/category/Quemadores`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Quemadores
        </NavLink>
      </div>

      <div className="btns">
        <ul>
          <li className="btn-1">Inicio</li>
          <li className="btn-2">Producto</li>
          <li className="btn-3">Especialistas</li>
          <li className="btn-4">Contacto</li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
