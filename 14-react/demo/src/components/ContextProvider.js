/**
 * 
 * 组件间状态共享
 * 
*/

import {createContext, useState} from 'react'

export let Context = createContext()

export function ContextProvider({children}){

    let [count, setCount] = useState(10)

    let setObj = {
      count,
      add(){
        setCount(++count)
      },
      reduce(){
        setCount(--count)
      }
    }


    return (
      <Context.Provider value={setObj}>
        {children}
      </Context.Provider>
    )
  }
  