import Appointments from './components/appointments/appointments.jsx'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home/home.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

const client = window._config

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={client.urls.home} component={Home} />
    <Route path={client.urls.appointments} component={Appointments} />
  </Router>,
  document.getElementById('root')
)
