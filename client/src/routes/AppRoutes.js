import {Skeleton} from 'antd';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import React from "react";

const AdminRoutes = Loadable({
    loader: () => import('./AdminRoutes'),
    loading: Skeleton,
});

const WebsiteRoutes = Loadable({
    loader: () => import('./WebsiteRoutes'),
    loading: Skeleton,
});

function AppRoutes() {
    return (
        <Switch>
            <Route
                path="/admin"
                component={AdminRoutes}
            />
            <Route
                path="/"
                component={WebsiteRoutes}
            />
            {
                /*<Route component={NotFound} />*/
            }
        </Switch>
    );
}

export default AppRoutes;