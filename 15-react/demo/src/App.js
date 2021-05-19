import {useState, useEffect} from 'react'

function Com1(){

  let [num, setNum] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setNum(++num)
    }, 2000)
  }, [])

  return (
    <h2>Comi组件： {num}</h2>
  )
}

function Com2(){

  let [num, setNum] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setNum(++num)
    }, 2000)
  }, [])

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
