export let add = () => {
    return { type: 'add', value: 10 }
}
export let jian = () => {
    return { type: 'jian' }
}

export let request = () => {

    // 异步 action，执行的回调，会传递 dispatch
    return (dispatch)=>{
        fetch('http://localhost:8080/user')
        .then(res => res.json())
        .then(res => {
            dispatch({ type: 'request', name: res.name })
        })
    }
}