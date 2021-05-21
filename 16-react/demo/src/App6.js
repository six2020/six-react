import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFount from './pages/NotFount'
import Info from './pages/Info'

/**
 * 
 * exact 严格模式
 * 
*/

function App() {

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
            {/* /home/user/a */}
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/info' component={Info} />
            
            <Route component={NotFount} />
        </Switch>
        
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
