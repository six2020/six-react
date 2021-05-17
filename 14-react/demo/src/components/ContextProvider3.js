/**
 * 
 * 组件间状态共享 与 同步
 * 
*/

import {createContext, useContext, useState} from 'react'

let Context = createContext()


export function useConut(){
    let myConut = useContext(Context)

    return myConut
}

export function ContextProvider3({children}){

    // let stateHook = useState(666)

    let [state, setState] = useState(666)
    let setObj = {
        state,
        add(v){
            setState(state + v)
        },
        reduce(v){
            setState(state - v)
        }
    }

    return (
        <Context.Provider value={setObj}>
            {children}
        </Context.Provider>
    )   
}

