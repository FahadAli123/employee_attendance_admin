import React from "react";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Pages/Auth/Login";
import Home from "../Pages/App/Home/Home";
import Users from "../Pages/App/Users/Users";
// import Transactions from "../Pages/App/Organizations/Organizations";
import createOrganization from "../Pages/App/CreateOrganization/createOrganization";
// import Support from "../Pages/App/Support/Support";
// import Rates from "../Pages/App/Rates/Rates";
// import Questions from "../Pages/App/Employees/Employees";
// import Offers from "../Pages/App/Administrator/Administrator";
import SendNotifications from "../Pages/App/Notifications/SendNotifications";
import Organizations from "../Pages/App/Organizations/Organizations";
// import Employees from "../Pages/App/Employees/Employees";

import PageLayout from "./SideDrawer";
import PrivateRoute from "./PrivateRoute";
// import { Add } from "@material-ui/icons";
import Employees from "../Pages/App/Employees/Employees";
import Administrator from "../Pages/App/Administrator/Administrator";

const Router = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PageLayout>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Home} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/administrators" component={Administrator} />
            {/* <PrivateRoute exact path="/administrators" component={Administrator} /> */}

            <PrivateRoute
              exact
              path="/createOrganization"
              component={createOrganization}
            />
            <PrivateRoute
              exact
              path="/Organizations"
              component={Organizations}
            />
            <PrivateRoute exact path="/employees" component={Employees} />
            {/* <PrivateRoute exact path="/support" component={Support} /> */}
            {/* <PrivateRoute exact path="/rates" component={Rates} /> */}
            {/* <PrivateRoute exact path="/questions" component={Questions} /> */}
            <PrivateRoute
              exact
              path="/send-notifications"
              component={SendNotifications}
            />
          </PageLayout>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
