import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Err404 from './pages/Err404'
import NotFount from './pages/NotFount'

/**
 * 
 * Switch 的使用
 * 
*/

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <div>
          <NavLink activeStyle={{color: 'red'}} style={{marginLeft: '20px'}} to="/home">home</NavLink>
          <NavLink activeStyle={{color: 'blue'}} style={{marginLeft: '20px'}} to="/about">about</NavLink>
        </div>

        {/* 注册路由 */}

        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />

            {/* <Route component={Err404} /> */}

            <Route component={NotFount} />
        </Switch>
        
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
