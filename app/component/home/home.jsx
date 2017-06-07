import Note from '../note/note.jsx'
import React from 'react'
import './home.styl'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isInputDisabled: false,
      isStarActive: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleStar = this.handleStar.bind(this)
  }
  handleStar () {
    this.setState({isStarActive: !this.state.isStarActive})
  }
  handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    document.getElementById('autoFocus').focus()
  }
  render () {
    return (
      <div id='home'>
        <div className='header'>
          <div className='col-xs-2'>
            <span><i className='fa fa-angle-left' aria-hidden='true' /></span>
          </div>
          <div className='col-xs-8'>
            <h1>lorem</h1>
            <div className='icon-online' />
          </div>
          <div className='col-xs-2'>
            <h1>lor</h1>
          </div>
        </div>
        <div className='buttons'>
          <div className='col-xs-6'>
            <h1>lorem</h1>
          </div>
          <div className='col-xs-6'>
            <h1>lorem</h1>
          </div>
        </div>
        <div className='hero'>
          <span>
            <i onClick={this.handleStar} className={'fa fa-star ' + (this.state.isStarActive ? 'fa-star-active' : '')} aria-hidden='true' />
          </span>
          <div className='label'><h1>lorem</h1></div>
          <div className='input-group'>
            <div className='input-wrap'>
              <input placeholder={this.state.isInputDisabled ? '' : 'lorem'} type='text' id={this.state.isInputDisabled ? '' : 'autoFocus'}
                className={'form-control ' + (this.state.isShowInput ? '' : 'form-control-disabled')} />
            </div>
            <span onClick={this.handleInput} className='input-group-addon'>
              <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src='./app/component/media/pencil.svg' />
            </span>
          </div>
          <img src='./app/component/media/0.png' alt='user-img' />
        </div>
        <div className='swiper'>
          <Note />
        </div>
      </div>
    )
  }
}
export default Home
