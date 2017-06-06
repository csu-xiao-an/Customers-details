import React from 'react'
import './home.styl'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showStar: false,
            isActive: false
        }
    }
    showStar(){
        this.setState({showStar : !this.state.showStar})
    }
    isActive(){
        this.setState({isActive : !this.state.isActive})
        document.getElementById('autoFocus').focus()
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
                    <span><i onClick={() => { this.showStar() }} className={this.state.showStar ? 'fa fa-star fa-star-active' : 'fa fa-star'} aria-hidden="true"></i></span>
                    <div className="label"><h1>lorem</h1></div>
                    <div className="input-group">
                        <input type="text" id={this.state.isActive ? '' : 'autoFocus'} className={this.state.isActive ? 'form-control' : 'form-control form-control-disabled'}/>
                        <span onClick={() => { this.isActive() }} className="input-group-addon"><img className={this.state.isActive ? 'input-group-addon-hidden' : ''} src="./app/component/media/pencil.svg" alt=""/></span>
                    </div>
                    <img src="./app/component/media/000000.png" alt="user-img"/>
                </div>

            </div>
        )
    }
}
export default Home
