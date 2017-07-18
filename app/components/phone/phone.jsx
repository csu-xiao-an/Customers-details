import { updateService } from 'project-services'
import React from 'react'
import './phone.styl'

const client = window._config

class Phone extends React.Component {
  constructor () {
    super()
    this.state = {
      phoneEdit: false,
      phone: ''
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    const url = client.urls.main + client.data.id
    const method = 'PATCH'
    const body = `phone=${this.state.phone}`
    await updateService(url, method, body)
    this.setState({
      phoneEdit: !this.state.phoneEdit,
      phone: ''
    })
  }
  render () {
    return (
      <div id='phone'>
        <div className={client.data.phone ? 'phone' : 'hidden'}>
          <a href={'tel:' + client.data.phone}><img src='./dist/media/call.svg' /></a>
          <a href={'sms:' + client.data.phone}><img src='./dist/media/send-sms.svg' /></a>
          <div className='call-label'>{client.translations.mobile}</div>
          <h1>{client.data.phone}</h1>
        </div>
        <div onClick={() => { this.setState({phoneEdit: !this.state.phoneEdit}) }}
          className={client.data.phone || this.state.phoneEdit ? 'hidden' : 'add-phone'}>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.add_phone}</h1>
        </div>
        <div className={this.state.phoneEdit ? 'phone-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='number' value={this.state.phone}
              onChange={event => { this.setState({phone: event.target.value}) }}
            />
            <h1 className='edit-label'>{client.translations.mobile}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{client.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Phone
