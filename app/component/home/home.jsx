import React, { Component } from 'react'
import './home.styl'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showStar: false
        }
    }
    showStar(){
        this.setState({showStar : !this.state.showStar})
    }
    render() {
        return (
            <div id="home">

                <div className="header">
                    <div className="col-xs-2">
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

                <div className="buttons">
                    <div className="col-xs-6">
                        <h1>lorem</h1>
                    </div>
                    <div className="col-xs-6">
                        <h1>lorem</h1>
                    </div>
                </div>

                <div className="hero">
                    <span><i onClick={this.showStar.bind(this)} className={this.state.showStar ? "fa fa-star fa-star-active" : "fa fa-star "} aria-hidden="true"></i></span>
                    <input type="text"/>
                    <img src="./app/component/media/000000.png" alt="user-img"/>
                </div>

            </div>
        )
    }
}
export default Home

