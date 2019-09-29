import React, {useRef} from "react";
import style from './BlogPage.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withRouter} from "react-router-dom";
import closeIcon from '../../assets/images/close.png'
import SocialIcons from "./SocialIcons";

function BlogPageHeader({coverImage, history, title, createdAt, error, createdBy}) {
    createdBy = createdBy || BlogPageHeader.defaultProps.createdBy;
    const getDateString = () => {
        const date = new Date(createdAt);
        return date.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'});
    };
    return (
        <div className={classNames(style.coverScreen, style.header)}>
            <div className={style.overlay}/>
            {
                coverImage &&
                <img className={style.image} src={coverImage} alt="Cover Image"/>
            }
            <div className={classNames(style.content)}>
                <div className={style.row}>
                    <div className="offset-md-9 offset-sm-9 col-md-3 col-sm-3">
                        <img className={style.close} src={closeIcon} onClick={() => history.goBack()}/>
                    </div>
                </div>
                <div>
                    <div className={classNames(style.row)}>
                        <div className={style.logo}>
                            mckinley & rice
                        </div>
                    </div>
                    <div className={classNames(style.row, style.ideas)}>
                        Ideas
                    </div>
                    <div className={classNames(style.row, style.title)}>
                        {title || error}
                    </div>
                    {
                        createdAt &&
                        <div className={classNames(style.row, style.date)}>
                            {getDateString()} | {createdBy.name}
                        </div>
                    }

                    {
                        !error && <SocialIcons/>
                    }
                </div>

            </div>
        </div>
    )
}

BlogPageHeader = withRouter(BlogPageHeader);

BlogPageHeader.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    error: PropTypes.string,
    createdBy: PropTypes.object.isRequired,
};
BlogPageHeader.defaultProps = {
    coverImage: '',
    title: '',
    createdAt: '',
    error: '',
    createdBy: {
        name: ''
    }
};

export default BlogPageHeader;