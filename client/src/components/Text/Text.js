import React, {useContext} from 'react';
import LanguageContext from "../../utils/LanguageContext";

function Text({text}) {
    const {language} = useContext(LanguageContext);
    return language === 'en' ? (
        <React.Fragment>{text.en}</React.Fragment>
    ) : (
        <React.Fragment>{text.ko || text.en}</React.Fragment>
    )
}

export default Text;