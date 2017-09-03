import { clientReplaceService, clientGetService } from 'project-services'
import React, { Component } from 'react'
import Select from 'react-select'
import './source.styl'

class Source extends Component {
  constructor () {
    super()
    this.state = {
      selectedValue: config.data.source,
      isRecomendation: false,
      isOpenSource: false,
      inputValue: ''
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    const body = `source=${this.state.selectedValue}`
    const response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.source = this.state.selectedValue
      this.forceUpdate()
    }
  }
  changeSelect (e) {
    this.setState({selectedValue: e.value})
    if (e.value === 'recommendation') {
      this.setState({isRecomendation: true})
    } else {
      this.setState({isRecomendation: false})
    }
  }
  componentWillMount () {
    const list = config.translations.source_list
    let options = [
      {value: 'ads', label: list.ads},
      {value: 'fb_page', label: list.fb_page},
      {value: 'family', label: list.family},
      {value: 'friends', label: list.friends},
      {value: 'recommendation', label: list.recommendation}
    ]
    this.setState({options: options})
  }
  async changeInput (e) {
    this.setState({inputValue: e})
    const response = await clientGetService('test')
    // let id = await response.json().then(id => {
    //   return id
    // })
    console.log(response.json)
  }
  render () {
    return (
      <div id='source'>
        <div className={this.state.isOpenSource ? 'hidden' : config.data.source ? 'hidden' : 'add-source-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' onClick={() => { this.setState({ isOpenSource: !this.state.isOpenSource }) }} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_traffic_source}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : config.data.source ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : 'hidden'}>
          <h1>{config.translations.traffic_source}</h1>
          <div className='button-wrap'><button onClick={this.submit}>{config.translations.save}</button></div>
          <div className='select-wrap'>
            <Select className={config.isRtL ? 'left' : 'right'} placeholder={config.translations.select_placeholder}
              onChange={e => { this.changeSelect(e) }} value={this.state.selectedValue} options={this.state.options} />
          </div>
          <div className={this.state.isRecomendation ? 'input-wrap' : 'hidden'}>
            <input type='text' value={this.state.inputValue} onChange={e => { this.changeInput(e.target.value) }} />
          </div>
        </div>
      </div>
    )
  }
}
export default Source
