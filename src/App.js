import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardUser from "./Components/CardUser/CardUser";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <div className="UserSection">
        <CardUser
          name="Tipos de Creatina"
          date="Haz Click acá"
          description="Descubre qué creatina tomar"
          img="https://valara-nutrition.com/cdn/shop/products/CR450-5_800x.jpg?v=1690478491"
        />
        <CardUser
          name="Crema de Proteina"
          date="Haz Click acá"
          description="Experimenta la proteina en otra presentación"
          img="https://weider.es/wp-content/uploads/2021/11/Whey-Protein-salted-caramel-principal-1.jpg"
        />
        <CardUser
          name="Whey Protein en Polvo"
          date="Haz Click acá"
          description="Descubre cuál usar"
          img="https://thewildfoods.com/cdn/shop/files/shakevainilla_1.jpg?v=1691609335&width=480"
        />
      </div>
      <ItemListContainer greeting={"Nuestros Productos"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
