import React, { Component } from 'react'
import './source.styl'

const client = window._config

class Source extends Component {
  constructor () {
    super()
    this.state = {
      isOpenSource: false
    }
    this.handleSource = this.handleSource.bind(this)
  }
  handleSource () {
    this.setState({ isOpenSource: !this.state.isOpenSource })
  }
  render () {
    return (
      <div id='source'>
        <div className={this.state.isOpenSource ? 'hidden' : client.data.source ? 'hidden' : 'add-source-wrap'}>
          <img src='./dist/media/add.svg' onClick={this.handleSource} />
          <h1>{client.translations.source_arrival}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap' : client.data.source ? 'add-select-wrap' : 'hidden'}>
          <h1>{client.translations.source_arrival}</h1>
          <div className='button-wrap'>
            <button>{client.translations.save}</button>
          </div>
          <div className='select-wrap'>
            <select>
              <option disabled >{client.data.source}</option>
              <option value={client.translations.source_list.ads} >{client.translations.source_list.ads}</option>
              <option value={client.translations.source_list.fb_page} >{client.translations.source_list.fb_page}</option>
              <option value={client.translations.source_list.family} >{client.translations.source_list.family}</option>
              <option value={client.translations.source_list.friends} >{client.translations.source_list.friends}</option>
              <option value={client.translations.source_list.recommendation} >{client.translations.source_list.recommendation}</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
export default Source
