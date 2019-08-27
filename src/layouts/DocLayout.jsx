import React, { Component } from 'react';
import {Layout,Icon,Avatar} from 'antd'
import SiderMenu from '../component/SiderMenu'
import './DocLayout.css'
const {Header,Content,Sider} = Layout;


class DocLayout extends Component {
    render() {
        return (
        <div>
        <Layout>
        <Header className="header-container" >
        <div className="top-header-wrapper">
        <div className="logo">Logo文档</div>
        <div className="right-header">
            <span className="right-header-item"><Icon type="search" style={{fontSize:'16px'}}/></span>
            <span className="right-header-item"><Icon type="bell" style={{fontSize:'16px'}}/></span>
            <span className="right-header-item"><Avatar style={{ backgroundColor: '#1890ff' }} icon="user" size="8"/></span>
        </div>
        </div>
        </Header>
         <Layout style={{marginTop:'50px'}}>
           <SiderMenu style={{background:'#f7f7f7'}}>Sider</SiderMenu>
           <Content style={{minHeight:'800px',marginTop:'24px'}}>
           {this.props.children}
           </Content>
          </Layout>
        </Layout>
        </div>
        )
    }
}

export default DocLayout;