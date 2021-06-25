/**
 * @time 2021/06/25
 * 
 * 博客列表
 * 
*/

import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default ()=>{

    let [dataList, setDataList] =  useState([])

    useEffect(()=>{
        // console.log(`666 ====>>>>`, 666);
        
        fetch('http://localhost:8080/blog')
            .then(res=>res.json())
            .then(res=>{
                setDataList(res.data)
                console.log(res)
            })

    },[])

    return (
        <div>
            {
                dataList.map((item, index)=>(
                    <div key={index} style={{border: '2px solid red'}}>
                        <p>{item.title}</p>
                        <p>{item.explain}</p>
                        <Link to={`/blog/${item.id}`}>查看</Link>
                    </div>
                ))
            }
        </div>
    )
}