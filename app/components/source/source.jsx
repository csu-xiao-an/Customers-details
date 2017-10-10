import {clientReplaceService, clientGetService} from 'project-services'
import React, {Component} from 'react'
import Select from 'react-select'
import './source.styl'
let timeout

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
  }
  submit = async () => {
    let body = `${config.urls.source}=${this.state.selectedValue}`
    if (this.state.userId) body = `${config.urls.source}=${this.state.selectedValue}&${config.urls.recommended_by}=${this.state.userId}`
    const response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.source = this.state.selectedValue
      this.forceUpdate()
    }
  }
  changeSelect = e => {
    this.setState({selectedValue: e.value, userId: null})
    if (e.value === 'recommendation') { this.setState({isRecomendation: true}) } else { this.setState({isRecomendation: false}) }
  }
  changeInput = e => {
    clearTimeout(timeout)
    this.setState({inputValue: e})
    if (e.length > 0) {
      timeout = setTimeout(async () => this.setState({isViewClients: true, clients: await clientGetService(e)}), config.data.timeout)
    } else { this.setState({isViewClients: false}) }
  }
  render () {
    return (
      <div id='source'>
        <div className={this.state.isOpenSource ? 'hidden' : config.data.source ? 'hidden' : 'add-source-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} onClick={() => { this.setState({ isOpenSource: !this.state.isOpenSource }) }} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_traffic_source}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : config.data.source ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : 'hidden'}>
          <h1>{config.translations.traffic_source}</h1>
          <div className='button-wrap'><button onClick={this.submit}>{config.translations.save}</button></div>
          <div className='select-wrap'>
            <Select className={config.isRtL ? 'left' : 'right'} placeholder={config.translations.select_placeholder} value={this.state.selectedValue}
              onChange={e => { this.changeSelect(e) }} options={config.translations.source_list} />
          </div>
          <div className={this.state.isRecomendation ? 'input-wrap' : 'hidden'}>
            <div className='label'>{config.translations.recommended_by}</div>
            <input type='text' value={this.state.inputValue} onChange={e => { this.changeInput(e.target.value) }} placeholder={config.translations.customer_pl} />
            <div className={this.state.isViewClients ? 'clients-list-wrap ' + (config.isRTL ? 'clients-list-wrap-left' : 'clients-list-wrap-right') : 'hidden'}>
              {this.state.clients.map((i, k) => <div key={k} onClick={() => { this.setState({inputValue: i.name, userId: i.id, isViewClients: false}) }}>{i.name}</div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Source
