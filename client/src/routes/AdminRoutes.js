import React from 'react';
import {Route, Switch} from 'react-router-dom';

function AdminRoutes({match}) {
    return (
        <Switch>
            <Route exact path={`${match.path}/add`}/>
            <Route exact path={`${match.path}/`}/>
        </Switch>
    );
}

export default AdminRoutes;