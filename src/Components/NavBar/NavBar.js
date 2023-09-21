import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
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
