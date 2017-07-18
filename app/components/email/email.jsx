import { updateService } from 'project-services'
import React from 'react'
import './email.styl'

const client = window._config

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
    const url = client.urls.main + client.data.id
    const method = 'PATCH'
    const body = `email=${this.state.email}`
    await updateService(url, method, body)
    this.setState({
      emailEdit: !this.state.emailEdit,
      email: ''
    })
  }
  render () {
    return (
      <div id='email'>
        <div className={client.data.email ? 'email' : 'hidden'}>
          <a href={'mailto:' + client.data.email}><img src='./dist/media/mail.svg' /></a>
          <div className='email-label'>{client.translations.email}</div>
          <h1>{client.data.email}</h1>
        </div>
        <div onClick={() => { this.setState({emailEdit: !this.state.emailEdit}) }}
          className={client.data.email || this.state.emailEdit ? 'hidden' : 'add-email'}>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.add_email}</h1>
        </div>
        <div className={this.state.emailEdit ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='email' value={this.state.email}
              onChange={event => { this.setState({email: event.target.value}) }}
            />
            <h1 className='edit-label'>{client.translations.email}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{client.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Email
