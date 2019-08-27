import React, { Component } from 'react';
import { Layout, Icon,Menu,Button} from 'antd'
import {NavLink } from 'react-router-dom'

import './index.css'
const { Sider } = Layout;


class SiderMenu extends Component {
    
    render() {
        return (
            <Sider className="sider-wrapper" style={{background:'#f7f7f7'}}>
                <div className="sider-action-button">
                <NavLink exact  to='/editor' ><Button type="primary">新建 </Button> </NavLink>
                 <Button type="solid">导入</Button>
                </div>
                <Menu style={{width:200,background:'#f7f7f7'}} defaultSelectedKeys={['1']} mode="inline">
                   <Menu.Item key="1">
                        <Icon type="dashboard" />
                        <span>工作台1</span>
                   </Menu.Item>
                   <Menu.Item key="2">
                        <Icon type="profile" />
                        <span>工作台2</span>
                   </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu;