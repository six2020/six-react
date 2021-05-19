import {useState, useEffect} from 'react'

export default function useRequest(){

    let [options, setOptions] = useState({currentPage: 1, pageSize: 10});
    let [data, setData] = useState({
        total: 0,
        pageCount: 0,
        list: []
    })

    // 请求数据
    function request(){
        let {currentPage, pageSize} = options
        fetch(`http://localhost:8080/list?currentPage=${currentPage}&pageSize=${pageSize}`)
            .then(res=>res.json())
            .then(res=>setData({...res}))
    }

    useEffect(request, [options])

    return [data, options, setOptions]
}