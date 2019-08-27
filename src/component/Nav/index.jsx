import React, { Component } from 'react';
import './index.css'
import {NavLink } from 'react-router-dom'





class Nav extends Component{

    render() {
        return (
        <div className="nav-container">
          <div className="nav-container-inner">
             <div className="left-nav">
                 <div className="logo">logo</div>
                 <div className="nav-list">
                 <NavLink exact  to='/' activeClassName="on" ><span>首页</span></NavLink>
                 <NavLink exact  to='/service' activeClassName="on" ><span>产品</span></NavLink>
                 <NavLink exact  to='/price' activeClassName="on"><span>定价</span></NavLink>
                 <NavLink exact  to='/help' activeClassName="on"><span>帮助</span></NavLink>
                 </div>
             </div>
             <div className="right-nav">
               <a className="btn-login">登陆</a>
               <NavLink className="btn-start" to='/dashboard'> 开始使用</NavLink>
             </div>
          </div>
        </div>
        )
    }
}

export default Nav;