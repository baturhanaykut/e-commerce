import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};

export default ProductDetailsPage;
