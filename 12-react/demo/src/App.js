import React, {useState} from 'react'
import './App.css';



function MyComponent(){

  console.log(`666 ====>>>>`, 666);
  

  let [obj, setCount] = useState({a: 1})

  function add(){
    // 更新的状态会覆盖之前的状态，若想保留之前的状态，在更新的时候也要设置
    setCount({b: 2, a: 1})
  }

  return (
    <div>
      <h2>obj.a:  {obj.a}</h2>
      <h2>obj.b:  {obj.b}</h2>
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
