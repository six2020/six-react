import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'


/**
 * 
 * 路由的基础使用
 * 
*/

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <div>
          {/* 路由链接， 路由导航， 声明式路由导航 */}
          <Link style={{marginLeft: '20px'}} to="/home">home</Link>
          <Link style={{marginLeft: '20px'}} to="/about">about</Link>
          <Link style={{marginLeft: '20px'}} to="/aaa">aaa</Link>
          <Link style={{marginLeft: '20px'}} to="/bbb">bbb</Link>
        </div>

        {/* 注册路由 */}
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />

        {/* <Route path='/aaa' render={()=>{
          // 逻辑
          return ( <h2> render 渲染的组件 </h2> )
        }} />
        <Route path='/bbb' children={(a)=>{
          console.log(`a ====>>>>`, a);
          // 逻辑
          return ( <h2> children 渲染的组件 </h2> )
        }} /> */}
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
