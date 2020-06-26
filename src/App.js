import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/blogs"} component={Blogs} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/skills"} component={Skills} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
App.defaultProps = {};

export default App;
