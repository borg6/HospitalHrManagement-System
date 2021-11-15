const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { bottender } = require('bottender');

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.use(bodyParser());
  server.use((ctx, next) => {
    ctx.req.body = ctx.request.body;
    ctx.req.rawBody = ctx.request.rawBody;
    return next();
  });

  const router = new Router();

  router.get('/api', (ctx) => {
    ctx.response.body = { ok: true