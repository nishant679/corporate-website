import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './BlogPage.module.scss';

function AttachmentComponent({title, url, size}) {
    return (
        <div className={style.attachmentBox}>
            <a href={url} target="_blank">
                <div className={style.downloadText}>
                    Download
                </div>
                <div className="row">
                    <div className={classNames(style.fileName, 'col-md-7')}>{title}</div>
                    <div className={classNames(style.fileSize, 'col-md-5')}>{size}</div>
                </div>
            </a>
        </div>
    )
}

AttachmentComponent.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};

export default AttachmentComponent;