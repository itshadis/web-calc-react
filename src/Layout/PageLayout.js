import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = (props) => {
  const { children } = props;
  
  return(
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default PageLayout;