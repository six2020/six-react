import React, { Component } from 'react'
import Item from './Item'

export default class TodoItem extends Component {
    render() {

        
        return (
            <div>
                <ul className="list-group">
                    {
                        
                        this.props.todolist.map(item=>{
                            return (<Item 
                                key={item.id} {...item}
                                switchTodoDoneFromChild={this.props.switchTodoDoneFromChild}  />)
                        })
                    }
                </ul>
            </div>
        )
    }
}
