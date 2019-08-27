import React, { Component } from 'react';
import {Icon,Tooltip } from 'antd';
import './index.css'
import '../../static/IconFont/iconfont.css'

 
const CancelButton = () => (<Tooltip placement="bottom" title={'撤销'}><Icon type="undo" className="customer-icon"/></Tooltip>)
const BackButton = () => (<Tooltip placement="bottom" title={'重做'}><Icon type="redo" className="customer-icon"/></Tooltip>)



class EditorHeader extends Component{

    render(){
        return(
            <div id="toolbar" style={{width:'100%'}}>
               <div className="toolbar-inner">
               <span className="ql-block">
               <button className="ql-clean"></button>
                 <button className="ql-undo"><CancelButton /></button>
                 <button className="ql-redo"><BackButton /></button>
               </span>
               <span className="ql-block">
              <select className="ql-size">
                 <option value="small"></option>
                 <option selected></option>
                 <option value="large"></option>
                 <option value="huge"></option>
              </select>
              <button className="ql-bold"></button>
              <button className="ql-italic"></button>
              <button className="ql-underline"></button>
              <button className="ql-strike"></button>
              <button className="ql-color"></button>
              <button className="ql-script" value="sub"></button>
              <button className="ql-script" value="super"></button>
              </span>
              <span className="ql-block">
              <button className="ql-list" value="ordered"></button>
              <button className="ql-list" value="bullet"></button>
              <button className="ql-indent" value="-1"></button>
              <button className="ql-indent" value="+1"></button>
              <button className="ql-direction" value="rtl"></button>
              </span>
              <span className="ql-block">
              <button className="ql-blockquote"></button>
              <button className="ql-code-block"></button>
              <button className="ql-image"></button>
              <button className="ql-video"></button>
             
              </span>
              </div>
          </div>
        )
    }
}

export default EditorHeader