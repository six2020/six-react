import {createStore} from 'redux'

let defaultState = {
    data: ''
}

function reducer(state=defaultState, action){
    if(action.type === "CHANGE_STATE"){
        return {...state, ...action.payload}
    }

    return state
}

export function createClientStore(){
    return createStore(reducer, (window as any).REDUX_STORE)
}

export function createServerStore(){
    return createStore(reducer)
}