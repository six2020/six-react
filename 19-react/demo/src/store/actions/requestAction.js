import {REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAIL} from '../constants'

export let request = () => {
    // 异步 action，执行的回调，会传递 dispatch
    return (dispatch)=>{

        // 请求前， isLoading --> true
        dispatch({ type: REQUEST_BEGIN, isLoading: true })

        fetch('http://localhost:8080/user')
        .then(res => res.json())
        .then(res => {
            // 请求成功
            dispatch({ type: REQUEST_SUCCESS, name: res.name })
        }).catch(err => {
            // 错误捕获， 请求失败
            dispatch({ type: REQUEST_FAIL, err: [1, err.message] })
        })
    }
}