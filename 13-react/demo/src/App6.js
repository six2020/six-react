import './App.css';


function MyComponent(vvv) {

    console.log(`vvv ====>>>>`, vvv);
    

    return (
        <div>
           MyComponent 组件 {vvv.children.name} -- {vvv.children.age}
        </div>
    )
}




function App() {
    return (
        <div className="App">
            <MyComponent age={12}>{{name: 'sieyes', age: 1000}}</MyComponent>
        </div>
    );
}

export default App;
