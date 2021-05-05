/**
 * 
 * 事件传参
 * 
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './App.css';


class MyComponent extends Component{

    constructor(){
        super()
        // this.state = {
        //     val: '666'
        // }
        this.state = {
            count: 0
        }
        console.log(`1 ====>>>>`, 'constructor');
        
    }

    // ==========================================================
    // 挂载阶段

    UNSAFE_componentWillMount(){

        // console.log(`this.state.val ====>>>>`, this.state.val);
        
        console.log(`2 ====>>>>`, 'componentWillMount');
    }

    componentDidMount(){
        console.log(`4 ====>>>>`, 'componentDidMount');
    }

    // ==========================================================
    // 更新阶段
    // componentWillReceiveProps(){
    //     console.log(`更新阶段 ====>>>>`, 'componentWillReceiveProps');
        
    // }
    // shouldComponentUpdate(){
    //     console.log(`更新阶段 ====>>>>`, 'shouldComponentUpdate');

    //     return true
    // }

    // componentWillUpdate(){
    //     console.log(`更新阶段 ====>>>>`, 'componentWillUpdate');
    // }

    // componentDidUpdate(){
    //     console.log(`更新阶段 ====>>>>`, 'componentDidUpdate');
    // }


    // ==========================================================
    // 卸载阶段

    componentWillUnmount(){
        console.log(`卸载阶段 ====>>>>`, '组件卸载了');
    }



    render(){

        console.log(`3 ====>>>>`, 'render');

        return (
            <>
                <div>生命周期</div>
                <h4>add: {this.state.count}</h4>
                <button onClick={this.addHandle}>add</button>

                <button onClick={this.unmountHandle}>卸载组件</button>

                {/* <ChildCompoent /> */}
            </>
        )
    }

    addHandle = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    unmountHandle = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

}

// 子组件
// class ChildCompoent extends Component{

//     componentWillReceiveProps(){
//         console.log(`子组件更新阶段 ====>>>>`, 'componentWillReceiveProps');
        
//     }
//     shouldComponentUpdate(){
//         console.log(`子组件更新阶段 ====>>>>`, 'shouldComponentUpdate');

//         return true
//     }

//     componentWillUpdate(){
//         console.log(`子组件更新阶段 ====>>>>`, 'componentWillUpdate');
//     }

//     componentDidUpdate(){
//         console.log(`子组件更新阶段 ====>>>>`, 'componentDidUpdate');
//     }

//     render(){
//         console.log(`子组件更新阶段 ====>>>>`, 'render');
//         return (
//             <h5>子组件</h5>
//         )
//     }

// }


function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    );
}

export default App;