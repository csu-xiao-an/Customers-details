import { updateService } from 'project-services'
import 'react-select/dist/react-select.css'
import React, { Component } from 'react'
import Select from 'react-select'
import './source.styl'

const client = window._config

class Source extends Component {
  constructor () {
    super()
    this.state = {
      isOpenSource: false,
      selectedValue: client.data.source
    }
    this.handleSource = this.handleSource.bind(this)
    this.logChange = this.logChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleSource () {
    this.setState({ isOpenSource: !this.state.isOpenSource })
  }
  logChange (val) {
    val ? this.setState({selectedValue: val.value}) : this.setState({selectedValue: ''})
  }
  async submit () {
    const url = client.urls.main + client.data.id
    const method = 'PATCH'
    const body = `source=${this.state.selectedValue}`
    await updateService(url, method, body)
  }
  render () {
    const list = client.translations.source_list
    const setValues = prop => ({value: list[prop], label: list[prop]})
    let options = [
      setValues('ads'),
      setValues('fb_page'),
      setValues('family'),
      setValues('friends'),
      setValues('recommendation')
    ]
    return (
      <div id='source'>
        <div className={this.state.isOpenSource ? 'hidden' : client.data.source ? 'hidden' : 'add-source-wrap'}>
          <img src='./dist/media/add.svg' onClick={this.handleSource} />
          <h1>{client.translations.source_arrival}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap' : client.data.source ? 'add-select-wrap' : 'hidden'}>
          <h1>{client.translations.source_arrival}</h1>
          <div className='button-wrap'>
            <button onClick={this.submit}>{client.translations.save}</button>
          </div>
          <div className='select-wrap'>
            <Select
              value={this.state.selectedValue}
              options={options}
              onChange={this.logChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Source
