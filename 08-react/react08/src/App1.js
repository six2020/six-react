import React from "react";
import './App.css';



class MyComponent extends React.Component{

  constructor(){
    super()
    console.log(`this ====>>>>`, this);

    this.state = {
      val: 'world!!!',
      age: 12,
      flag: true
    }

    // this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle = ()=>{

    // this.state.flag = !this.state.flag;
    // console.log(`this ====>>>>`, this);

    this.setState({
      flag: !this.state.flag
    })
    // this.setState(state => ({
    //   flag: !state.flag
    // }))
    
    
  }

  inputHandle = ()=>{
    // console.log(`this.iptRef.current.value ====>>>>`, this.iptRef.current.value);

    let val = this.iptRef.current.value;

    this.setState({
      val
    })
    
    this.iptRef.current.value = ''
  }

  iptRef = React.createRef()

  render(){

    return (
      <>
        <input ref={this.iptRef} type='text'/>
        {/* <div>hello {this.state.flag ? 'world' : 'react'}</div> */}
        <div>hello {this.state.val}</div>
        <button onClick={ this.inputHandle }>点击</button>
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
