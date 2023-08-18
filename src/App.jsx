//import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="bienvenidos a mi ecommerce" />
    </>
  );
}

export default App;
