import React from "react";
import {Divider, message, Popconfirm} from "antd";
import {Link} from "react-router-dom";
import Http from "../../../utils/Http";
import styles from './styles.module.scss';
import * as PropTypes from 'prop-types';

function TableActionButtons({blogPost, refresh}) {
    async function changePublishStatus(published) {
        try {
            const result = await Http.put(`/blogs/${blogPost._id}`, {
                published
            });
            console.log(result);
            refresh();
        } catch (e) {
            message.error('Error While Changing Publish Status')
        }
    }

    async function deleteBlogPost() {
        try {
            const result = await Http.delete(`/blogs/${blogPost._id}`);
            console.log(result);
            refresh();
        } catch (e) {
            message.error('Error While Deleting Blog Post')
        }
    }

    return (
        <div style={{minWidth: '20vw'}}>
            <Link to={`/admin/blogs/editor/${blogPost._id}`}>Edit</Link>
            <Divider type="vertical"/>
            {
                blogPost.published ?
                    (<a className={styles.action} onClick={() => changePublishStatus(false)}>Make Draft</a>) :
                    (<a onClick={() => changePublishStatus(true)}>Publish</a>)
            }
            <Divider type="vertical"/>
            <Popconfirm
                title="Are you sure delete this blog post?"
                onConfirm={deleteBlogPost}
                okText="Yes"
                cancelText="No"
            >
                <a style={{color: 'red'}}>Delete</a>
            </Popconfirm>
        </div>
    )
}

TableActionButtons.propTypes = {
    blogPost: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired
};

export default TableActionButtons