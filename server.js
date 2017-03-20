var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/koa2', async(ctx, next) => {

    try {
        ctx.body = await teste();
    } catch (error) {
        ctx.body = error;
        ctx.status = 500;
    }

});

function teste() {

    return new Promise((resolve, reject) => {
        reject('teste');
    });
};

app.listen(3000);