import React, { Component } from 'react'

export default class TodoInfo extends Component {
    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                    </label>
                <button type="button" className="btn btn-danger btn-sm" style={{ float: 'right' }}>删除已完成 todo</button>
            </div>
        )
    }
}
