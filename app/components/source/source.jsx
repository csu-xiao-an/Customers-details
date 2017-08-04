import { clientUpdateService } from 'project-services'
import 'react-select/dist/react-select.css'
import React, { Component } from 'react'
import Select from 'react-select'
import './source.styl'

class Source extends Component {
  constructor () {
    super()
    this.state = {
      isOpenSource: false,
      selectedValue: config.data.source
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
    const method = 'PATCH'
    const body = `source=${this.state.selectedValue}`
    await clientUpdateService(method, body)
  }
  render () {
    const list = config.translations.source_list
    const setValues = prop => ({value: list[prop], label: list[prop]})
    let options = [
      setValues(list.ads),
      setValues(list.fb_page),
      setValues(list.family),
      setValues(list.friends),
      setValues(list.recommendation)
    ]
    return (
      <div id='source'>
        <div className={this.state.isOpenSource ? 'hidden' : config.data.source ? 'hidden' : 'add-source-wrap'}>
          <img src='./dist/media/add.svg' onClick={this.handleSource} />
          <h1>{config.translations.add_traffic_source}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap' : config.data.source ? 'add-select-wrap' : 'hidden'}>
          <h1>{config.translations.traffic_source}</h1>
          <div className='button-wrap'>
            <button onClick={this.submit}>{config.translations.save}</button>
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
