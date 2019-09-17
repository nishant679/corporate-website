import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Skeleton } from 'antd';

const SignIn = Loadable({
  loader: () => import('../pages/SignIn/SignIn'),
  loading: Skeleton,
});

const SignUp = Loadable({
  loader: () => import('../pages/SignUp/SignUp'),
  loading: Skeleton,
});

function AuthRoutes() {
  return (
    <Switch>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/" component={SignIn} />
    </Switch>
  );
}

export default AuthRoutes;
