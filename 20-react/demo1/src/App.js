
import './App.css';
import { useReducer } from 'react'

/**
 * 
 * useReducer 
 * 
 *  可以接收三个参数
 *    reducer
 *    state
 *    初始化状态的方法
 * 
 *  返回 
 *    state
 *    配套 dispatch
 * 
 * redux
 * 
 * useState 的替代方案
 * 
 * 
 * 注意：评估好场景，
 * 
*/

// reducer
let reducer = (state, action)=>{
  switch(action.type){
    case 'add':
      return {...state, count: state.count + action.value}
    case 'jian':
      return {...state, count: state.count - action.value}
    default:
      return state
  }
}

// state
let defaultState = {
  count: 0,
  name: 'sieyes'
};


let initialState = state => {
    return {...state, name: 'sieyes!!!'}
}



function Mycomponent() {
  
  let [state, dispatch] = useReducer(reducer, defaultState, initialState)

  let addHandle = (  ) => {
    dispatch({type: 'add', value: 100})
  }

  let jianHandle = (  ) => {
    dispatch({type: 'jian', value: 10})
  }

  return (
    <div>
      <h2>count: {state.count}</h2>
      <h2>name: {state.name}</h2>

      <button onClick={addHandle}>add</button>
      <button onClick={jianHandle}>jian</button>
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
