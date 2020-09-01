import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import PageNotFound from "./components/PageNotFound";
// import { animateScroll as scroll } from "react-scroll";

function App() {
  // const scrollBottom = () => {
  //   scroll.scrollToBottom();
  // };
  // const scrollTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
          <Skills />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
