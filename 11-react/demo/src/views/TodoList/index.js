import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import TodoInfo from './TodoInfo'

export default class TodoList extends Component {

    constructor(){
        super()

        this.state = {
            todolist: [
                {id: 0, todo: 'todo1', done: false},
                {id: 1, todo: 'todo22222', done: false},
                {id: 2, todo: 'todo33', done: false},
                {id: 3, todo: 'todo444', done: true},
                {id: 4, todo: 'todo5', done: true},
            ]
        }
    }

    // 添加 todo
    addTodoFromChild = (todo)=>{

        let newTodoList = [todo, ...this.state.todolist]
        // console.log(`父组件接收到的 todo====>>>>`, todo);

        this.setState({
            todolist: newTodoList
        })
    }

    // 切换 todo 的状态
    switchTodoDoneFromChild = (id, done)=>{
        // console.log(` id====>>>>`, id);
        // console.log(` done====>>>>`, done);

        let newTodoList = this.state.todolist.map(item => {
            if(id === item.id){
                return {...item, done}
            }

            return item
        })

        this.setState({
            todolist: newTodoList
        })
        
    }

    render() {
        return (
            <div>
                {/* add Todo */}
                <AddTodo add={this.addTodoFromChild} />

                {/* todo 列表 */}
                <TodoItem 
                    todolist={this.state.todolist}
                    switchTodoDoneFromChild={this.switchTodoDoneFromChild} />

                {/* list info */}
                <TodoInfo />

            </div>
        )
    }
}

