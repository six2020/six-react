import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFount from './pages/NotFount'
import Info from './pages/Info'

/**
 * 
 * Redirect 的使用
 * 
*/

function App() {

  let login = true;

  return (
    <div className="App">
      
      <BrowserRouter>

        <div>
          <NavLink activeStyle={{color: 'red'}} style={{marginLeft: '20px'}} to="/home">home</NavLink>
          <NavLink activeStyle={{color: 'blue'}} style={{marginLeft: '20px'}} to="/about">about</NavLink>
          <NavLink activeStyle={{color: 'blue'}} style={{marginLeft: '20px'}} to="/info">info</NavLink>
        </div>

        {/* 注册路由 */}

        <Switch>
            {/* <Route path='/' component={Home} /> */}
            <Route path='/info' render={()=>{
              return login ? <Info /> : <Redirect to='/home' />
            }} />

            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />

            {/* 将 from 定向到 to */}
            <Redirect from='/abc' to='/info' />

            <Redirect to='/home' />

            <Route component={NotFount} />
        </Switch>
        
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
