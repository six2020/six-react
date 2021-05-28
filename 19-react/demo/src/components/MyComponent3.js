import React, { Component } from 'react'

import {connect} from 'react-redux'

// actions
import {add, jian, request} from '../store/actions'


/**
 * 
 * UI 组件
 * 
*/
class MyComponent extends Component {

    // 加
    addHandle = ()=>{
        this.props.add(100)
    }

    // 减
    jianHandle = ()=>{
        this.props.jian(1)
    }

    // 请求
    requestHandle = ()=>{
        this.props.request()
    }

    render() {
        // console.log(`this.props ====>>>>`, this.props);

        let {count, name} = this.props
        
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


/**
 * 
 * react-redux 容器组件
 * 
*/


// 将 state 映射到 props
// 传递了这个方法之后，就不需要我们自己来订阅
function mapStateToProps(store){
    return {
        count: store.count,
        name: store.name
    }
}

// actions
let mapDispatchToProps = {
    add,
    jian,
    request
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)