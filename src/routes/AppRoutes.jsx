import React from 'react';
import { Skeleton } from 'antd';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Dashboard = Loadable({
  loader: () => import('../pages/Dashboard/Dashboard'),
  loading: Skeleton,
});

const Reports = Loadable({
  loader: () => import('../pages/Reports/Reports'),
  loading: Skeleton,
});

const NewUsers = Loadable({
  loader: () => import('../pages/NewUsers/NewUsers'),
  loading: Skeleton,
});

const NotFound = Loadable({
  loader: () => import('../pages/NotFound/NotFound'),
  loading: Skeleton,
});

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/users/new" component={NewUsers} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRoutes;
