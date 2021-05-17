import { useContext } from 'react'
import { Context, ContextProvider } from './ContextProvider'
import { Context2, ContextProvider2 } from './ContextProvider2'


function MyComponent() {

  let { count, add, reduce } = useContext(Context)
  let { name, age } = useContext(Context2)

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => { add() }}>add</button>
      <button onClick={() => { reduce() }}>reduce</button>

      <h4>{name} -- {age}</h4>
    </div>
  )
}

let r = () => {
  return (
    <ContextProvider2>
      <ContextProvider>
        <MyComponent />
      </ContextProvider>
    </ContextProvider2>

  )
}

export default r

