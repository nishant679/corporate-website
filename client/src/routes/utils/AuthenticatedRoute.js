import React from "react";
import {Redirect, Route} from "react-router-dom";

function AuthenticatedRoute({component: Component, props: cProps, restProps}) {

    return <Route
        {...restProps}
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

