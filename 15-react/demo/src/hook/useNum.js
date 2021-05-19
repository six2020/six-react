import {useState, useEffect} from 'react'

export default function useNum(n){
    let [num, setNum] = useState(n)

    useEffect(()=>{
      setTimeout(()=>{
        setNum(++num)
      }, 2000)
    }, [])

    return num
}