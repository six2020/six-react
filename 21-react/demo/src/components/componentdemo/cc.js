/**
 * 
 * 普通类组件
 * 
*/

import React, { Component, PureComponent } from 'react'

export default class componentdemo extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }
    }

    static defaultProps = {
        name: '普通 class 组件'
    }

    render() {
        /**
         * 
         * 返回 JSX
         * 
        */
        return (
            <div>
                <h4>{this.props.name}</h4>
            </div>
        )

        /**
         * 
         * 返回文本节点
         * 
        */
        // return '我是文本节点'

       /**
        * 
        * 返回数组
        * 
        * 返回数组会将数组遍历一遍
        * 
       */
        // return [
        //     <li key='1'>111</li>,
        //     <li key='2'>222</li>,
        //     <li key='3'>333</li>
        // ]
    }
}
