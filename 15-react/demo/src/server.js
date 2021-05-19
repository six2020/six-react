const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors())

app.get('/list', ( req, res ) => {
    // 当前的页数
    let currentPage = parseInt(req.query.currentPage);
    // 每页多少条
    let pageSize = parseInt(req.query.pageSize);

    // 数据 页数和条数所对应的数据
    let list = [];

    // 总的数据条数
    let total = 66;

    // 总页数 66 / 10  --> 7
    let pageCount = Math.ceil(total / pageSize);

    // 起始索引
    let offset = (currentPage - 1) * pageSize;

    if(currentPage >= pageCount){
        pageSize = total % pageSize
    }
    
    for(let i = offset; i < offset + pageSize; i ++ ){
        list.push({id: i+1, name: 'sieyes-'+(i+1)})
    }

    res.json({
        currentPage,
        pageSize,
        total,
        pageCount,
        list
    })
})

app.listen(8080, (  ) => {
    console.log(` ====>>>>`, 'server run 8080~~~');
    
})