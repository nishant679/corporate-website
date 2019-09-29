import React from "react";
import classNames from "classnames";
import style from "./BlogPage.module.scss";
import facebookLogo from "../../assets/images/facebook.png";
import twitterLogo from "../../assets/images/twitter.png";
import linkedInLogo from "../../assets/images/linkedin-logo.png";
import linkLogo from "../../assets/images/link-symbol.png";
import {copyStringToClipboard} from "../../utils/utilities";

function SocialIcons() {
    return (
        <div className={classNames(style.row, style.social)}>
            <div className={style.socialIcon}>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                >
                    <img src={facebookLogo}/>
                </a>
            </div>
            <div className={style.socialIcon}>
                <a
                    href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
                    target="_blank"
                >
                    <img src={twitterLogo}/>
                </a>
            </div>
            <div className={style.socialIcon}>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                    target="_blank"
                >
                    <img src={linkedInLogo}/>
                </a>
            </div>
            <div className={style.socialIcon}>
                <img src={linkLogo} onClick={() => copyStringToClipboard(window.location.href)}/>
            </div>
        </div>
    )
}

export default SocialIcons;