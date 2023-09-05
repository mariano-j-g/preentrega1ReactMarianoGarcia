import classes from "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={classes.container}>
      <h1 onClick={() => navigate("/")}>Ecommerce</h1>
      <section>
        <button onClick={() => navigate("/category/celular")}>celulares</button>
        <button onClick={() => navigate("/category/tablet")}>Tablets</button>
        <button onClick={() => navigate("/category/noteBook")}>
          NoteBooks
        </button>
        <CartWidget></CartWidget>
      </section>
    </nav>
  );
};

export default Navbar;
