import './App.css';
import {NavLink} from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <div className="App">

      <div>
        <ul>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/componentdemo'>普通组件</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/puredemo'>纯 class 组件</NavLink> </li>
          {/* 
            
          */}
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/functionaldemo'>纯函数组件</NavLink> </li>
          {/* 
            memo(()=>{})
          */}
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/memo'>Memo组件</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/hoc'>高阶组件</NavLink> </li>

          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/portalsdemo'>组件插槽</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/suspense'>Suspense</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/error'>Error</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/lifecycledemo'>生命周期</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/contextdemo'>Context传递props</NavLink> </li>
          <li> <NavLink style={{marginLeft: '20px'}} activeStyle={{color: 'red'}} to='/hook'>hook</NavLink> </li>
        </ul>
      </div>

      <div id='div'>{routes}</div>

    </div>
  );
}

export default App;
