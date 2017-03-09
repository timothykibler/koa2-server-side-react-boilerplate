import Router from 'koa-router'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'what in tarnation'
})

export default router
