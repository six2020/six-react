import {createContext, useContext} from 'react'

let Context = createContext()



// function ContextProvider({children}){

//   return (
//     <Context.Provider>

//     </Context.Provider>
//   )
// }

function Child(){

  let {name} = useContext(Context)
  
  return  (
    <div>
      <h2>{name}</h2>
    </div>
  )
}


function App() {
  return (
    <div className="App">

      <Context.Provider value={{name: 'sieyes'}}>
        <Child />
      </Context.Provider>

    </div>
  );
}

export default App;
