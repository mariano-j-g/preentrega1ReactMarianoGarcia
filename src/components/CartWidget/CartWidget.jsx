import classes from "./CartWidget.css";
import cart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <button>
      <img src={cart} className="cart_icon" alt="" /> 0
    </button>
  );
};

export default CartWidget;
