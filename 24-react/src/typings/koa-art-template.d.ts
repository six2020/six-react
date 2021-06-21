declare module 'koa-art-template'{
    function render<K>(app: string | object, options: K | render.DefaultSettings): any;
    namespace render{
        interface DefaultSettings{
            root: string;
            extname: string;
        }
    }

    export default render
}