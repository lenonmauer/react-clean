import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';

import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Logout from '~/pages/Logout';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/logout" component={Logout} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
