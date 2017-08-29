import Appointments from './components/appointments/appointments.jsx'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home/home.jsx'
import 'react-select/dist/react-select.css'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={config.urls.home} component={Home} />
    <Route path={config.urls.appointments} component={Appointments} />
  </Router>,
  document.getElementById('root')
)
