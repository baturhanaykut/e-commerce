import React from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

const BlogDetailsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogDetails />
      <Footer />
    </React.Fragment>
  );
};

export default BlogDetailsPage;
