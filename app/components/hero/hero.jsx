import Birthday from '../birthday/birthday.jsx'
import React from 'react'
import './hero.styl'

const client = window._config

class Hero extends React.Component {
  constructor () {
    super()
    this.state = {
      isInputDisabled: false,
      placeholder: 'placeholder',
      imageUrl: client.urls.photo
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput () {
    this.setState({isInputDisabled: !this.state.isInputDisabled})
    if (!this.state.isInputDisabled) { document.getElementById('afocus').focus() }
  }
  render () {
    return (
      <div id='hero'>
        <img className='star' src={'./app/components/media/' + (client.data.vip ? 'star-active' : 'star') + '.svg'} />
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
        <img className='client-img' src={this.state.imageUrl} alt='user-img' onError={() => { this.setState({imageUrl: client.urls.default_photo}) }} />
      </div>
    )
  }
}
export default Hero
