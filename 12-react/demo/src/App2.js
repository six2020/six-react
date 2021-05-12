import React, { useState, useEffect } from 'react'
import './App.css';



function MyComponent() {

    //   console.log(`666 ====>>>>`, 666);


    let [count, setCount] = useState(0)

    function add() {
        setCount()
    }

    /**
     *  dom 渲染完毕，副作用代码执行， useEffect
     * 执行的过程中修改了 状态
     * state 改变，状态改变就会重新渲染
     * 无限循环
     * 
     * */ 
    useEffect(() => {
        //   console.log(`'useEffect' ====>>>>`, 'useEffect');
        setTimeout(() => {
            setCount(++count)
        }, 1000)

    }, [])

    return (
        <div>
            <h2>count:  {count}</h2>
            <button onClick={add}>add +1</button>
        </div>
    )
}














function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    );
}

export default App;
