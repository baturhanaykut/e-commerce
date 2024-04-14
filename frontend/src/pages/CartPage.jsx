import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Footer />
    </Fragment>
  );
};

export default CartPage;
