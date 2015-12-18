
import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute } from 'react-router'

import Main from './components/main'
import Home from './components/pages/home'
import About from './components/pages/about'

const history = useBasename(createHistory)({
  basename: '/'
})

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
