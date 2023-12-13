import React from "react";
import Header from "../components/Header";
import Investment from "../components/Investment";
import Plan from "../components/Plan";
// import Testimonials from "../components/Testimonials";
import Why from "../components/Why";
import Converter from "../components/Converter";
import Analysis from "../components/Analysis";
import Nav from "../components/Nav";
import Faq from "../components/Faq";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ET-Options | Home</title>
      </Helmet>
      <Nav />
      <Header />
      <Investment />
      <Converter />
      <Plan />
      <Analysis />
      <Why />
      <Faq />
    </div>
  );
};

export default Home;
