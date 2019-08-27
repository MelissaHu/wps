import React, { Component } from 'react';
import { Layout } from 'antd';
import TopHeader from './topHeader'
import EditorHeader from './editorHeader'


const { Header } = Layout;


const CustomButton = () => <span className="octicon octicon-star" />
 


class EdHeader extends Component {
    render() {
        return (
        <Header className="top-header">
                 <TopHeader />
                 <EditorHeader />
        </Header>
        
        )
    }
}

export default EdHeader;