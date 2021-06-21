import Koa from 'koa'
import { createContainer, Lifetime } from 'awilix'
import { scopePerRequest, loadControllers } from 'awilix-koa'
import render from 'koa-art-template'
import path from 'path'

const app = new Koa;

// 创建一个基础容器，负责装载服务， 为 IOC 做准备
const container = createContainer()
container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: "camelCase",
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
})

// 把 container 注入到整个 koa 的运行流程
app.use(scopePerRequest(container))

// 加载全部的路由
app.use(loadControllers(`${__dirname}/routers/*.ts`))

// 模板
render<render.DefaultSettings>(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html'
});


app.listen(8080, () => {
    console.log(` ====>>>>`, '第一个 IOC 的应用');
})


