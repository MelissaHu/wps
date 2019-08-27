import React, { Component } from 'react';
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import {Layout,Icon } from 'antd'
import './BasicLayout.css'
const {Header,Content} = Layout;


class BasicLayout extends Component {
    render() {
        return (
        <div>
        <Layout>
          <Header className="header">
             <Nav></Nav>
          </Header>
          <Content style={{minHeight:'600px',marginTop:'72px'}}>
           {this.props.children}
          </Content>
          <Footer></Footer>
        </Layout>
        </div>
        )
    }
}

export default BasicLayout;