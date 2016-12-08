var koa = require('koa');
var serve = require('koa-static');
var app = new Koa();

//app.use(serve('./public/index.html'));

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.body = {message: err.message};
        ctx.status = err.status || 500;
    }
});

app.use(async (ctx) => {
    ctx.body = 'Hello world';
})

app.listen(3000);

console.log('listening on 3000');
