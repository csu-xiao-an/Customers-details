import { clientReplaceService } from 'project-services'
import React from 'react'
import './email.styl'

class Email extends React.Component {
  constructor () {
    super()
    this.state = {
      emailEdit: false,
      email: ''
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    const body = `email=${this.state.email}`
    let response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.email = this.state.email
      this.setState({
        emailEdit: !this.state.emailEdit,
        email: ''
      })
    }
  }
  render () {
    return (
      <div id='email'>
        <div className={config.data.email ? 'email' : 'hidden'}>
          <div className='link-wrap'>
            <a href={'mailto:' + config.data.email}><img src='./dist/media/mail.svg' /></a>
          </div>
          <div className='data-wrap'>
            <div className={'email-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.email}</div>
            <h1 className={config.isRtL ? 'left' : 'right'}>{config.data.email}</h1>
          </div>
        </div>
        <div onClick={() => { this.setState({emailEdit: !this.state.emailEdit}) }}
          className={config.data.email || this.state.emailEdit ? 'hidden' : 'add-email'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_email}</h1>
        </div>
        <div className={this.state.emailEdit ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='email' value={this.state.email}
              onChange={event => { this.setState({email: event.target.value}) }}
            />
            <h1 className='edit-label'>{config.translations.email}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Email
