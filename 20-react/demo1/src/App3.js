import {  useRef, forwardRef, useImperativeHandle } from 'react'
/**
 * 
 * useRef
 * 
 * 
 * 
*/

/**
 * 
 * 子组件
 * 
*/

let Child = forwardRef((props, ref)=>{

    // console.log(`props ====>>>>`, props);

    let childRef = useRef()

    useImperativeHandle(ref, ()=>{
        return {
            method(){
                childRef.current.focus()
                
            }
        }
    })
    
    return (
        <div>
            <h2>子组件</h2>
            <input style={{ outlineColor: 'blue' }} type="text" defaultValue='hello' ref={childRef} />
        </div>
    )
})




/**
 * 
 * 父组件
 * 
*/
function Mycomponent() {

    let inputRef = useRef()

    let eventHandle = () => {

        // console.log(`inputRef ====>>>>`, inputRef);
        
        inputRef.current.method()
    }



    return (
        <div>
            <p>
                <button onClick={eventHandle}>让子组件获得焦点</button>
            </p>

            <Child ref={inputRef} />
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