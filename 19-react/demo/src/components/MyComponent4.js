import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, jian} from '../store/actions/countAction'
import {request} from '../store/actions/requestAction'


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
        console.log(`this,props ====>>>>`, this.props);
        
        let {count, name, isLoading, err} = this.props
        
        return (
            <div>
                <h2>{count}</h2>

                <button onClick={this.addHandle}>add</button>
                <button onClick={this.jianHandle}>jian</button>

                {
                    isLoading ? <h2>正在请求。。。</h2> : 
                    err.errCode ? <div><h2>请求失败 </h2><p>{err.errMsg}</p></div> :
                    <h2>{name}</h2>
                }
                <button onClick={this.requestHandle}>request</button>
            </div>
        )
    }
}



function mapStateToProps(store){

    console.log(`store ====>>>>`, store);
    

    return {
        count: store.count.count,
        name: store.request.name,
        isLoading: store.request.isLoading,
        err: store.request.err
    }
}

let mapDispatchToProps = {
    add,
    jian,
    request
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)