// 创建 store
import {createStore, applyMiddleware, combineReducers} from 'redux'

// 中间件 redux-thunk
import thunk from 'redux-thunk'

// 引入reducer
import reducers from './reducers'


let store = createStore(reducers, applyMiddleware(thunk));

export default store