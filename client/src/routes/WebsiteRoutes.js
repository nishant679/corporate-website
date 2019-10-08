import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LanguageContext from "../utils/LanguageContext";
import LandingPage from '../pages/LandingPage/LandingPage';
import Careers from '../pages/CareersPage/Careers';
import BlogPage from "../pages/blog/BlogPage";
import NewsPage from '../pages/newsroom/news';

/*const BlogPage = Loadable({
    loader: () => import('../pages/blog/BlogPage').catch(console.error),
    loading: Skeleton,
});
const NewsPage = Loadable({
    loader: () => import('../pages/newsroom/news').catch(console.error),
    loading: Skeleton,
});*/




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
                <Route exact path={`${match.path}/careers`} component={Careers}/>
                <Route exact path={`${match.path}/social`} component={LandingPage}/>
                <Route exact path={`${match.path}/`}/>
            </Switch>
        </LanguageContext.Provider>
    );
}

export default WebsiteRoutes;