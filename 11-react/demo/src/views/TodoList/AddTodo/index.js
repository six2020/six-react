import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class AddTodo extends Component {

    state = {
        val: ''
    }

    changeHandle = (e)=>{
        this.setState({
            val: e.target.value
        })
    }

    addHandle = ()=>{
        // console.log(`this.props.add ====>>>>`, this.props.add);
        let newTodo = {id: nanoid(), todo: this.state.val, done: false}

        if(!this.state.val.trim()){
            alert('请输入...')
            return
        }

        this.props.add(newTodo)

        this.setState({
            val: ''
        })
        
    }

    render() {
        return (
            <div className="input-group">
                <input 
                    type="text"
                    value={this.state.val}
                    onChange={this.changeHandle}
                    className="form-control"
                    placeholder="请输入..."
                    aria-describedby="button-addon2" />
                <button 
                    onClick={this.addHandle}
                    className="btn btn-outline-secondary"
                    type="button" 
                    id="button-addon2">添加</button>
            </div>
        )
    }
}
