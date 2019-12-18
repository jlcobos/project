import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from "./context/context";
import history from "./app-history";
import Master from "./components/Layout/Master";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Organization from "./views/Organization";
import TierView from "./views/TierView";
import SupplierSearch from "./views/SupplierSearch";
import OrganizationSignup from "./views/OrganizationSignup";
import ComponentRegulationList from "./views/ComponentRegulationList";
import Requirements from "./views/Requirements";
import RFP from "./views/RFP";
import UserHome from "./views/UserHome";
import Login from "./views/Login";
import Signup from "./views/Signup";
// import { withRouter } from "react-router";
// import Suppliers from "./views/Suppliers";
// import Supplier from "./views/Supplier";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faHome, faSearch, faChevronLeft, faChevronRight, faCheck);


function App() {
  return (
      <Router history={history}>
        <ContextProvider>
          <Master>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/home" component={UserHome} />
                <PrivateRoute exact path="/organization/home" component={Organization} />
                <PrivateRoute exact path="/organization/signup" component={OrganizationSignup} />
                <PrivateRoute exact path="/tier-selection" component={Home} />
                <PrivateRoute exact path="/tier/:tier" component={TierView} />
                <PrivateRoute exact path="/tier/:tier/components/:component" component={ComponentRegulationList} />
                {/* <Route exact path="/components/tier/:tier/:component/suppliers" component={Suppliers} />
                <Route exact path="/components/tier/:tier/:component/suppliers/:supplier" component={Supplier} /> */}
                <PrivateRoute exact path="/tier/:tier/:component/requirements" component={Requirements} />
                <PrivateRoute exact path="/supplier-search" component={SupplierSearch} />
                <PrivateRoute exact path="/initialize-rfp" component={RFP} />
                <PrivateRoute exact path="*" component={() => <p>Error page not found</p>} />
              </Switch>
          </Master>
        </ContextProvider>
    </Router>
  );
}

export default App;
