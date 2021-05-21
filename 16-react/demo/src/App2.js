import {BrowserRouter, HashRouter, Route, Link, NavLink} from 'react-router-dom'

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
          {/* <Link style={{marginLeft: '20px'}} to="/home">home</Link>
          <Link style={{marginLeft: '20px'}} to="/about">about</Link> */}


          {/* <NavLink activeClassName='six' style={{marginLeft: '20px'}} to="/home">home</NavLink>
          <NavLink activeClassName='six' style={{marginLeft: '20px'}} to="/about">about</NavLink> */}

          <NavLink activeStyle={{color: 'red'}} style={{marginLeft: '20px'}} to="/home">home</NavLink>
          <NavLink activeStyle={{color: 'blue'}} style={{marginLeft: '20px'}} to="/about">about</NavLink>
        </div>

        {/* 注册路由 */}
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
