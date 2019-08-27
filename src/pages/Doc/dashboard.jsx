import React, { Component } from 'react'
import {Icon, Card,Table,Menu,Dropdown,Divider,Popconfirm} from 'antd'
import './dashboard.css'
//import Pop from '../../component/Pop'


  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
class Dashboard extends Component{
      constructor(props){
          super(props);
          this.state={
            dataSource:[]
            }   
        }

        componentDidMount(){
          let newArticle = JSON.parse(localStorage.getItem('allArticle'))
          let len = this.state.dataSource.length;
         
          let newItem = {
            key:`${len+1}`,
            title:newArticle.title,
            author:'瓶瓶',
            size:'32kb',
            updateDate:newArticle.time
          }
       
        //  console.log('newDataSource',typeof(this.state.dataSource),len)
         let newDataSource = this.state.dataSource;
             newDataSource.push(newItem)
          
           this.setState({
              dataSource:newDataSource
           })
          console.log('newArticle',newArticle)
        }

// 删除
handleDelete (key){
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
          
 
render(){   
  
  const columns = [
    {
      title: '文件名',
      dataIndex: 'title',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '所有者',
      dataIndex: 'author',
    },
    {
      title: '大小',
      dataIndex: 'size',
    },
     {
        title: '更新时间',
        dataIndex: 'updateDate',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'x',
        render: (text, record) =>(
            <span>
            <a href="javascript:;">修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定删除?" okText="确定" cancelText="取消" onConfirm={() => this.handleDelete(record.key)}>
            <a href="javascript:;">删除</a>
          </Popconfirm>
          </span>
        )
      }
  ];

        return(
            <div className="dashboard-body">
              <Card bordered={false}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.dataSource} />
              </Card>
            </div>
        )
    }
}

export default Dashboard;