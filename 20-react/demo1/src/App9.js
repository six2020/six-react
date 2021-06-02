import { useState, memo} from 'react'

/**
 * 
 * 父组件状态改变，后代组件也会重新渲染，即使后代组件是纯组件
 * 
 * 函数组件
 * 
*/


function Mycomponent(){
    console.log(` ====>>>>`, 'Mycomponent  render');

    let [count, setCount] = useState(0)

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() => { setCount(++count) }}>add</button>
            <Child  name='sieyes' />
        </div>
    )
}




let Child = memo(() => {
    console.log(` ====>>>>`, 'Child  render');
    return (
        <h2>子组件</h2>
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