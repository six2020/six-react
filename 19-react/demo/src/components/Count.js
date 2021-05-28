import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, jian} from '../store/actions/countAction'

class Count extends Component {
    render() {
        return (
            <div>
                <hr />

                <h2>{this.props.count}</h2>
                <button onClick={()=>{this.props.add(10000)}}>add</button>
                <button onClick={()=>{this.props.jian(1000)}}>jian</button>
            </div>
        )
    }
}




export default connect(
    state => ({count: state.count.count}),
    {
        add,
        jian
    }
)(Count)