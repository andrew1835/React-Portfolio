import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;

