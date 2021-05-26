import React, { Component } from 'react'

import store from '../store'
// actions
import {add, jian, request} from '../store/actions'

export default class MyComponent extends Component {

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }

    // 加
    addHandle = ()=>{
        store.dispatch(add())
    }

    // 减
    jianHandle = ()=>{
        store.dispatch(jian())
    }

    // 请求
    requestHandle = ()=>{
        
        store.dispatch(request())
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
