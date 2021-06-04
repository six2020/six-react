import {Route} from 'react-router-dom'

// 普通组件
import Componentdemo from './components/componentdemo/index'
// 纯组件
import Puredemo from './components/puredemo/index'
// 高阶组件
import HOCcomponent from './components/hoc'
// 异步组件
import Suspense from './components/suspense'
// 错误组件
import Error from './components/error'
// 组件插槽
import Portals from './components/portalsdemo'

export default (
    <>
        <Route path='/componentdemo' component={Componentdemo} />
        <Route path='/puredemo' component={Puredemo} />
        <Route path='/hoc' component={HOCcomponent} />
        <Route path='/suspense' component={Suspense} />
        <Route path='/error' component={Error} />
        <Route path='/portalsdemo' component={Portals} />
    </>
)