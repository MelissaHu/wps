import React,{Component} from 'react'
import { HashRouter as Router,Route,Switch} from "react-router-dom"
import BasicLayout from '../layouts/BasicLayout'
import DocLayout from '../layouts/DocLayout'
import Home from '../pages/Static/home'
import Service from '../pages/Static/service'
import Price from '../pages/Static/price'
import Help from '../pages/Static/help'
import Dashboard from '../pages/Doc/dashboard'
import Editor from '../pages/Doc/editor'
import App from '../app'
 class BasicRouter extends Component{
  // <BasicLayout component={BasicLayout}>
  // <Switch> 
  //               <Route exact path="/" name='首页' component={Home} />
  //               <Route exact path="/service" name='首页' component={Service} />
  //               <Route exact path="/price" name='首页' component={Price} />
  //               <Route exact path="/help" name='首页' component={Help} />
  //           </Switch> 
  //         </BasicLayout> 
  // const BasicRouter = () => (  <IndexRoute  component={Login} />
  // <Router>
  //         <DocLayout component={DocLayout}>
  //           <Switch> 
  //               <Route exact path="/" name='文档' component={Dashboard} />
  //           </Switch> 
  //         </DocLayout> 
  //         <Route exact path="/editor" name='编辑文档' component={Editor} />
  //         </Router>
     render(){  //exact 是一种严格匹配模式
        return( // switch 作用是当<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配
         <Router style={{height:'100%'}}>
         <App component={App}>
         <Switch> 
          <DocLayout exact path="/" component={DocLayout}>
                <Route path="/" name='文档' component={Dashboard} />
          </DocLayout> 
          <Editor  exact path="/editor" name='编辑文档' component={Editor} ></Editor>
          </Switch> 
          </App>
          </Router>
        )}
      }
   
export default BasicRouter;