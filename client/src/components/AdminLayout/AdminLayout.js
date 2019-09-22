import React, {useState} from 'react';
import {Icon, Layout} from 'antd';
import styles from './styles.module.scss'

const {Header, Content, Footer} = Layout;

function AdminLayout(props) {
    return (
        <Layout className={styles.layout}>
            <Layout>
                <Header className={styles.header}/>
                <Content className={styles.content}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminLayout;