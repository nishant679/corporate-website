import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LanguageContext from "../utils/LanguageContext";
import Loadable from "react-loadable";
import {Skeleton} from "antd";
import LandingPage from '../pages/LandingPage/LandingPage';
import Carrers from '../pages/CarrersPage/Carrers';

const BlogPage = Loadable({
    loader: () => import('../pages/blog/BlogPage'),
    loading: Skeleton,
});
const NewsPage = Loadable({
    loader: () => import('../pages/newsroom/news'),
    loading: Skeleton,
});




function WebsiteRoutes({match}) {
    const setLanguage = (language) => {
        setState({...state, language: language})
    };

    const initState = {
        language: "en",
        setLanguage
    };

    const [state, setState] = useState(initState);
    return (
        <LanguageContext.Provider value={state}>
            {/*<Navigation/>*/}

            <Switch>
                <Route exact path={`${match.path}/newsroom`} component={NewsPage} />
                <Route exact path={`${match.path}/ideas/:slug`} component={BlogPage}/>
                <Route exact path={`${match.path}/philosophy`}/>
                <Route exact path={`${match.path}/`}/>
                <Route exact path={`${match.path}/carrers`} component={Carrers}/>
                <Route exact path={`${match.path}/social`} component={LandingPage}/>
            </Switch>
        </LanguageContext.Provider>
    );
}

export default WebsiteRoutes;