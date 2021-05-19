import useNum from './hook/useNum'

// 组件 1
function Com1() {

    let num = useNum(10)

    return (
        <h2>Comi组件： {num}</h2>
    )
}


// 组件 2
function Com2() {

    let num = useNum(20)

    return (
        <h2>Com2组件： {num}</h2>
    )
}


function App() {
    return (
        <div className="App">
            <Com1 />
            <Com2 />
        </div>
    );
}

export default App;
