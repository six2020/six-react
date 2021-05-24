import qs from 'querystring'

export default function Total(props){

    console.log(`props ====>>>>`, props);
    
    // params 参数
    let {id, title} = props.match.params;

    // ========================================================

    // query 参数
    // let query = props.location.search;
    // let obj = {}; 
    // query.slice(1).split("&").forEach(item=> obj[item.split('=')[0]]= item.split('=')[1] )
    // let {id, title} = obj;
    

    // 使用 querystring 模块解析 query 参数
    // let {id, title} = qs.parse(query.slice(1))

     // ========================================================

     // state 参数
    // let {id, title} = props.location.state;


    

    return (
        <div>
            <h4>id: {id}</h4>
            <h4>title: {title}</h4>
        </div>
    )

}