import Birthday from '../birthday/birthday.jsx'
import GoogleMap from '../map/map.jsx'
import Swiper from 'react-id-swiper'
import Note from '../note/note.jsx'
import React from 'react'
import './home.styl'
import Line from '../line/line.jsx'

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
        <div className='events'>
          <img className='clock' src='./app/components/media/clock.svg' />
          <h1 className='babel'>lorem</h1>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView={3} paginationClickable spaceBetween={30}>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
            </Swiper>
          </div>
        </div>
        <Line />
        <div className='call'>
          <img src='./app/components/media/call.svg' />
          <img src='./app/components/media/send-sms.svg' />
          <div className='call-label'>lore</div>
          <h1>052-3262187</h1>
        </div>
        <div className='mail'>
          <img src='./app/components/media/mail.svg' />
          <div className='mail-label'>lore</div>
          <h1>ahuva.ben shushan@gmail.com</h1>
        </div>
        <div className='map'>
          <GoogleMap />
          <div className='map-label'>lore</div>
          <h1>lorem sdfsfsdf<br />lorem</h1>
        </div>
        <Line />
        <div className='add'>
          <img src='./app/components/media/add.svg' />
          <h1>lorem</h1>
        </div>
        <Line />
        <div className='add1'>
          <div className='add1-label'>lore</div>
          <img src='./app/components/media/add.svg' />
          <h1>loremlor</h1>
        </div>
        <Line />
        <div className='gallery'>
          <div className='label-wrap'>
            <h1>18 images</h1>
            <div className='gallery-label'>lore</div>
          </div>
          <div id='swiper-wrap-gallery'>
            <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable spaceBetween={30}>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
              <div><Note /></div>
            </Swiper>
          </div>
          <img src='./app/components/media/add.svg' />
          <h1>loremlor</h1>
        </div>
        <Line />
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>loremlor</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>loremlor</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>loremlor</h1>
        </div>
        <Line />
        <div className='bar'>
          <h1>lorem</h1>
        </div>
        <Line />
        <div className='block1'>
          <div className='block1-label'>lorsdfasdfasdfsadfasdfe</div>
          <button className='block1-button'>lor</button>
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div className='block2'>
          <input type='checkbox' className='block1-button' />
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className='autograph'>
            <img src='./app/components/media/autograph.png' />
          </div>
          <h1>lorem sdfsfsdf<br />lorem</h1>
          <button className='block2-button'>lor</button>
          <button className='block2-button'>lor</button>
        </div>
        <div className='test' />
      </div>
    )
  }
}
export default Home
