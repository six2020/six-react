import React from "react";
import './App.css';


// 受控组件 和 非受控组件
/**
 * 针对于表单而言
 * 
 * 受控组件
 *  依赖状态：将值实时映射到状态 state
 *  必须使用 onChange
 *  实现双向绑定
 *  优点
 *      符合react的数据流
 *      修改使用方便
 *      便于数据处理
 * 
 *  value
 * 
 * 非受控组件
 *  - 不受控制， ref 获取 DOM 操作DOM
 * 
 * defaultvalue
 * 
 * */ 


class MyComponent extends React.Component{

  constructor(){
    super()
    console.log(`this ====>>>>`, this);

    this.state = {
      val: 'world!!!'
    }
  }

  inputHandle = (e)=>{
    // console.log(`e.target.value ====>>>>`, e.target.value);

    this.setState({
        val: e.target.value
    })
  }

  render(){

    return (
      <>
        <input onChange={this.inputHandle} type='text' value= {this.state.val}/>

        <input type='text' defaultValue='默认值' />

        <textarea defaultValue='454654654654646'></textarea>

        <div>hello {this.state.val}</div>
      </>
    )
  }
}








function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
