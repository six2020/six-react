import React, { Component } from 'react'

export default class Item extends Component {

    state={
        flag: false
    }

    // enterHhandle=()=>{
    //     // console.log(` ====>>>>`, '移入');

    //     this.setState({
    //         flag: true
    //     })
        
    // }

    // leaveHandle = ()=>{
    //     // console.log(` ====>>>>`, '移出');
        
    //     this.setState({
    //         flag: false
    //     })
    // }

    // 箭头函数形式 事件传参
    // mouseHandle = (flag)=>{
    //     this.setState({
    //         flag: flag
    //     })
    // }

        // 高阶函数形式
    mouseHandle = (flag)=>{

        return ()=>{
            this.setState({
                flag: flag
            })
        }
        
    }

    changeHandle = (e)=>{
        this.props.switchTodoDoneFromChild(this.props.id, e.target.checked)
    }

    render() {

        let {id, done, todo} = this.props

        return (
            <li 
                // 箭头函数形式 事件传参
                // onMouseEnter={()=>{this.mouseHandle(true)}}
                // onMouseLeave={()=>{this.mouseHandle(false)}}
                // 高阶函数形式 传参
                onMouseEnter={this.mouseHandle(true)}
                onMouseLeave={this.mouseHandle(false)}

                className="list-group-item"
                style={{backgroundColor: this.state.flag ? '#ccc' : ''}}>

                <div className="form-check">
                    <input
                        defaultChecked={done}
                        onChange={this.changeHandle}
                        className="form-check-input"
                        type="checkbox"
                        id={"flexCheckDefault" + id} />
                    <label className="form-check-label" htmlFor={"flexCheckDefault" + id}>
                        {todo}
                    </label>

                    {this.state.flag ? <button type="button" className="btn btn-danger btn-sm" style={{ float: 'right' }}>删除</button> : ''}
                </div>
            </li>
        )
    }
}
