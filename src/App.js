import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { withRouter } from "react-router";
import { ContextProvider } from "./context/context";
import history from "./app-history";
import Master from "./components/Layout/Master";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import TierView from "./views/TierView";
import SupplierSearch from "./views/SupplierSearch";
import SupplierSignup from "./views/SupplierSignup";
import ComponentRegulationList from "./views/ComponentRegulationList";
import Requirements from "./views/Requirements";
import RFP from "./views/RFP";
import Login from "./views/Login";
import Signup from "./views/Signup";
// import Suppliers from "./views/Suppliers";
// import Supplier from "./views/Supplier";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faHome, faSearch, faChevronLeft, faChevronRight);


function App() {
  return (
      <Router history={history}>
        <ContextProvider>
          <Master>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/tier/:tier" component={TierView} />
                <PrivateRoute exact path="/tier/:tier/components/:component" component={ComponentRegulationList} />
                {/* <Route exact path="/components/tier/:tier/:component/suppliers" component={Suppliers} />
                <Route exact path="/components/tier/:tier/:component/suppliers/:supplier" component={Supplier} /> */}
                <PrivateRoute exact path="/tier/:tier/:component/requirements" component={Requirements} />
                <PrivateRoute exact path="/tier/:tier/:component/search" component={SupplierSearch} />
                <PrivateRoute exact path="/suppliers/signup" component={SupplierSignup} />
                <PrivateRoute exact path="/suppliers/rfp" component={RFP} />
                <PrivateRoute exact path="*" component={() => <p>Error page not found</p>} />
              </Switch>
          </Master>
        </ContextProvider>
    </Router>
  );
}

export default App;
