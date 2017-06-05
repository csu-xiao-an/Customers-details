import React, { Component } from 'react'
import './app.styl'
import Home from './component/home/home.jsx'

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Home/>
            </div>
        )
    }
}