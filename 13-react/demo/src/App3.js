import './App.css';
import React, {createContext} from 'react'

/**
 *  Context  爷孙组件进行传值
 *  
 *  1、
 * 
 *  创建 context 对象
 *      let MyContext = createContext()
 * 
 * 2、
 *  
 *  <MyContext.Provider value={{name: this.state.name, age: 12}}>
        <ChildA/>
    </MyContext.Provider>

    3、
    
    ChildB.contextType = MyContext;


 *  4、

        {this.context}
 * 
 * 
 *  */


let MyContext = createContext()


class MyComponent extends React.Component {
    state = {
        name: 'sieyes'
    }


    render() {
        return (
            <div>
                <h2>name: {this.state.name}</h2>

                <MyContext.Provider value={{name: this.state.name, age: 18}}>

                    <ChildA/>

                </MyContext.Provider>

                
            </div>
        )
    }
}


class ChildA extends React.Component {
    render() {
        return (
            <div>
                <h2>ChildA</h2>
                <ChildB/>
            </div>
        )
    }
}

class ChildB extends React.Component {

    static contextType = MyContext

    render() {

        console.log(`this ====>>>>`, this);
        

        return (
            <div>
                <h2>ChildB接收到的值 {this.context.name} -- {this.context.age} </h2>
            </div>
        )
    }
}

// ChildB.contextType = MyContext;






function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    );
}

export default App;
