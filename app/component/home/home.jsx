import Note from '../note/note.jsx'
import Birthday from '../birthday/birthday.jsx'
import React from 'react'
import './home.styl'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      client: window._config.data,
      customersEnabled: true,
      isInputDisabled: false
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    if (!this.state.isInputDisabled) { document.getElementById('afocus').focus() }
  }
  age (date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0
  }
  render () {
    return (
      <div id='home'>
        <div className='header'>
          <div className='col-xs-2'>
            <span><i className='fa fa-angle-left' aria-hidden='true' /></span>
          </div>
          <div className='col-xs-8'>
            <div className='icon-online' />
            <h1>{this.state.client.name}</h1>
            <h1>({this.age(this.state.client.birthdate)})</h1>
          </div>
          <div className='col-xs-2'>
            <button className='edit'>edit</button>
          </div>
        </div>
        <div className='buttons'>
          <div className='col-xs-6'>
            <button className={this.state.customersEnabled ? 'activeCustomers' : ''}>Customer details</button>
          </div>
          <div className='col-xs-6'>
            <button>149 - Appointments</button>
          </div>
        </div>
        <div className='hero'>
          <span>
            <i className={'fa fa-star ' + (this.state.client.vip ? 'fa-star-active' : '')} aria-hidden='true' />
          </span>
          <Birthday />
          <div className='input-group'>
            <div className='input-wrap'>
              <input placeholder={this.state.isInputDisabled ? '' : 'placeholder'} type='text' id={this.state.isInputDisabled ? '' : 'afocus'}
                className={'form-control ' + (this.state.isShowInput ? '' : 'form-control-disabled')} />
            </div>
            <span onClick={this.handleInput} className='input-group-addon'>
              <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src='./app/component/media/pencil.svg' />
            </span>
          </div>
          <img className='client-img' src='./app/component/client/client_id.png' alt='user-img' />
        </div>
        <div className='swiper-wrap'>
          <Note />
        </div>
      </div>
    )
  }
}
export default Home
