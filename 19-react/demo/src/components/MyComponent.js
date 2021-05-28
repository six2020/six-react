import React, { Component } from 'react'
import {createStore} from 'redux'

// reducers
// 默认状态
let defaultState = {
    count: 0,
    name: '未知用户'
};

// redux （state， action） =>  newState
function reducers(state = defaultState, action){
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


// 创建 store

let store = createStore(reducers);



export default class MyComponent extends Component {

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }

    // 加
    addHandle = ()=>{
        store.dispatch({type: 'add', value: 10})
    }

    // 减
    jianHandle = ()=>{
        store.dispatch({type: 'jian'})
    }

    // 请求
    requestHandle = ()=>{
        fetch('http://localhost:8080/user')
            .then(res => res.json())
            .then(res => {
                store.dispatch({type: 'request', name: res.name})
            })
    }

    render() {

        let {count, name} = store.getState()

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={this.addHandle}>add</button>
                <button onClick={this.jianHandle}>jian</button>

                <h2>{name}</h2>
                <button onClick={this.requestHandle}>request</button>
            </div>
        )
    }
}
