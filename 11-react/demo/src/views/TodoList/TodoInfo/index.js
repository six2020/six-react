import React, { Component } from 'react'

export default class TodoInfo extends Component {

    checkedAllHandle=(e)=>{
        this.props.checkdeAllFromChild(e.target.checked)
    }

    deleteDoneHandle=()=>{
        this.props.deleteDoneTodoFromChild()
    }

    render() {

        let {doneCount, total} = this.props

        return (
            <div className="form-check">
                <input
                    checked={doneCount === total && total !== 0}
                    onChange={this.checkedAllHandle}
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault" />
                完成 {this.props.doneCount} / 共 {this.props.total}
                <button onClick={this.deleteDoneHandle} type="button" className="btn btn-danger btn-sm" style={{ float: 'right' }}>删除已完成 todo</button>
            </div>
        )
    }
}
