import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (cartItem) => {
    //setCartItems([...cartItems, product]); 1.Yol
    setCartItems((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
