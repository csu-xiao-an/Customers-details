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
      isViewClients: false,
      isOpenSource: false,
      inputValue: '',
      userId: null,
      clients: []
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    let body = `source=${this.state.selectedValue}`
    if (this.state.userId) {
      body = `source=${this.state.selectedValue}&recommended_by=${this.state.userId}`
    }
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
    if (e.length > 2) {
      const response = await clientGetService(e)
      let id = await response.json().then(id => {
        return id
      })
      this.setState({clients: id})
      this.setState({isViewClients: true})
    } else {
      this.setState({isViewClients: false})
    }
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
            <div className='label'>{config.translations.recommended_by}</div>
            <input type='text' value={this.state.inputValue} onChange={e => { this.changeInput(e.target.value) }} />
            <div className={this.state.isViewClients ? 'clients-list-wrap ' + (config.isRTL ? 'clients-list-wrap-left' : 'clients-list-wrap-right') : 'hidden'}>
              {this.state.clients.map((el, key) => {
                return (<div key={key} onClick={() => { this.setState({inputValue: el.name, userId: el.id, isViewClients: false}) }}>{el.name}</div>)
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Source
