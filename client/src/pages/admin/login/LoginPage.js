import React from 'react';
import {Button, Dropdown, Layout} from 'antd';
import LoginForm from "./LoginForm";
import styles from './styles.module.scss'
import logo from "../../../assets/images/logo.png";
import {EMAIL} from "../../../utils/constants";

const {Header, Content, Footer} = Layout;

function LoginPage(props) {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <div className={styles.logo}><img src={logo} alt="McKinley & Rice Logo"/></div>
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