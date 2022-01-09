// 搭建一个服务器
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('服务器启动了，监听3000')
})
