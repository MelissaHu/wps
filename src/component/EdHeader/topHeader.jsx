import React, { Component } from 'react';
import {NavLink } from 'react-router-dom'
import { Layout,Button } from 'antd';

const { Header } = Layout;


class TopHeader extends Component{
  constructor(){
    super()
    this.saveDocument = this.saveDocument.bind(this)
  }

  saveDocument(){
    this.props.saveDocument()
  }
  
    render(){
        return(
          <Header className="top-header">
          <div className="top-header-inner">
             <NavLink exact  to='/' ><Button icon="double-left">返回</Button> </NavLink>
             <Button type="primary" style={{marginTop:'8px'}} onClick={this.saveDocument}>保存</Button> 
          </div>
          </Header>
        )
    }
}

export default TopHeader