/**
 * 
 * 事件传参
 * 
*/

import React from 'react'
import './App.css';



class MyComponent extends React.Component {

    eventHandle(a, b, c, d) {
        console.log(`this ====>>>>`, this);

        console.log(`a ====>>>>`, a);
        console.log(`b ====>>>>`, b);
        console.log(`c ====>>>>`, c);
        console.log(`d ====>>>>`, d);
    }


    eventHandle2(a, b, c, d) {

        console.log(`a ====>>>>`, a);
        console.log(`b ====>>>>`, b);
        console.log(`c ====>>>>`, c);
        console.log(`d ====>>>>`, d);
    }

    eventHandle3(a, b, c) {

        return (e)=>{
            console.log(`this ====>>>>`, this);
            
            console.log(`e ====>>>>`, e);
            
            console.log(`a ====>>>>`, a);
            console.log(`b ====>>>>`, b);
            console.log(`c ====>>>>`, c);
        }
    }

    handle = ()=>{
        console.log(` ====>>>>`, '被点击了');
        
    }

    render() {
        return (
            <div>

            {/* 
                通过 bind 形式进行传参， event 对象在最后一位

                缺点：参数过多之后产生混淆
            */}
                <button onClick={this.eventHandle.bind(this, 666, 888, 999)}>事件传参1</button>


            {/* 
                通过 箭头函数的形式进行传参

                我可以约定第一个参数为 event 对象
            */}
                <button onClick={(e) => { this.eventHandle2(e, 666, 888, 999) }}>事件传参2</button>



                <button onClick={ this.eventHandle3(666, 888, 999) }>事件传参3</button>
                                {/* ==> undefined */}


                {/* ----------------------事件处理函数--------------------------- */}
                <button onClick={ this.handle }>事件传参4</button>
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
