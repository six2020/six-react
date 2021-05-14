import './App.css';
import React from 'react'

/**
 *  Context  爷孙组件进行传值
 * 
 * 
 * 
 *  */



class MyComponent extends React.Component {
    state = {
        name: 'sieyes'
    }


    render() {
        return (
            <div>
                <h2>name: {this.state.name}</h2>
                <ChildA name={this.state.name} />
            </div>
        )
    }
}

class ChildA extends React.Component {
    render() {
        return (
            <div>
                <h2>ChildA</h2>

                <ChildB name={this.props.name} />
            </div>
        )
    }
}

class ChildB extends React.Component {
    render() {
        return (
            <div>
                <h2>ChildB接收到的值 {this.props.name}</h2>
            </div>
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
