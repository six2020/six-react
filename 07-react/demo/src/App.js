import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './App.css';


// JSX
/**
 *  JavaScript and XML 可拓展的标记语言
 * 
 * 
 * 
*/

// ------------------------------------------

// 类组件 CC

class MyComponent extends React.Component{

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }

  static defaultProps = {
    name: 'sixsixsixsixx'
  }

  render(){
    console.log(`this ====>>>>`, this);

    let {name, age} = this.props;
    
    
    return (
      <>
        <p>hello world！！</p>
        <p>name: {name}</p>
        <p>age: {age}</p>
      </>
    )
  }
}

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// }

// MyComponent.defaultProps = {
//   name: 'sixsixsix'
// }

// ------------------------------------------

// 函数组件 MyFc
function MyFc(props){
  // console.log(`props ====>>>>`, props);
  
  return (
    <div>
      函数组件

      <ul>
        <li>
          name: {props.name}
        </li>
        <li>
          age: {props.age + 1 }
        </li>
      </ul>
    </div>
  )
}

MyFc.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

// ------------------------------------------

let divstyle = {
  color: 'red', 
  fontSize: '50px'
}


let prop = {
  // name: 'sixxxxxxxxxxxx',
  age: 16,
  bb: 'b',
  cc: 'c'
}

// 函数组件 FC
function App() {

  let name = 'sieyes'

  return (


    <>
      <div className="App" title='lalalal' tabIndex='1' >
        hello world
        <div style={divstyle}>div</div>
      </div>

      <p>1111111 {name} </p>

      <hr />

      {/* 这是类组件 */}
      <MyComponent  {...prop} />

      <hr />

      <MyFc name='sieyes' age={12} aa='abc' />
    </>
  );
}

export default App;
