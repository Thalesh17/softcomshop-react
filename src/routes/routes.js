import React from 'react';

import {useAuth} from '../contexts/auth';
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/dashboard';
import Products from '../pages/products/Products';

function CustomRoute ({ isPrivate, ...rest }) {
  const { loading, signed } = useAuth();

  if (loading) {
    return <p>loading</p>;
  }

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  const { signed } = useAuth();
  return (
    <Switch>
      <CustomRoute exact path="/" component={!signed ? SignIn : Dashboard} />
      <CustomRoute path="/products" component={Products} />
    </Switch>
  );
}
