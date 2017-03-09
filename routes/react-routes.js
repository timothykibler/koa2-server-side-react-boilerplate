// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from '../components/layout'
import Index from '../components/index'
import About from '../components/about'
import NotFoundPage from '../components/notfound'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)

export default routes
