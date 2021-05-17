import {useConut, useConutDisplay, ContextProvider4} from './components/ContextProvider4'

// 展示状态
function Display(){
    let state = useConutDisplay()

    return (
        <div>
            <h2>展示组件</h2>
            <h4>{state}</h4>
        </div>
        
    )
}

// 更新状态
function MyComponent(){
    let {add, reduce} = useConut()

    return (
        <div>
            <hr />
            <h2>更新状态</h2>

            <button onClick={()=>{add(10)}}>add</button>
            <button onClick={()=>{reduce(1)}}>reduce</button>
        </div>
        
    )
}

function App() {
    return (
      <div className="App">
          <ContextProvider4>
              <Display />
              <MyComponent />
          </ContextProvider4>
          
      </div>
    );
  }
  
  export default App;