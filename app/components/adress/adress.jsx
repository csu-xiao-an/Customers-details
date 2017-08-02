import { clientUpdateService } from 'project-services'
import React from 'react'
import './adress.styl'

const client = window._config

class Adress extends React.Component {
  constructor () {
    super()
    this.state = {
      adressEdit: false,
      adress: ''
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    const method = 'PATCH'
    const body = `address=${this.state.adress}`
    await clientUpdateService(method, body)
    this.setState({
      adressEdit: !this.state.adressEdit,
      adress: ''
    })
  }
  render () {
    return (
      <div id='adress'>
        <div className={client.data.adress ? 'adress' : 'hidden'}>
          <div className='google-map'>
            <a href={'waze://?ll=' + client.data.intent_x + ', ' + client.data.intent_y + '&navigate=yes'}>
              <img src={'http://customers-details-api.bewebmaster.co.il/clients/' + client.data.id + '/map'} />
            </a>
          </div>
          <div className='adress-label'>{client.translations.adress}</div>
          <div className='address'>
            <a href={'waze://?ll=' + client.data.intent_x + ', ' + client.data.intent_y + '&navigate=yes'}>
              <img src={client.urls.media + 'waze.png'} />
            </a>
            <h1>{client.data.adress}</h1>
          </div>
        </div>
        <div onClick={() => { this.setState({adressEdit: !this.state.adressEdit}) }}
          className={client.data.adress || this.state.adressEdit ? 'hidden' : 'add-adress'}>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.add_adress}</h1>
        </div>
        <div className={this.state.adressEdit ? 'adress-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='text' value={this.state.adress}
              onChange={event => { this.setState({adress: event.target.value}) }}
            />
            <h1 className='edit-label'>{client.translations.adress}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{client.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Adress
