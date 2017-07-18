import { updateService } from 'project-services'
import Birthday from '../birthday/birthday.jsx'
import React from 'react'
import './hero.styl'

const client = window._config

class Hero extends React.Component {
  constructor () {
    super()
    this.state = {
      isInputDisabled: false,
      status: '',
      imageUrl: client.urls.media + client.data.id,
      vip: client.data.vip
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleStar = this.handleStar.bind(this)
  }
  async handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    if (!this.state.isInputDisabled) {
      document.getElementById('afocus').focus()
    } else {
      const url = client.urls.main + client.data.id
      const method = 'PATCH'
      const body = `status=${this.state.status}`
      await updateService(url, method, body)
      this.setState({
        status: ''
      })
    }
  }
  async handleStar () {
    const url = client.urls.main + client.data.id
    const method = 'PATCH'
    const body = `vip=${!client.data.vip}`
    const response = await updateService(url, method, body)
    if (response.status === 204) {
      this.setState({vip: !this.state.vip})
    }
  }
  render () {
    return (
      <div id='hero'>
        <div onClick={this.handleStar} className='star-wrap'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 52 50'>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <g id='VIP'><path
                  className={this.state.vip ? 'star star-active' : 'star'}
                  d='M26.79,1.56,31.06,14.7a2.26,2.26,0,0,0,2.15,1.56H
                  47a2.26,2.26,0,0,1,1.33,4.09L37.17,28.46A2.26,2.26,0,
                  0,0,36.35,31l4.27,13.14a2.26,2.26,0,0,1-3.48,2.53L26,
                  38.53a2.26,2.26,0,0,0-2.66,0L12.14,46.65a2.26,2.26,0,
                  0,1-3.48-2.53L12.93,31a2.26,2.26,0,0,0-.82-2.53L.94,
                  20.34a2.26,2.26,0,0,1,1.33-4.09H16.08a2.26,2.26,0,0,
                  0,2.15-1.56L22.49,1.56A2.26,2.26,0,0,1,26.79,1.56Z' />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Birthday />
        <form action='submit'>
          <div className='input-group'>
            <div className='input-wrap'>
              <input className={'form-control ' + (this.state.isShowInput ? '' : client.translations.status ? 'form-control-disabled' : '')}
                placeholder={this.state.isInputDisabled ? '' : client.translations.status ? client.translations.status : client.translations.placeholder}
                type='text' id={this.state.isInputDisabled ? '' : 'afocus'}
                onChange={event => { this.setState({status: event.target.value}) }}
                onClick={this.state.isShowInput ? '' : client.translations.status ? '' : this.handleInput}
                 />
            </div>
            <span onClick={this.handleInput} className='input-group-addon'>
              <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src='./dist/media/pencil.svg' />
            </span>
          </div>
        </form>
        <img className='client-img' src={this.state.imageUrl + '.jpg'} alt='user-img' onError={() => { this.setState({imageUrl: client.urls.media + 'default'}) }} />
      </div>
    )
  }
}
export default Hero
