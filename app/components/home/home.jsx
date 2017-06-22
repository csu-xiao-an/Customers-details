import Partners from '../group-partner/group-partner.jsx'
import Birthday from '../birthday/birthday.jsx'
import Galery from '../galery/galery.jsx'
import Events from '../events/events.jsx'
import Switch from 'react-toggle-switch'
import GoogleMap from '../map/map.jsx'
import Line from '../line/line.jsx'
import React from 'react'
import './home.styl'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      client: window._config.data,
      customersEnabled: true,
      isInputDisabled: false,
      placeholder: 'placeholder'
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
            <img className='arrow-back' src='./app/components/media/arrow-back.svg' />
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
          <img className='star' src={'./app/components/media/' + (this.state.client.vip ? 'star-active' : 'star') + '.svg'} />
          <Birthday />
          <form action='submit'>
            <div className='input-group'>
              <div className='input-wrap'>
                <input placeholder={this.state.isInputDisabled ? '' : this.state.placeholder} type='text' id={this.state.isInputDisabled ? '' : 'afocus'}
                  className={'form-control ' + (this.state.isShowInput ? '' : 'form-control-disabled')} />
              </div>
              <span onClick={this.handleInput} className='input-group-addon'>
                <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src='./app/components/media/pencil.svg' />
              </span>
            </div>
          </form>
          <img className='client-img' src='./app/components/client/client_id.png' alt='user-img' />
        </div>
        <Events />
        <Line />
        <div className='call'>
          <img src='./app/components/media/call.svg' />
          <img src='./app/components/media/send-sms.svg' />
          <div className='call-label'>Mobile</div>
          <h1>052-3262187</h1>
        </div>
        <div className='e-mail'>
          <img src='./app/components/media/mail.svg' />
          <div className='e-mail-label'>E-mail</div>
          <h1>ahuva.ben.shushan@gmail.com</h1>
        </div>
        <div className='map'>
          <GoogleMap />
          <div className='map-label'>Address</div>
          <h1>HaRav Bar Shaul<br /> Street 8</h1>
        </div>
        <Line />
        <div className='add'>
          <img src='./app/components/media/add.svg' />
          <h1>Add debt</h1>
        </div>
        <Line />
        <div className='add1'>
          <div className='add1-label'>Remarks</div>
          <img src='./app/components/media/add.svg' />
          <h1>Add a comment</h1>
        </div>
        <Line />
        <Galery />
        <Line />
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Source of arrival</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Add another social network</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Add a link</h1>
        </div>
        <Line />
        <Partners />
        <Line />
        <div className='block1'>
          <div className='block1-label'>Completion of the details by the customer</div>
          <button className='block1-button'>Send</button>
          <h1>Submit a request to complete details</h1>
        </div>
        <div className='block2'>
          <div className='checkbox-wrap'>
            <Switch on />
            <h1>The customer allows sending marketing material</h1>
          </div>
          <div className='autograph'>
            <img src='./app/components/media/autograph.png' />
          </div>
          <h1>Signature added<br /> successfully</h1>
          <button className='block2-button'>Delete</button>
          <button className='block2-button'>Replace</button>
        </div>
        <div className='test' />
      </div>
    )
  }
}
export default Home
