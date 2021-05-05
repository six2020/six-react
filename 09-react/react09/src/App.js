import React from 'react'
import './App.css';



class MyComponent extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   htmlValue: '<h2>hello!!!</h2>'
    // }
  }

  state = {
    htmlValue: '<h2>hello!!!!!!</h2>'
  }

  render(){
    return (
      // <div>
      //   {this.state.htmlValue}
      // </div>
      <div dangerouslySetInnerHTML={{__html: this.state.htmlValue}}></div>
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
