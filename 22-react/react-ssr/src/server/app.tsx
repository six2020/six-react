import Koa from 'koa'
// 路由
import Router from '@koa/router'
// 静态服务器
import serve from 'koa-static'
// 服务端渲染
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App'
import { StaticRouter } from "react-router-dom";

const app = new Koa;
const router = new Router();

// 静态服务器 、 路由
router.get('/', (ctx) => {
    let html = ReactDOMServer.renderToString(<StaticRouter><App/></StaticRouter>);
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
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
});

app.use(serve('dist/asset'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
    console.log('server running 8080 ...')
})

