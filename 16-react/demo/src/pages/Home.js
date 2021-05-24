import {useState} from 'react'
import {Route, Link} from 'react-router-dom'
import Total from './Total'

export default function Home(props){
    // console.log(`props ====>>>>`, props);
    
    let [data] = useState([
        {id: 1, title: '新闻'},
        {id: 2, title: '财经'},
        {id: 3, title: '体育'},
        {id: 4, title: '文化'}
    ])

    return (
        <div>
            <h2>组件：Home</h2>


            <div>
                <p>编程式导航</p>
                <button onClick={()=>{props.history.push('/info')}}>info</button>
                <button onClick={()=>{props.history.goForward()}}>前进</button>
                <button onClick={()=>{props.history.goBack()}}>后退</button>
            </div>


            {/* 
            
                params 参数    

            */}

           {
               data.map(item=> <Link 
                                    key={item.id} style={{marginLeft: '20px'}} 
                                    to={`${props.match.path}/total/${item.id}/${item.title}`}>{item.title}</Link>)
           }

            <Route path={`${props.match.path}/total/:id/:title`} component={Total} />

           {/* =============================================== */}

            {/* 
            
                query 参数    

                www.baidu.com/s?user=zhangsan&age=12

            */}

           {/* {
               data.map(item=> <Link 
                                    key={item.id} style={{marginLeft: '20px'}} 
                                    to={`${props.match.path}/total?id=${item.id}&title=${item.title}`}>{item.title}</Link>)
           } */}

            {/* <Route path={`${props.match.path}/total`} component={Total} /> */}



           {/* =============================================== */}

            {/* 
            
                state 参数    

            */}

           {/* {
               data.map(item=> <Link 
                                    key={item.id} style={{marginLeft: '20px'}} 
                                    to={{pathname: `${props.match.path}/total`, state: {id: item.id, title: item.title}}}>
                                        {item.title}</Link>)
           } */}

            {/* <Route path={`${props.match.path}/total`} component={Total} /> */}
        </div>
    )
}
