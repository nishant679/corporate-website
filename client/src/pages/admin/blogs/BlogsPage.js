import React, {useState, useEffect} from 'react';
import {Divider, Table, message} from 'antd';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';
import Http from "../../../utils/Http";
import TableHeader from "./TableHeader";
import TableActionButtons from "./TableActionButtons";
import styles from './styles.module.scss';
import {Helmet} from "react-helmet";

function BlogsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalBlog, setTotalBlog] = useState(0);
    const pageSize = 10;

    useEffect(() => {
        fetchBlogs();
    }, [currentPage]);

    async function fetchBlogs() {
        setLoading(true);
        try {
            const {data} = await Http.get('/blogs', {
                params: {
                    limit: pageSize,
                    skip: (currentPage - 1) * pageSize
                }
            });
            console.log(data);
            setData(data.blogs);
            setTotalBlog(data.count);
        } catch (e) {
            message.error('Error Fetching Blogs')
        }
        setLoading(false)
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <TableActionButtons
                    blogPost={record}
                    refresh={fetchBlogs}
                />
            )
        },

    ];

    return (
        <AdminLayout>
            <Helmet>
                <title>Blogs-Mckinley & Rice</title>
            </Helmet>
            <Table
                className={styles.table}
                bordered
                columns={columns}
                dataSource={data}
                title={TableHeader}
                loading={loading}
                rowKey={'_id'}
                pagination={{
                    current: currentPage,
                    pageSize,
                    total: totalBlog
                }}
                onChange={(pagination) => {
                    console.log(pagination);
                    setCurrentPage(pagination.current);
                }}
            />
        </AdminLayout>
    )
}

export default BlogsPage;