import Home from './components/home/home.jsx'
import React, { Component } from 'react'
import './app.styl'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Home />
      </div>
    )
  }
}
