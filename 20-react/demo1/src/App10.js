import { useState, memo, useMemo, useCallback } from 'react'

/**
 * 
 * 父组件状态改变，后代组件也会重新渲染，即使后代组件是纯组件
 * 
 * 函数组件
 * 
 * useMemo  
 *  回调 ，回调里面返回的值，就是 useMemo 返回的值
 *  依赖项
 * 
 * 
 * useMemo useCallback 记忆函数
 * 
*/


function Mycomponent() {
    console.log(` ====>>>>`, 'Mycomponent  render');

    let [count, setCount] = useState(0);

    // let eventHandle = ()=>{console.log(666)};

    // useMemo
    // let eventHandle = useMemo(() => {
    //     return () => { console.log(666) }
    // }, []);

    /**
     * 
     * useCallback(fn, []) ==> useMemo(()=>fn)
     * 
    */

    let eventHandle = useCallback(()=>{
        console.log(666)
    }, [])

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() => { setCount(++count) }}>add</button>
            <Child fangfa={eventHandle} name='sieyes' />
        </div>
    )
}




let Child = memo((props) => {
    console.log(` ====>>>>`, 'Child  render');
    
    return (
        <>
            <h2>子组件</h2>

            <button onClick={props.fangfa}>调用父组件的方法</button>
        </>
    )
})

// no memo
// let Child = () => {
//     console.log(` ====>>>>`, 'Child  render');
//     return (
//         <h2>子组件</h2>
//     )
// }


function App() {
    return (
        <div className="App">
            <Mycomponent />
        </div>
    );
}

export default App;