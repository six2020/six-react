import {Component} from 'react'

/**
 * 
 * 父组件状态改变，后代组件也会重新渲染，即使后代组件是纯组件
 * 
 * 利用 shouldComponentUpdate 生命周期钩子来优化
 * 
*/

class Mycomponent extends Component{
    
    state = {
        count: 0
    }

    render(){
        console.log(` ====>>>>`, 'Mycomponent  render');
        

        return (
            <div>
                <h2>count: {this.state.count}</h2>

                <button onClick={()=>{this.setState({count: this.state.count + 1})}}>add</button>

                <Child name='sieyes'/>
            </div>
        )
    }
}

class Child extends Component{

    shouldComponentUpdate(nextProps){
        if(nextProps.name === this.props.name) return false
        return true
    }

    render(){
        console.log(` ====>>>>`, 'Child  render');
        return (
            <h2>子组件</h2>
        )
    }
}


function App() {
    return (
        <div className="App">
            <Mycomponent />
        </div>
    );
}

export default App;