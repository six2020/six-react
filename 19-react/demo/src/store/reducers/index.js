
import {combineReducers} from 'redux'

// 引入reducer
import countReducer from './countReducer'
import requestReducer from './requestReducer'

// combineReducers 合并 reducer
export default combineReducers({
    count: countReducer,
    request: requestReducer
})
