import "./Header.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

import img from "./logoFitness.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={img} alt="logo-fitness" />
      <h1>Bienvenidos a NutriFitness</h1>
      <ItemListContainer greeting={"Mejora Tu Manera de Alimentarte"} />
    </div>
  );
};

export default Header;
