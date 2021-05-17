/**
 * 
 * 状态 和 更新状态 分离
 * 
*/

import { createContext, useContext, useState } from 'react'

let Context = createContext()
let ContextDisplay = createContext()


export function useConut() {
    let myConut = useContext(Context)

    return myConut
}

export function useConutDisplay() {
    let myConutDisplay = useContext(ContextDisplay)

    return myConutDisplay
}

export function ContextProvider4({ children }) {

    // let stateHook = useState(666)

    let [state, setState] = useState(666)
    let setObj = {
        add(v) {
            setState(state + v)
        },
        reduce(v) {
            setState(state - v)
        }
    }

    return (
        <ContextDisplay.Provider value={state}>
            <Context.Provider value={setObj}>
                {children}
            </Context.Provider>
        </ContextDisplay.Provider>

    )
}

