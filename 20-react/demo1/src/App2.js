import { useEffect, useRef } from 'react'
/**
 * 
 * useRef
 * 
 * 
 * 
*/

/**
 * 
 * 父组件
 * 
*/
function Mycomponent() {

    let inputRef = useRef()

    // useEffect((  ) => {
    //     // console.log(`inputRef.current ====>>>>`, inputRef.current);

    //     // setTimeout((  ) => {
    //         inputRef.current.focus()
    //     // }, 2000)

    // }, [])

    let focusHandle = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <p>
                <input style={{ outlineColor: 'blue' }} type="text" defaultValue='hello' ref={inputRef} />
            </p>

            <Child onClick={focusHandle} />
        </div>
    )
}


/**
 * 
 * 子组件
 * 
*/

function Child(props){
    return (
        <div>
            <h2>子组件</h2>
            <button onClick={props.onClick}>让父组件获得焦点</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Mycomponent />
        </div>
    );
}

export default App;