import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Loadable from "react-loadable";
import {Skeleton} from 'antd';
import AuthenticatedRoute from "./utils/AuthenticatedRoute";

const LoginPage = Loadable({
    loader: () => import('../pages/admin/login/LoginPage').catch(console.error),
    loading: Skeleton,
});
const BlogsPage = Loadable({
    loader: () => import('../pages/admin/blogs/BlogsPage').catch(console.error),
    loading: Skeleton,
});

const BlogEditor = Loadable({
    loader: () => import('../pages/admin/blogs/editor/BlogEditPage').catch(console.error),
    loading: Skeleton,
});

function AdminRoutes({match}) {
    return (
        <Switch>
            <Route exact path={`${match.path}/login`} component={LoginPage}/>
            <AuthenticatedRoute exact path={`${match.path}/blogs`} component={BlogsPage}/>
            <AuthenticatedRoute exact path={`${match.path}/blogs/editor`} component={BlogEditor}/>
            <AuthenticatedRoute exact path={`${match.path}/blogs/editor/:id`} component={BlogEditor}/>
            <Redirect exact from={`${match.path}/`} to={`${match.path}/blogs`}/>
        </Switch>
    );
}

export default AdminRoutes;