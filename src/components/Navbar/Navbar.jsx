import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <h1>Ecommerce</h1>
      <section>
        <button>Celuares</button>
        <button>Tablets</button>
        <button>NoteBooks</button>
      </section>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default Navbar;
