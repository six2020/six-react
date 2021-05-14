
import './App.css';

import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


function MyComponent(){

    // useState 可以传入一个函数作为参数，return 的值就是初始值
    // useState 方法的参数作为初始化状态，只有在第一次渲染的时候才会执行，之后组件获取到的状态来自闭包中的缓存值
    // let [count, setCount] = useState(()=>{
    //   let a = 1 + 2 * 3;
    //   return a
    // });

    // 定时器 id
    let time = null;

    let [count, setCount] = useState(10);
    let [count2, setCount2] = useState(100);

    let [name, setName] = useState('sieyes')

    // 修改状态的方法，可以传入一个函数作为参数
    // function add(){
    //   setCount( val =>{
    //     return ++val
    //   })
    // }

    function add(){
      setCount(++count)
    }

    useEffect(()=>{
      return ()=>{
        console.log(`666666666666 ====>>>>`, 666666666666);
        console.log(`count ====>>>>`, count);
        
      }
    }, [count])


    // useEffect
    /** 
     *  组件挂载完成执行： componentDidMount
     *  组件状态更新的执行： componentDidUpdate
     * 
     * */ 
    useEffect(()=>{
      setTimeout(()=>{
        setCount(++count)
      }, 500)

    }, [name])

      /**
       *  如何在 useEffect 里面把副作用操作清除
       * 第一个参数 --> 函数 --> 返回一个函数， 这个函数用于清楚副作用的操作
       * 
       * 返回出来的函数执行时机
       *   - 在组件卸载之前 ：componentWillUnmount
       *   - 状态更新，下一次 useEffect 执行之前调用
       * 
       * 返回的函数不是必须的，如果没有要清除的副作用代码，可以不返回
       * 
       *  */ 
    useEffect(()=>{
      time = setInterval(()=>{
        setCount2(val=>val+2)
      }, 1000)

      return ()=>{
        clearInterval(time)
      }

    }, [])




    function again(){
      setFlag(!flag)
    }

    let [flag, setFlag] = useState(true)

    useEffect(()=>{
      setCount(++count)
    }, [flag])

    
    return (
      <div>
        <h2>count: {count}</h2>
        <h2>name: {name}</h2>
        <h2>count2: {count2}</h2>

        <button onClick={add}>add +1</button>
        <button onClick={again}>重新发起请求</button>
        <button onClick={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('root'))}}>卸载组件</button>
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
