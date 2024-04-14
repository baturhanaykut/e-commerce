import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Footer from "../components/Layout/Footer/Footer";
//import Policy from "../components/Layout/Policy/Policy";
const ShopPage = () => {
  return (
    <Fragment>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      {/* <Policy /> */}
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
