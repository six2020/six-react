import { route, GET } from 'awilix-koa'
import { Context } from '../interface/IKoa'

@route('/')
class IndexController{

    @route('/')
    @GET()
    async actionList(ctx: Context):Promise<any>{
        ctx.render('index', {
            data: 'hahahha'
        })
    }
    
}

export default IndexController