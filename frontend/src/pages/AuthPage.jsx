import { Fragment } from "react";
import Auth from "../components/Auth/Auth";
import Header from "../components/Layout/Header/Header";

import Footer from "../components/Layout/Footer/Footer";

const AuthPage = () => {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Footer />
    </Fragment>
  );
};

export default AuthPage;
