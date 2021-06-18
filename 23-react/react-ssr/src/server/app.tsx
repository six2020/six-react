import Koa from 'koa'
// 路由
import Router from '@koa/router'
// 静态服务器
import serve from 'koa-static'
// 服务端渲染
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App'
import { StaticRouter, matchPath } from "react-router-dom";
import routes from '../shared/Routes'
import {createServerStore} from '../shared/store'
import {Provider} from 'react-redux'

const app = new Koa;
const router = new Router();

// 静态服务器 、 路由
router.get(['/', '/count'], async (ctx) => {

    let store = createServerStore();

    const promises = []
    routes.some(route => {
        // 匹配前端路由
        const match = matchPath(ctx.request.path, route)
        if (match && route.loadData) promises.push(route.loadData(store))
        return match
    })

    let data = await Promise.all(promises)
    console.log('data--------------------:', data)
    
    let html = ReactDOMServer.renderToString(<Provider store={store}><StaticRouter><App /></StaticRouter></Provider>);
    ctx.response.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <script>window.REDUX_STORE = ${JSON.stringify(store.getState())}</script>
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
});

router.get('/getdata', ctx => {
    ctx.response.body = {
        code: 0,
        data: '后台返回的数据~~~~'
    }
});

app.use(serve('dist/asset'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
    console.log('server running 8080 ...')
})

