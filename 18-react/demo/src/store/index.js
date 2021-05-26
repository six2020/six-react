// 创建 store
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

// 中间件 redux-thunk
import thunk from 'redux-thunk'

let store = createStore(reducers, applyMiddleware(thunk));

export default store