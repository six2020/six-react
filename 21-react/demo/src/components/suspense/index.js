import {Suspense, lazy} from 'react'
import {Route, Link} from 'react-router-dom'
import './suspense.css'

// import Lazy from './Lazy1'
// 异步加载
let Lazy =  lazy(()=> import('./Lazy1'));
let LazyA =  lazy(()=> import('./Lazy2'));

export default ()=>{
    return (
        <div>
            <Suspense fallback={
                <div>loading<i></i></div>
            }>
                <Lazy />
            </Suspense>

            <Link to="/suspense/lazy">异步组件</Link>
            <Suspense fallback={
                <div>loading<i></i></div>
            }>
                <Route path='/suspense/lazy' component={LazyA} />
            </Suspense>
        </div>
    )
}