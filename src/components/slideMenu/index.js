import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  UserOutlined,
  HomeOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SlideMenu extends React.Component {
  state = {
    collapsed: false,
  };

  handleClick = event => {
      this.props.getSelectedItem(event.key)
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh', maxWidth: '200px' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <HomeOutlined />
                  <span>Welcome</span>
                </span>
              }
            >
              <Menu.Item key="home" onClick={this.handleClick}>Home</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <EditOutlined />
                  <span>My Customer</span>
                </span>
              }
            >
              <Menu.Item key="addCustomer" onClick={this.handleClick}>Add Customer</Menu.Item>
              <Menu.Item key="manageCustomer" onClick={this.handleClick}>Manage Customers</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <SettingOutlined />
                  <span>Website Management</span>
                </span>
              }
            >
              <Menu.Item key="postNews" onClick={this.handleClick}>Post News</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <UserOutlined />
                  <span>Account</span>
                </span>
              }
            >
              <Menu.Item key="logout" onClick={this.handleClick}>Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default SlideMenu