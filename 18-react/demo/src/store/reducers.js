// reducers
// 默认状态
let defaultState = {
    count: 0,
    name: '未知用户'
};

// redux （state， action） =>  newState
export default function reducers(state = defaultState, action){
    console.log(`state ====>>>>`, state);
    console.log(`action ====>>>>`, action);


    if(action.type === 'add'){
        return {...state, count: state.count + action.value}
    }
    if(action.type === 'jian'){
        return {...state, count: state.count - 1}
    }
    if(action.type === 'request'){
        return {...state, name: action.name}
    }

    return state
}