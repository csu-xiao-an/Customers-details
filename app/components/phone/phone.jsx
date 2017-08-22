import { clientReplaceService } from 'project-services'
import React from 'react'
import './phone.styl'

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
    const body = `phone=${this.state.phone}`
    let response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.phone = this.state.phone
      this.setState({
        phoneEdit: !this.state.phoneEdit,
        phone: ''
      })
    }
  }
  render () {
    return (
      <div id='phone'>
        <div className={config.data.phone ? 'phone-img' : 'hidden'}>
          <div className='img-wrap'>
            <a href={'tel:' + config.data.phone}><img src='./dist/media/call.svg' /></a>
          </div>
          <div className='img-wrap'>
            <a href={'sms:' + config.data.phone}><img src='./dist/media/send-sms.svg' /></a>
          </div>
        </div>
        <div className={config.data.phone ? 'phone-labels' : 'hidden'}>
          <div className='label-wrap'>
            <div className='call-label'>{config.translations.mobile}</div>
          </div>
          <div className='phone-wrap'>
            <h1>{config.data.phone}</h1>
          </div>
        </div>
        <div onClick={() => { this.setState({phoneEdit: !this.state.phoneEdit}) }}
          className={config.data.phone || this.state.phoneEdit ? 'hidden' : 'add-phone'}>
          <img src='./dist/media/add.svg' />
          <h1>{config.translations.add_phone}</h1>
        </div>
        <div className={this.state.phoneEdit ? 'phone-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='number' value={this.state.phone}
              onChange={event => { this.setState({phone: event.target.value}) }}
            />
            <h1 className='edit-label'>{config.translations.mobile}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Phone
