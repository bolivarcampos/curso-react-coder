import "./Header.css";

import img from "./logoFitness.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={img} alt="logo-fitness" />
      <h1>Bienvenidos a NutriFitness</h1>
    </div>
  );
};

export default Header;
