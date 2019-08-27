import React, { Component } from 'react'
import { Menu } from 'antd'



class Pop extends Component {
    constructor(props){
        super(props);
        this.toDelete=this.toDelete.bind(this)
    }

    toDelete(index){
        this.props.deleteRowData(index)
    }

    render() {
        return (
        <Menu style={{padding:'0px'}}>
            <Menu.Item key="0">移动</Menu.Item>
            <Menu.Item key="1">移动</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" onClick={this.toDelete(this.props.index)}>删除</Menu.Item>
        </Menu>
                 
        )
    }
}

export default Pop;