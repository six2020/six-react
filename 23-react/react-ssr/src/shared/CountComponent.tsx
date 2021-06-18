import React, { useState } from 'react'

const CountComponent = () => {

    let [count, setCount] = useState(0)

    let addHandle = () => {
        setCount(++count)
    }

    return (
        <div>
            <h2>hello world</h2>
            <div>{count}</div>
            <button onClick={addHandle}>add</button>
        </div>
    )
}

export default CountComponent