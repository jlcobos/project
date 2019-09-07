import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { ContextProvider } from "./context/context";
import history from "./app-history";
import Master from "./components/Layout/Master";
import Home from "./views/Home";
import Components from "./views/Components";
import Component from "./views/Component";
import Requirements from "./views/Requirements";
import Suppliers from "./views/Suppliers";
import Supplier from "./views/Supplier";


import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faHome, faSearch, faChevronLeft, faChevronRight);


function App() {
  return (
      <Router history={history}>
        <Master>
          <ContextProvider>
                <Switch>
                  <Route exact path="/" component={Home} />
                  {/* <Route exact path="/components/tier/:tier" component={Components} />
                  <Route exact path="/components/tier/:tier/:component" component={Component} />
                  <Route exact path="/components/tier/:tier/:component/suppliers" component={Suppliers} />
                  <Route exact path="/components/tier/:tier/:component/suppliers/:supplier" component={Supplier} />
                  <Route exact path="/components/tier/:tier/:component/:requirements" component={Requirements} /> */}
                  <Route exact path="*" component={() => <p>Error page not found</p>} />
                </Switch>
          </ContextProvider>
      </Master>
    </Router>
  );
}

export default App;
