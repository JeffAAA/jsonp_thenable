const koa = require('koa');
const app = new koa();
let data = { data: 'from josnp server' };

app.use(async (ctx, next) => {
    let { callback } = ctx.query;
    if (callback) {
        ctx.body = `${callback}(${JSON.stringify(data)})`;
    }
})

app.listen(8888);