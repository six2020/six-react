/**
 * 
 * createContext 可以创建多个
 * 
*/

import {createContext, useState} from 'react'

export let Context2 = createContext()

export function ContextProvider2({children}){

    let [user] = useState({name: 'sieyes', age: 12})



    return (
      <Context2.Provider value={user}>
        {children}
      </Context2.Provider>
    )
  }
  