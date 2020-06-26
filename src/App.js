import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/blogs"} component={Blogs} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/skills"} component={Skills} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
App.defaultProps = {};

export default App;
