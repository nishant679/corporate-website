import React from 'react';
import {Layout} from 'antd';
import LoginForm from "./LoginForm";
import styles from './styles.module.scss'

const {Header, Content, Footer} = Layout;

function LoginPage(props) {
    return (
        <Layout className={styles.layout}>
            <Header>
                <div className="logo"/>
            </Header>

            <Content className={styles.content}>
                <LoginForm loggedInSuccessfully={
                    () => {
                        props.history.push('/admin')
                    }
                }/>
            </Content>
        </Layout>
    )
}

export default LoginPage;