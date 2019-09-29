import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Http from "../../utils/Http";
import BlogPageHeader from "./BlogPageHeader";
import AttachmentComponent from "./AttachmentComponent";
import style from './BlogPage.module.scss';
import {Skeleton} from "antd";
import RelatedArticles from "./RelatedArticles";

function BlogPage({match}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [relatedBlogs, setRelateBlogs] = useState([]);
    const [blog, setBlog] = useState({
        views: 0,
        _id: "",
        title: "",
        slug: "",
        content: "",
        attachments: [],
        coverImage: "",
        createdAt: "",
    });

    useEffect(() => {
        (async function fetchBlog() {
            setLoading(true);
            try {
                const {data} = await Http.get(`/blogs/${match.params.slug}`);
                setBlog(data.blog);
                setRelateBlogs(data.relatedBlogs);
            } catch (e) {
                if (e.response && e.response.status === 404) {
                    setError('Blog Not Found')
                } else {
                    setError('Some Error Occurred')
                }
            }
            setLoading(false);
        })()
    }, [match.params.slug]);

    const renderedAttachments = blog.attachments.map(attachment => {
        return (
            <AttachmentComponent
                key={attachment._id}
                {...attachment}
            />
        )
    });
    if (loading) {
        return <Skeleton/>
    } else if (error) {
        return (
            <BlogPageHeader
                error={error}
            />
        )
    }
    return (
        <div>
            <Helmet>
                <title>{`${blog.title} - Ideas`}</title>
            </Helmet>
            <BlogPageHeader
                {...blog}
            />
            <div className={style.container}>
                <div className={style.attachmentContainer}>
                    {renderedAttachments}
                </div>
                <div
                    dangerouslySetInnerHTML={{__html: blog.content}}
                    className={style.blogContent}
                />
            </div>
            <RelatedArticles
                relatedArticles={relatedBlogs}
            />
        </div>
    );
}

export default BlogPage;