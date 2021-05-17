import {useContext} from 'react'
import {Context, ContextProvider} from './ContextProvider'


function MyComponent2(){

  let {count, add, reduce} = useContext(Context)
  
  return  (
    <div>

        <hr />
      <h2>{count}</h2>

      <button onClick={()=>{add()}}>add</button>
      <button onClick={()=>{reduce()}}>reduce</button>
    </div>
  )
}

let r = ()=>{
    return (
        <ContextProvider>
            <MyComponent2 />
        </ContextProvider>
    )
}

export default r

