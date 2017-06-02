import React, { Component } from 'react'
import Home from './components/home/home.jsx'
import styles from './app.styl'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Home/>
      </div>
    )
  }
}
