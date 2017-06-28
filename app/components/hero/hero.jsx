import Birthday from '../birthday/birthday.jsx'
import { requestService } from 'project-services'
import React from 'react'
import './hero.styl'
const client = window._config

class Hero extends React.Component {
  constructor () {
    super()
    this.state = {
      isInputDisabled: false,
      placeholder: 'placeholder',
      imageUrl: client.urls.photo + client.data.id
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleStar = this.handleStar.bind(this)
  }
  handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    if (!this.state.isInputDisabled) { document.getElementById('afocus').focus() }
  }
  handleStar () {
    const ulr = client.urls.change_vip + client.data.id + '/vip'
    const method = 'PUT'
    const body = client.data.vip ? 'vip=false' : 'vip=true'
    requestService(ulr, method, body)
  }
  render () {
    return (
      <div id='hero'>
        <img onClick={this.handleStar} className='star' src={'./app/components/media/' + (client.data.vip ? 'star-active' : 'star') + '.svg'} />
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
