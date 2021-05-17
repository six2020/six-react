import {useConut, ContextProvider3} from './components/ContextProvider3'

function MyComponent(){

    let {state, add, reduce} = useConut();

    return (
        <div>
            <h4>MyComponent1 组件</h4>
            <h2>{state}</h2>

            <button onClick={()=>{add(1)}}>add</button>
            <button onClick={()=>{reduce(2)}}>reduce</button>
        </div>
        
    )
}

function MyComponent2(){
    let {state, add, reduce} = useConut();

    return (
        <div>
             <hr />
            <h4>MyComponent2 组件</h4>
            <h2>{state}</h2>

            <button onClick={()=>{add(1)}}>add</button>
            <button onClick={()=>{reduce(2)}}>reduce</button>

            <Child />
        </div>
        
    )
}

function Child(){
    let {state} = useConut();

    return (
        <div>
            <h2>child 组件</h2>

            <h4>{state}</h4>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <ContextProvider3>
            <MyComponent />
            <MyComponent2 />
        </ContextProvider3>
        
    </div>
  );
}

export default App;
