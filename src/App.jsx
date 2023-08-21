import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="Bienvenidos a mi ecommerce" />
    </>
  );
}

export default App;
