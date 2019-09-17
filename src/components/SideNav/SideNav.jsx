import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

function SideNav({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={['users']}
      mode="inline"
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="pie-chart" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/reports">
        <Link to="/reports">
          <Icon type="alert" />
          <span>Reports</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/orders">
        <Icon type="gift" />
        <span>Item Orders</span>
      </Menu.Item>
      <Menu.Item key="/coffee">
        <Icon type="coffee" />
        <span>Coffee Coupon</span>
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <Icon type="user" />
            <span>Users</span>
          </span>
        }
        key="users"
      >
        <Menu.Item key="/users/new">
          <Link to="/users/new">
            <Icon type="user-add" />
            <span>New</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/users/accepted">
          <Icon type="check-circle" />
          <span>Accepted</span>
        </Menu.Item>
        <Menu.Item key="/users/rejected">
          <Icon type="close-circle" />
          <span>Rejected</span>
        </Menu.Item>
        <Menu.Item key="/users/pending">
          <Icon type="hourglass" />
          <span>Pending</span>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/donations">
        <Icon type="tags" />
        <span>Donation Tags</span>
      </Menu.Item>
      <Menu.Item key="/settings">
        <Icon type="setting" />
        <span>Setting</span>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(SideNav);
