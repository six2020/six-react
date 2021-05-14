import './App.css';


function MyComponent({children}) {

    // console.log(`vvv ====>>>>`, vvv);
    

    return (
        <div>
           MyComponent 组件

           {children}
        </div>
    )
}


function ChildA(){
    return (
        <h2>我是 ChildA 组件</h2>
    )
}


function App() {
    return (
        <div className="App">
            <MyComponent>
                <ChildA />
            </MyComponent>
        </div>
    );
}

export default App;
