import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Layout/Footer/Footer";
//import Policy from "../components/Layout/Policy/Policy";
const ContactPage = () => {
  return (
    <Fragment>
      <Header />
      <Contact />
      {/* <Policy /> */}
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
