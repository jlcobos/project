import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from "./context/context";
import history from "./app-history";
import Home from "./views/Home";
import Components from "./views/Components";
import Component from "./views/Component";
import Requirements from "./views/Requirements";
import Suppliers from "./views/Suppliers";
import Portfolio from "./views/Portfolio";
import NavBar from "./components/Navs/NavBar";
import Container from "react-bootstrap/Container";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faHome, faSearch, faChevronLeft, faChevronRight);

function App() {
  return (
    <div className="App">
    <Router history={history}>
    <ContextProvider>
    <div>
      <Container fluid className="p-0">
        <NavBar/>
      </Container>
      <Container fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/components/tier/:tier" component={Components} />
          <Route exact path="/components/tier/:tier/:component" component={Component} />
          <Route exact path="/components/tier/:tier/:component/suppliers" component={Suppliers} />
          <Route exact path="/components/tier/:tier/:component/:requirements" component={Requirements} />
          <Route exact path="/portfolio/:supplier" component={Portfolio} />
          <Route exact path="*" component={() => <p>Error page not found</p>} />
        </Switch>
        {/* <FooterNavWithRouter /> */}
      </Container>
    </div>
  </ContextProvider>
    </Router>
    </div>
  );
}

export default App;
