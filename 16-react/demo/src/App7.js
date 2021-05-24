import { BrowserRouter, Route, NavLink, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFount from './pages/NotFount'
import Info from './pages/Info'

/**
 * 
 * 路由传参
 * 
*/

function App(props) {
    // console.log(`porps ====>>>>`, porps);
    
    return (
        <div className="App">

            <div>
                <p>编程式导航</p>
                <button onClick={() => { props.history.push('/info') }}>info</button>
                <button onClick={() => { props.history.goForward() }}>前进</button>
                <button onClick={() => { props.history.goBack() }}>后退</button>
            </div>

                <div>
                    <NavLink activeStyle={{ color: 'red' }} style={{ marginLeft: '20px' }} to="/home">home</NavLink>
                    <NavLink activeStyle={{ color: 'blue' }} style={{ marginLeft: '20px' }} to="/about">about</NavLink>
                    <NavLink activeStyle={{ color: 'blue' }} style={{ marginLeft: '20px' }} to="/info">info</NavLink>
                </div>

                {/* 注册路由 */}

                <Switch>
                    {/* /home/user/a */}
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/info' component={Info} />

                    <Route component={NotFount} />
                </Switch>
        </div>
    );
}

export default withRouter(App);
