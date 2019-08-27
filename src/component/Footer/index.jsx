import React, { Component } from 'react';
import {Layout,Icon } from 'antd'
const {Footer} = Layout;
import './index.css'

import imgPhone from '../../static/img/footer/phone.png';
import imgServer from '../../static/img/footer/server.png';
import imgTime from '../../static/img/footer/time.png';
import imgCodeBox from '../../static/img/footer/codeBox.png';


const footerList = [
    {
        title:'产品定价',
        list:[
            'wps+基础版',
            'wps+商业版',
            'wps+高级商业版'
        ]
    },
    {
        title:'私有化部署',
        list:[
            '国产正版化方案',
            '移动办公室',
            '安全防护方案'
        ]
    },
    {
        title:'用户支持',
        list:[
            '用户手册',
            '下载中心',
            '帮助中心',
            '培训与认证',
            'WPS官网'
        ]
    },
    {
        title:'WPS+博客',
        list:[
            'WPS图文教程',
            '客户案例'
        ]
    }
]



class Nav extends Component{
    render() {
        return (
        <div className="footer-container">
          <div className="footer-container-inner">
            <div className="footer-body">
             <div className="footer-links">
             {footerList.map((item,index)=>(
                 <div className="fonter-list" key={index}>
                    <h4 className="fonter-title">{item.title}</h4>
                    <ul className="fonter-list-ul">
                     {item.list.map((items,index1)=>(
                        <li key={index1}><a href="#">{items}</a></li>
                     ))
                    }
                    </ul>

                 </div>
             ))}
             </div>
             <div className="footer-contact">
                 <div className="contact-number">
                 <ul>
                 <li><img src={imgPhone} />
                 <p><span className="title">购买热线</span><span className="detail strong">400-898-0707</span></p></li>
                 <li><img src={imgServer} />
                 <p><span className="title">客服电话</span><span className="detail">400-677-5005</span></p></li>
                 <li><img src={imgTime} />
                 <p><span className="title">服务时间</span><span className="detail">周一至周五：09:00-18:00</span></p></li>
                 </ul>
                 </div>
               
                 <div className="contact-code-box">
                    <img src={imgCodeBox} alt="" style={{width:'100%',height:'100%'}}/>
                    <p className="text">扫码联系客服</p>
                 </div>
             </div>
             </div>
            <div className="copy-right"><p>© 2008-2019 Kingsoft Office Software, Inc. All Rights Reserved.</p></div>
          </div>
        </div>
        )
    }
}

export default Nav;