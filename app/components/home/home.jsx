import React, { Component } from 'react'
import styles from './home.styl'

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container-fluid">
          <div className="container">
            <div className="header">
              <div className="col-xs-2">
                <div className="icon-message">
                  <p>1</p>
                </div>
                <span><i className="fa fa-angle-left" aria-hidden="true"></i></span>
              </div>
              <div className="col-xs-8">
                <h1>lorem</h1>
                <div className="icon-online">
                </div>
              </div>
              <div className="col-xs-2">
                <h1>lor</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="buttons">
              <div className="col-xs-6">
                <h1>lorem</h1>
              </div>
              <div className="col-xs-6">
                <h1>lorem</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="hero">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

