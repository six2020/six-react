import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import React from 'react'
import axios from 'axios'

interface IProps {
    data: string;
    dispatch: Dispatch
}

class Home extends React.Component<IProps> {

    // state = {
    //     data: ''
    // }

    static getSomeData = (store) => {
        return new Promise(resolve => {
            axios('http://localhost:8080/getdata').then(res => {
                console.log('fetch~~~~')
                store.dispatch({
                    type: 'CHANGE_STATE',
                    payload: {
                        data: res.data.data
                    }
                })
                resolve(res.data.data)
            })
        })
    }

    componentDidMount() {

        if (!this.props.data) {
            axios('http://localhost:8080/getdata').then(res => {
                console.log('fetch~~~~')
                // this.setState({data: res.data.data})

                this.props.dispatch({
                    type: 'CHANGE_STATE',
                    payload: {
                        data: res.data.data
                    }
                })
            })
        }


    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
