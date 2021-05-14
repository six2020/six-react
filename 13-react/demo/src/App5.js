import './App.css';
import React, { createContext, useState } from 'react'

let MyContext = createContext()

// class MyComponent extends React.Component {
//     state = {
//         name: 'sieyes'
//     }


//     render() {
//         return (
//             <div>
//                 <h2>name: {this.state.name}</h2>

//                 <MyContext.Provider value={{name: this.state.name, age: 20}}>

//                     <ChildA/>

//                 </MyContext.Provider>


//             </div>
//         )
//     }
// }

function MyComponent() {
    let [state] = useState({ name: 'sieyes!!' });

    return (
        <div>
            <h2>name: {state.name}</h2>
            <MyContext.Provider value={{ name: state.name, age: 12 }}>
                <ChildA />
            </MyContext.Provider>
        </div>
    )
}


// class ChildA extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>ChildA</h2>
//                 <ChildB/>
//             </div>
//         )
//     }
// }

function ChildA() {
    return (
        <div>
            <h2>ChildA</h2>
            <ChildB />
        </div>
    )
}



function ChildB() {

    return (
        <div>
            <MyContext.Consumer>
                {value => <h2>ChildB接收到的值 {value.name}  -- {value.age}  </h2>}
            </MyContext.Consumer>
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    );
}

export default App;
