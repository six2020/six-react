import {REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAIL} from '../constants'

// reducers
// 默认状态
let defaultState = {
    name: '未知用户',
    isLoading: false,
    err: {errCode: 0, errMsg: undefined}
};

// redux （state， action） =>  newState
export default function reducers(state = defaultState, action){
    // request
    if(action.type === REQUEST_BEGIN){
        return {...state, isLoading: action.isLoading}
    }
    if(action.type === REQUEST_SUCCESS){
        return {...state, name: action.name, isLoading: false, err: {errCode: 0, errMsg: undefined}}
    }
    if(action.type === REQUEST_FAIL){
        return {...state, err: {errCode: action.err[0], errMsg: action.err[1]},  isLoading: false}
    }

    return state
}