import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node
};
