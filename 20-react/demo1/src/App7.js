import {Component, PureComponent} from 'react'

/**
 * 
 * 父组件状态改变，后代组件也会重新渲染，即使后代组件是纯组件
 * 
 * 利用 PureComponent 组件
 * 
 *  会加上 shouldComponentUpdate
 * 
*/

class Mycomponent extends Component{
    state = {
        count: 0
    }

    eventHandle = ()=>{console.log(666)}

    render(){
        console.log(` ====>>>>`, 'Mycomponent  render');
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={()=>{this.setState({count: this.state.count + 1})}}>add</button>

                {/* 
                    直接通过句柄传递方法，父组件的状态更新还是会引起子组件的重新渲染
                */}
                {/* <Child method={()=>{console.log(666)}} name='sieyes'/> */}

                {/* 
                    可以将这个方法提出来，就能避免子组件重新渲染
                */}
                <Child method={this.eventHandle} name='sieyes'/>
            </div>
        )
    }
}

class Child extends PureComponent{
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