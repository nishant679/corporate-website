import React from "react";
import {Route, Redirect} from "react-router-dom";

function AuthenticatedRoute({component: Component, props: cProps, ...rest}) {

    return <Route
        {...rest}
        render={props =>
            localStorage.getItem('access_token')
                ? <Component {...props} {...cProps} />
                : <Redirect
                    to={`/admin/login?redirect=${props.location.pathname}${props.location
                        .search}`}
                />}
    />;
}

export default AuthenticatedRoute;

