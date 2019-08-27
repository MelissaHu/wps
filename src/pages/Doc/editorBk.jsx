import React,{Component} from 'react'
import {Layout,Affix} from 'antd'
import EdHeader from '../../component/EdHeader'
import TopHeader from '../../component/EdHeader/topHeader'
import EditorHeader from '../../component/EdHeader/editorHeader'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './editor.css'


 const Editors={
    modules:{
        toolbar: {
            container: "#toolbar",
            handlers: {
              "insertStar": insertStar,
            }
          }
    } 
 } 

 function insertStar () {
    const cursorPosition = this.quill.getSelection().index
    this.quill.insertText(cursorPosition, "★")
    this.quill.setSelection(cursorPosition + 1)
  }



class Editor extends Component{
    constructor(props) {
        super(props)
        this.state = { text: '' ,theme:'snow',placeholder:'Write something...'} // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        
      }
      componentDidMount() {
        let scrollNode = document.getElementById("editorBody")
        if(scrollNode){
           let reg = new RegExp("(\\s|^)" + 'scroll' + "(\\s|$)");
           let ele = document.body;
            scrollNode.addEventListener('scroll', e=>{
                if(e.target.scrollTop>0){
                    document.body.className='scroll'
                }else{
                    ele.className = ele.className.replace(reg, " ");
                }
                
            });
        }
        
      }
     
      
      handleChange(value) {
        this.setState({ text: value })
      }

      handleKeyUp(){

      }
     
      render() {
        return (
            <div style={{background:'#f7f7f7',height:'100%'}}>
             <Layout style={{height:'100%'}}>
             <TopHeader></TopHeader>
             <div className="editor-wrapper" >

                <div className="quill-header-wrapper hide-shadow">
                    <EditorHeader ></EditorHeader>
                </div>

                <div className="quill-box" id="editorBody">
                    <div className="quill-body">

                       <div className="quill-body-inner">
                        <div className="quill-title"><input placeholder="标题" onKeyUp = {this.handleKeyUp.bind(this)} /></div>
                       
                        <ReactQuill
                          onChange={this.handleChange}
                          placeholder={this.props.placeholder}
                          modules={Editors.modules}/>

                        </div>

                        <div className="editor-footer">编写于<span>melissa</span></div>
                    </div>
                </div>
              </div>
             </Layout>
            </div>
        )
      }
    }
    
    
    export default Editor