/**
 * Created by blake on 12/31/15.
 */
var rhyme = require('rhyme')
var serve = require('koa-static')
// logger
rhyme.use(function *(next) {
  var start = new Date
  yield next
  var ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

//视图,因为是前后端分离,后端并不会渲染出前端页面,所以也就没有使用ejs模板这类的必要

//静态文件
rhyme.use(serve(__dirname + "/asset", {defer: true}))

rhyme.lift()
