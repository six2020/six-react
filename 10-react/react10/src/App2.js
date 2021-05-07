/**
 * 
 * 生命周期
 * 
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './App.css';


class MyComponent extends Component{

    constructor(props){
        super(props)
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

    /**
     *  即将被废弃  UNSAFE_componentWillMount
     * 
     * */ 
    UNSAFE_componentWillMount(){

        // console.log(`this.state.val ====>>>>`, this.state.val);
        
        console.log(`2 ====>>>>`, 'componentWillMount');
    }

    /**
     *  常用
     *  只会执行一次
     *  可以获取到真是 DOM
     *  向服务器发起请求
     *  第三方库的初始化
     *  
     *  注意
     *      只能在浏览器端调用，不能用于服务器端，因为服务器端是不可能产生 DOM 树
     * 
     *  
     * 
     * */ 
    componentDidMount(){
        console.log(`4 ====>>>>`, 'componentDidMount');
    }

    // ==========================================================
    // 更新阶段

    /**
     *  即将被废弃  
     *      UNSAFE_componentWillReceiveProps
     *      UNSAFE_componentWillUpdate
     *      
     * 
     * */ 


    UNSAFE_componentWillReceiveProps(){
        console.log(`更新阶段 ====>>>>`, 'componentWillReceiveProps');
        
    }

    shouldComponentUpdate(nextProps, nextState){

            // 在生命周期里面使用 setState 一定要注意
        // this.setState({
        //     count: this.state.count * Math.random()
        // })


        // console.log(`nextProps ====>>>>`, nextProps);
        // console.log(`this.props ====>>>>`, this.props);
        // console.log(`nextState ====>>>>`, nextState);
        // console.log(`this.state ====>>>>`, this.state);
        

        console.log(`更新阶段 ====>>>>`, 'shouldComponentUpdate');

        if(nextState.count !== this.state.count || nextProps.p !== this.props.p){
            return true
        }else{
            return false
        }
    }

    UNSAFE_componentWillUpdate(){
        console.log(`更新阶段 ====>>>>`, 'componentWillUpdate');
    }

    /**
     * 组件更新完毕，决定是否重新发送网络请求
     * 操作 DOM
     * 不能随意使用 setState 
     * 
     * 
     * */ 
    componentDidUpdate(prevProps, prevState){

        // console.log(`prevProps ====>>>>`, prevProps);
        // console.log(`this.props ====>>>>`, this.props);
        // console.log(`prevState ====>>>>`, prevState);
        // console.log(`this.state ====>>>>`, this.state);

        console.log(`更新阶段 ====>>>>`, 'componentDidUpdate');
    }


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

                <button onClick={this.forceHandle}>强制更新</button>

                {/* <ChildCompoent num={this.state.count} /> */}
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

    forceHandle = ()=>{
        this.forceUpdate()
    }

}

// 子组件
// class ChildCompoent extends Component{

//     componentWillReceiveProps(nextProps){

//         console.log(`     nextProps ====>>>>`, nextProps);
        
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
//             <h5>子组件接收到的值 {this.props.num}</h5>
//         )
//     }

// }


function App() {
    return (
        <div className="App">
            <MyComponent p={666} />
        </div>
    );
}

export default App;