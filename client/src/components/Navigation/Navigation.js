import React, {useContext} from 'react';
import LanguageContext from "../../utils/LanguageContext";
import NavigationMessages from "./NavigationMessages";
import Text from "../Text/Text";
import style from './style.module.scss';
import Footer from '../footer'
function Navigation() {
    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <React.Fragment>
            <button className={style.nav} onClick={() => setLanguage("ko")}>
                Switch Language (Current: {language})
            </button>
            <button className={style.nav} onClick={() => setLanguage("en")}>
                Switch Language (Current: {language})
            </button>
            <Text text={NavigationMessages.philosophy}/>
            <Footer />
        </React.Fragment>
    )
}

export default Navigation;