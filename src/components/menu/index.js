import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PhoneOutlined, MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import MenuItem from '../menuItem';

class AppMenu extends React.Component {
    state = {
        itemSelected: 'home',
    };

    handleClick = e => {
        this.setState({
            itemSelected: e.key,
        });
    };

    render() {
        const menuItemProps = {
            itemSelected: this.state.itemSelected,
            ...this.props
        }
        return (
            <React.Fragment>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        Home
        </Menu.Item>
                    <Menu.Item key="news">
                        <MailOutlined />
                        News
        </Menu.Item>
                    <Menu.Item key="contact">
                        <PhoneOutlined />
                        Contact
        </Menu.Item>
                    <Menu.Item key="about">
                        <InfoCircleOutlined />
                        About Us
        </Menu.Item>
                </Menu>
                <MenuItem {...menuItemProps} />
            </React.Fragment>
        );
    }
}

export default AppMenu;