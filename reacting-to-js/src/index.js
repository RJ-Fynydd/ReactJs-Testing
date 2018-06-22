import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import $ from 'jquery'

window.React = React

render(
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/404' component={Whoops404} />
        <Redirect from='*' to='/404' />
    </Router>,
    document.getElementById('root')
)
