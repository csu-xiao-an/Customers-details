import { clientReplaceService } from 'project-services'
import Birthday from '../birthday/birthday.jsx'
import React from 'react'
import './hero.styl'

class Hero extends React.Component {
  constructor () {
    super()
    this.state = {
      imageUrl: config.urls.media + config.data.id,
      isInputDisabled: false,
      succes: false,
      status: ''
    }
    this.handleStatus = this.handleStatus.bind(this)
    this.handleStar = this.handleStar.bind(this)
  }
  async handleStar () {
    const body = `isFavorite=${!config.data.vip}`
    const response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.vip = !config.data.vip
      if (config.data.vip) {
        this.setState({succes: true})
        setTimeout(() => { this.setState({succes: false}) }, 1200)
      }
      this.forceUpdate()
    }
  }
  async handleStatus () {
    this.setState({isInputDisabled: true})
    if (!this.state.isInputDisabled) {
      this.autofocus.focus()
    } else {
      this.setState({isInputDisabled: false})
      const body = `status=${this.state.status}`
      const response = await clientReplaceService(body)
      if (response.status === 204) {
        config.data.status = this.state.status
        this.forceUpdate()
      }
    }
  }
  render () {
    return (
      <div id='hero'>
        <div onClick={this.handleStar} className={'star-wrap ' + (config.isRtL ? 'star-wrap-right' : 'star-wrap-left')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 52 50'>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <g id='VIP'><path
                  className={config.data.vip ? 'star star-active' : 'star'}
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
        <div className={'toast ' + (this.state.succes ? 'toast-visible' : '')}>
          <h1>{config.translations.added_to_favorites}</h1>
        </div>
        <Birthday />
        <form action='submit'>
          <div className='input-group'>
            <div className='input-wrap'>
              <input className={'form-control ' + (this.state.isShowInput ? '' : config.data.status ? 'form-control-disabled' : '')}
                type='text' ref={event => { this.autofocus = event }}
                placeholder={this.state.isInputDisabled ? '' : config.data.status ? config.data.status : config.translations.placeholder}
                onChange={event => { this.setState({status: event.target.value}) }}
                onClick={this.state.isInputDisabled ? '' : this.handleStatus}
                onBlur={this.handleStatus}
                 />
            </div>
            <span onClick={this.state.isInputDisabled ? '' : this.handleStatus} className={this.state.isInputDisabled ? 'hidden' : 'input-group-addon'}>
              <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src={config.urls.media + 'pencil.svg'} />
            </span>
          </div>
        </form>
        <img className='client-img' src={this.state.imageUrl + '.jpg'} alt='user-img' onError={() => { this.setState({imageUrl: config.urls.media + 'default'}) }} />
      </div>
    )
  }
}
export default Hero
