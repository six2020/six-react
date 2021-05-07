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
        this.state = {
            count: 0
        }
        console.log(`1 ====>>>>`, 'constructor');
        
    }

    // ==========================================================
    // 挂载阶段


    static getDerivedStateFromProps(props, state){
        console.log(`2 ====>>>>`, 'getDerivedStateFromProps');

        // console.log(`props ====>>>>`, props);
        // console.log(`state ====>>>>`, state);
        
        
        return null
    }


    componentDidMount(){
        console.log(`4 ====>>>>`, 'componentDidMount');
    }

    // ==========================================================
    // 更新阶段


    
    

    shouldComponentUpdate(nextProps, nextState){


        console.log(`更新阶段 ====>>>>`, 'shouldComponentUpdate');

        if(nextState.count !== this.state.count || nextProps.p !== this.props.p){
            return true
        }else{
            return false
        }
    }



    getSnapshotBeforeUpdate(){
        console.log(`更新阶段 ====>>>>`, 'getSnapshotBeforeUpdate');

        return '123456789'
    }


    
    componentDidUpdate(prevProps, prevState, SnapshotValue){

        // console.log(`prevProps ====>>>>`, prevProps);
        // console.log(`this.props ====>>>>`, this.props);
        // console.log(`prevState ====>>>>`, prevState);
        // console.log(`this.state ====>>>>`, this.state);

        console.log(`更新阶段 ====>>>>`, 'componentDidUpdate');

        console.log(`SnapshotValue ====>>>>`, SnapshotValue);
        
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


function App() {
    return (
        <div className="App">
            <MyComponent p={666} />
        </div>
    );
}

export default App;