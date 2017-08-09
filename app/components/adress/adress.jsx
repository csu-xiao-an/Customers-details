import { clientReplaceService } from 'project-services'
import React from 'react'
import './adress.styl'

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
    const body = `address=${this.state.adress}`
    let response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.adress = this.state.adress
      this.setState({
        adressEdit: !this.state.adressEdit,
        adress: ''
      })
    }
  }
  render () {
    return (
      <div id='adress'>
        <div className={config.data.adress ? 'adress' : 'hidden'}>
          <div className='google-map'>
            <a href={'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes'}>
              <img src={config.urls.main + '/customers-details/clients/' + config.data.id + '/map'} />
            </a>
          </div>
          <div className='adress-label'>{config.translations.adress}</div>
          <div className='address'>
            <a href={'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes'}>
              <img src={config.urls.media + 'waze.png'} />
            </a>
            <h1>{config.data.adress}</h1>
          </div>
        </div>
        <div onClick={() => { this.setState({adressEdit: !this.state.adressEdit}) }}
          className={config.data.adress || this.state.adressEdit ? 'hidden' : 'add-adress'}>
          <img src='./dist/media/add.svg' />
          <h1>{config.translations.add_adress}</h1>
        </div>
        <div className={this.state.adressEdit ? 'adress-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='text' value={this.state.adress}
              onChange={event => { this.setState({adress: event.target.value}) }}
            />
            <h1 className='edit-label'>{config.translations.adress}</h1>
          </div>
          <div className='button'>
            <button onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Adress
