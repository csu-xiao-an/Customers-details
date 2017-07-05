import Birthday from '../birthday/birthday.jsx'
import { clientService } from 'project-services'
import React from 'react'
import './hero.styl'

const client = window._config

class Hero extends React.Component {
  constructor () {
    super()
    this.state = {
      isInputDisabled: false,
      placeholder: 'placeholder',
      imageUrl: client.urls.photo + client.data.id,
      vip: client.data.vip
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleStar = this.handleStar.bind(this)
  }
  handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    if (!this.state.isInputDisabled) { document.getElementById('afocus').focus() }
  }
  async handleStar () {
    const ulr = client.urls.change_vip + client.data.id + '/vip'
    const method = 'PUT'
    const body = `vip=${!client.data.vip}`
    if (await clientService(ulr, method, body)) {
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
              <input placeholder={this.state.isInputDisabled ? '' : this.state.placeholder} type='text' id={this.state.isInputDisabled ? '' : 'afocus'}
                className={'form-control ' + (this.state.isShowInput ? '' : 'form-control-disabled')} />
            </div>
            <span onClick={this.handleInput} className='input-group-addon'>
              <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src='./app/components/media/pencil.svg' />
            </span>
          </div>
        </form>
        <img className='client-img' src={this.state.imageUrl + '.jpg'} alt='user-img' onError={() => { this.setState({imageUrl: client.urls.default_photo}) }} />
      </div>
    )
  }
}
export default Hero
