import React, {useEffect, useState} from "react";
import AdminLayout from "../../../../components/AdminLayout/AdminLayout";
import {Button, Checkbox, Col, Form, Icon, Input, message, notification, Row, Spin, Upload} from "antd";
import Http from "../../../../utils/Http";
import EditorComponent from "./EditorComponent";
import AttachmentModal from "./AttachmentModal";
import AttachmentComponent from "./AttachmentComponent"; // ES6

function BlogEditPage({match, form, history}) {
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [published, setPublished] = useState(false);
    const [attachmentModalVisible, setAttachmentModalVisible] = useState(false);
    const [attachments, setAttachments] = useState([]);
    const [loading, setLoading] = useState(false);
    const isNewBlog = !match.params.id;
    let blogId = match.params.id;
    const {getFieldDecorator} = form;

    useEffect(() => {
        async function fetchBlogById() {
            setLoading(true);
            try {
                const {data} = await Http.get(`/blogs`, {
                    params: {
                        _id: blogId
                    }
                });
                if (data.blogs.length === 0) {
                    message.error('Blog Not Found');
                    return;
                }
                setData(data.blogs[0]);
            } catch (e) {
                message.error('Error Fetching this Blog Post\'s Data')
            }
            setLoading(false);
        }

        if (!isNewBlog) {
            fetchBlogById();
        }
    }, []);

    function setData(blog) {
        blogId = blog._id;
        setContent(blog.content);
        setAttachments(blog.attachments);
        setCoverImage(blog.coverImage);
        setPublished(blog.published);
        form.setFieldsValue({
            title: blog.title,
            slug: blog.slug
        })
    }

    const saveBlog = async (e) => {
        e && e.preventDefault();
        const request = isNewBlog ? Http.post : Http.put;
        const url = isNewBlog ? `/blogs` : `/blogs/${blogId}`;
        let values;
        try {
            values = await form.validateFields();
        } catch (e) {
            console.error(e);
            return;
        }
        try {
            setLoading(true);
            const {data} = await request(url, {
                content,
                title: values.title,
                slug: values.slug,
                coverImage,
                published,
                attachments
            });
            console.log(data);
            if (isNewBlog) {
                setData(data.blog);
                history.push(`${match.path}/${data.blog._id}`)
            }

        } catch (e) {
            console.log(e);
            message.error('Error Saving Blog Post')
        }
        setLoading(false);
    };


    async function uploadCoverImage(file, onSuccess, onError) {
        if (isNewBlog) {
            await saveBlog();
        }
        const form = new FormData();
        form.set('file', file);
        try {
            const {data} = await Http.post(`/blogs/${blogId}/coverImage`, form);
            console.log(data);
            setData(data);
        } catch (e) {
            return onError(e);
        }
        onSuccess();
    }

    async function uploadAttachment() {
        if (isNewBlog) {
            await saveBlog();
        }
        setAttachmentModalVisible(true)
    }

    return (
        <AdminLayout>
            <h1>
                <span>Add New Blog </span>
                {
                    loading ?
                        <Icon type="loading" style={{fontSize: 18}} spin/>
                        : <div/>
                }
            </h1>
            <Form onSubmit={saveBlog}>
                <Form.Item>
                    {getFieldDecorator('title', {
                        rules: [
                            {required: true, message: 'Please enter a title'}
                        ],
                    })(
                        <Input
                            placeholder="Blog Title"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('slug', {
                        rules: [
                            {required: true, message: 'Please enter a user displayable URL'}
                        ],
                    })(
                        <Input
                            placeholder="Blog URL"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {
                        coverImage ? (<p>Cover Image: {coverImage}</p>) : <div/>
                    }
                    <Upload fileList={[]}
                            customRequest={({file, onSuccess, onError}) => uploadCoverImage(file, onSuccess, onError)}>
                        <Button>
                            <Icon type="upload"/> Upload Cover Image
                        </Button>
                    </Upload>

                </Form.Item>
                <Form.Item>
                    <Row>
                        {
                            attachments && attachments.map(attachment => {
                                return <AttachmentComponent
                                    {...attachment}
                                    blogId={blogId}
                                    key={attachment.url}
                                    blogUpdated={(data) => setData(data)}
                                />
                            })
                        }
                    </Row>
                    <Button onClick={() => uploadAttachment()}>Upload Attachment</Button>
                </Form.Item>
                <Form.Item>
                    <EditorComponent value={content}
                                     onChange={(value) => setContent(value)}
                    />
                </Form.Item>
                <Form.Item>
                    <p>
                        <Checkbox
                            style={{paddingRight: '10px'}}
                            checked={published}
                            onChange={e => setPublished(e.target.checked)}
                        />
                        Publish
                    </p>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
            <AttachmentModal
                visible={attachmentModalVisible}
                setVisible={setAttachmentModalVisible}
                blogId={blogId}
                OnAttachmentAdded={(attachments) => setAttachments(attachments)}
            />
        </AdminLayout>
    )
}

export default Form.create({name: 'blog_editor'})(BlogEditPage);