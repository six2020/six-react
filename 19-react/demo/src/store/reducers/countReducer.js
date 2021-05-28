import {ADD, JIAN} from '../constants'

// reducers
// 默认状态
let defaultState = {
    count: 0
};

// redux （state， action） =>  newState
export default function reducers(state = defaultState, action){

    if(action.type === ADD){
        return {...state, count: state.count + action.value}
    }
    if(action.type === JIAN){
        return {...state, count: state.count - action.value}
    }
    return state
}