import Router from 'koa-router'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from './react-routes'
import NotFoundPage from '../components/notfound'

const router = new Router()

router.get('*', async ctx => {
  const {redirectlocation, renderprops} = await matchPromise({
    routes,
    location: ctx.url
  })

  let reactcomponent
  if (renderprops) {
    reactcomponent = renderToString(<RouterContext {...renderprops}/>)
  } else {
    reactcomponent = renderToString(<NotFoundPage/>)
  }
  await ctx.render('index', {reactcomponent})
})

function matchPromise(opts) {
  return new Promise((resolve, reject) => {
    match(opts, (err, redirectlocation, renderprops) => {
      if (err) {
        reject(err)
        return
      }
      resolve({redirectlocation, renderprops})
    })
  })
}

export default router
