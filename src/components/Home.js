import React from "react";
import Body from "./Body";
import BuildFlex from "./Build-Flex";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <Router>
      <Navbar />
      <Body />
      <BuildFlex />
      <Cards />
      <Footer />
    </Router>
  );
};

export default Home;
