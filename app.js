import Koa from 'koa'
import views from 'koa-views'
import Router from 'koa-router'
import bodyparser from 'koa-bodyparser'
// Get Koa and Router instances
const app = new Koa(),
  router = new Router()
// Get routes
import api from './routes/api'
import index from './routes/index'
// Middleware
app.use(bodyparser())
// Setup dir for static assets
app.use(require('koa-static')(__dirname + '/public'))
// Configure template engine
app.use(views(__dirname + '/views', {
  extension: 'pug',
  map: {
    pug: 'pug'
  }
}))
// Should contain regular API functions
router.use('/api', api.routes(), api.allowedMethods())
// Put last to handle React routing
router.use('*', index.routes(), index.allowedMethods())
app.use(router.routes(), router.allowedMethods())

app.listen(process.env.PORT || 3000)
