import React,{Component} from 'react'
import {Layout,Affix} from 'antd'
import EdHeader from '../../component/EdHeader'
import TopHeader from '../../component/EdHeader/topHeader'
import Quill from 'quill'
import EditorHeader from '../../component/EdHeader/editorHeader'
//import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css'; 
import './editor.css'

 function insertStar () {
    const cursorPosition = this.quill.getSelection().index
    this.quill.insertText(cursorPosition, "★")
    this.quill.setSelection(cursorPosition + 1)
  }


class Editor extends Component{
    constructor(props) {
        super(props)
        this.state={ 
          text: '' ,
          theme:'snow',
          placeholder:'Write something...',
          headShadow:false,
          infoTitle:'',
          infoContent:'',
          infoTime:''
        } // You can also pass a Quill Delta here
        
          this.handleKeyUp=this.handleKeyUp.bind(this)
          this.handleKeyDown = this.handleKeyDown.bind(this)
          this.saveAllContent = this.saveAllContent.bind(this)
          this.handleTitleChange = this.handleTitleChange.bind(this)
      }
      componentDidMount() {
        var quill = new Quill('#quill-body-container', {
          modules: {
            toolbar: {
              container:'#toolbar',
            }  
          },
          theme: 'snow'
        });

        quill.on('text-change', function() {
          console.log('Text change!');
        });

        let bodyContents = quill.getContents();
        this.setState({
           infoContent:bodyContents
        })


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
     


      handleKeyUp(){
      //  let handleKeyUp = this.state.handleKeyUp;
      let flag = this.state.headShadow
        this.setState({
          headShadow:!flag
        })
      }

      handleKeyDown(){
        let flag = this.state.headShadow
        this.setState({
          headShadow:!flag
        })
      }
      
      saveAllContent(){
        let newDate = new Date();
        let yearDt = newDate.getFullYear();
        let monDt = newDate.getMonth();
        let dayDt = newDate.getDay();
        
        let bodyContents = document.querySelector('#quill-body-container').children[0].innerHTML;
        let articleContent = {
          title:this.state.infoTitle,
          content:bodyContents,
          time:`${yearDt}-${monDt}-${dayDt}`
        }
        localStorage.setItem('allArticle',JSON.stringify(articleContent))
         window.location.href='/'
      }

      handleTitleChange(event){
        this.setState({infoTitle:event.target.value});
      }
     
      render() {
        return (
            <div style={{background:'#f7f7f7',height:'100%'}}>
             <Layout style={{height:'100%'}}>
             <TopHeader saveDocument={this.saveAllContent}></TopHeader>

             <div className="editor-wrapper" >

             <div className="quill-header-wrapper hide-shadow">
             <EditorHeader></EditorHeader>
             <div className="head-shadow" style={{display:!this.state.headShadow ? 'none' :'block'}}></div>
             </div>

              <div className="quill-box" id="editorBody">
             
              <div className="quill-body">

              <div className="quill-body-inner">
                 <div className="quill-title"><input placeholder="标题" onFocus = {this.handleKeyUp} onBlur = {this.handleKeyDown} onChange={this.handleTitleChange} value={this.state.infoTitle}/></div>
              
               <div id="quill-body-container"></div>
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