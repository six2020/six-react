/**
 * 
 * 祖传案例
 * 
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './App.css';

class MyComponent extends Component{

    constructor(){
        super()

        this.state = {
            val: '我是大帅批~！！'
        }
    }

    componentDidMount(){

        this.time = setInterval(()=>{

            let start = this.state.val.substring(0, 1);
            let end = this.state.val.substring(1);

            this.setState({
                val: end + start
            })
        }, 400)

    }

    componentWillUnmount(){
        clearInterval(this.time); 
    }

    render(){
        return (
            <>
                <h2>{this.state.val}</h2>

                <button onClick={this.actionHandle}>action</button>
                <button onClick={this.stopHande}>stop</button>
                <button onClick={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('root'))}}>卸载组件</button>
            </>
        )
    }

    actionHandle = () => {

        clearInterval(this.time)

        this.time = setInterval(()=>{

            let start = this.state.val.substring(0, 1);
            let end = this.state.val.substring(1);

            this.setState({
                val: end + start
            })
        }, 400)
    }

    stopHande = () => {
        clearInterval(this.time)
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