import React, {useState} from 'react';
import {Button, Col, Dropdown, Icon, Layout, Menu, Row} from 'antd';
import styles from './styles.module.scss'
import {EMAIL} from "../../utils/constants";
import {logout} from "../../utils/Auth";
import {withRouter} from "react-router-dom";
import logo from '../../assets/images/logo.png';

const {Header, Content, Footer} = Layout;

function AdminLayout(props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <a onClick={() => logout(props.history)}>
                    Logout
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Layout className={styles.layout}>
            <Layout>
                <Header className={styles.header}>
                    <div className={styles.logo}><img src={logo} alt="McKinley & Rice Logo"/></div>
                    <Dropdown className={styles.logoutDropdown} overlay={menu} placement="bottomCenter">
                        <Button>{localStorage.getItem(EMAIL)}</Button>
                    </Dropdown>
                </Header>
                <Content className={styles.content}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(AdminLayout);