import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from "../components/Navigation/Navigation";
import LanguageContext from "../utils/LanguageContext";
import LandingPage from '../pages/LandingPage/LandingPage';
import Carrers from '../pages/CarrersPage/Carrers';



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
           
            <Switch>
                <Route exact path={`${match.path}/carrers`} component={Carrers}/>
                <Route exact path={`${match.path}/social`} component={LandingPage}/>
            </Switch>
        </LanguageContext.Provider>
    );
}

export default WebsiteRoutes;